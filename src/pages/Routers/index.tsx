import React, { Component } from 'react'
import { find } from 'lodash'
import { message, Modal } from 'antd'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, NavBar, Table, Label, Icon, Image, Tag } from 'components'
import http, { imgUrl, httpUtils, getTitle } from '../../utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView } from 'src/utils/node'
import { IInitState } from 'src/store/state'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IIcons } from 'src/store/reducers/icons'
import { NavBarThemeData, Color } from 'src/components/lib/utils'
import { SET_ROUTERS_DATA, GET_ROUTER } from 'src/store/action'
import { IRouters } from 'src/store/reducers/routers'

const { confirm } = Modal

interface IProps extends DispatchProp {
    routers: IRouters[]
    lastIds: string[]
    jurisd: IJurisd[]
    icons: IIcons[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
    lastIds: string[]
    parents: { label: string, value: string }[]
}

class Routers extends Component<IProps, IState> {

    public state: IState = {
        classifyVisible: false,
        lastIds: [],
        dialogName: '',
        parents: []
    }

    private fn: IFormFun | null = null

    private title = getTitle('/routers')

    private columns: ITableColumns[] = [{
        title: '路由名称',
        dataIndex: 'name',
        key: 'name',

    }, {
        title: '路由地址',
        dataIndex: 'path',
        key: 'path'
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'staus',
        render: (status: boolean) => {
            return <Tag color={status ? '#7edc55' : 'red'}>{status ? '使用中' : '禁用中'}</Tag>
        }
    }, {
        title: '操作',
        key: 'action',
        render: (val: any, data: IRouters) => {
            const { jurisd } = this.props
            const { lastIds } = this.state
            const ids: string[] = []
            ids.push(data.id)
            if (data.children) {
                data.children.map((i) => {
                    ids.push(i.id)
                    if (i.children) {
                        i.children.map((z: any) => {
                            ids.push(z.id)
                        })
                    }
                })
            }
            return (
                <div>
                    {lastIds.includes(val.id) ? null : find(jurisd, { type: 3 }) ? <Label onClick={this.handleAddChildRouter.bind(this, data.id)}>添加子路由</Label> : null}
                    <Label onClick={this.handleEdit.bind(this, data)}>修改</Label>
                    {data.status && find(jurisd, { type: 6 }) ? <Label onClick={this.handleSetStatus.bind(this, ids, false)} color="red">禁用</Label> : null}
                    {!data.status && find(jurisd, { type: 6 }) ? <Label onClick={this.handleSetStatus.bind(this, ids, true)} color="green">启用</Label> : null}
                </div>
            )
        }
    }]

    public componentDidMount() {
        this.getData()
        this.initIds()
    }

    private getData() {
        const { dispatch } = this.props
        dispatch({ type: GET_ROUTER })
    }

    public render(): JSX.Element {
        const { jurisd, routers } = this.props
        const { classifyVisible, dialogName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={jurisd.find((i) => i.type === 3) ? <Button mold="primary" onClick={this.setClassifyVisble}>添加路由</Button> : null}
                />
                <Table
                    columns={this.columns}
                    dataSource={routers}
                    rowKey={(data: any) => data.id}
                />
                <Dialog
                    visible={classifyVisible}
                    title={dialogName}
                    onOk={this.handleUpdateOrCreate}
                    async
                    onClose={this.handleClassifyClose}
                >
                    <Form getItems={this.getItems} />
                </Dialog>
            </GlobalView>
        )
    }

    private handleAddChildRouter = (parentId: string) => {
        this.setState({
            classifyVisible: true,
            dialogName: '创建子路由'
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    'parent': parentId
                })
            }, 10)
        })
    }

    private getItems = (fn: IFormFun) => {
        const { parents } = this.state
        const { icons } = this.props
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <div><Label color="red">*</Label>路由名称</div>,
            props: {
                placeholder: '请输入路由名称(输入已经存在的路由会导致创建失败)'
            },
            field: 'name'
        }, {
            component: 'Input',
            label: <div><Label color="red">*</Label>路由地址</div>,
            props: {
                placeholder: '请输入路由地址(以/开头)'
            },
            field: 'path'
        }, {
            component: 'Select',
            label: <div>父级路由</div>,
            props: {
                options: parents
            },
            field: 'parent'
        }, {
            component: 'Select',
            label: <div>路由图标</div>,
            props: {
                options: icons.map((i) => {
                    const name: any = i.name
                    return {
                        value: i.id,
                        label: (
                            <div className="flex">
                                <div >
                                    {i.type === 'icon' ? <Icon icon={name} /> : null}
                                    {i.type === 'image' ? <Image src={imgUrl + name} /> : null}
                                </div>
                                <div className="flex_1">{i.name}</div>
                            </div>
                        )
                    }
                })
            },
            field: 'icon'
        }]
        return items
    }


    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const router = this.fn.getFieldValue()
                if (!router.name) {
                    message.error('请输入路由名称')
                    return
                }
                if (!router.path) {
                    message.error('请输入路由地址')
                    return
                }
                let url = 'routers/create'
                if (router.id) {
                    url = 'routers/update'
                }
                const data = await http(url, {
                    ...router
                })
                const { dispatch } = this.props
                dispatch({ type: SET_ROUTERS_DATA, data: data.data })
                message.success(data.msg)
                this.fn.cleanFieldValue()
                this.setState({
                    classifyVisible: false
                }, () => {
                    this.initIds()
                })
            }

        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleSetStatus = async (ids: string[], status: boolean) => {
        try {
            if (ids.length > 1) {
                confirm({
                    title: '该路由包含子路由，确认会全部更改',
                    onOk: async () => {
                        const data = await http('routers/update', {
                            id: ids,
                            status
                        })
                        const { dispatch } = this.props
                        dispatch({ type: SET_ROUTERS_DATA, data: data.data })
                        message.success(data.msg)
                        this.setState({
                            classifyVisible: false
                        }, () => {
                            this.initIds()
                        })
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            } else {
                const data = await http('routers/update', {
                    id: ids,
                    status
                })

                const { dispatch } = this.props
                dispatch({ type: SET_ROUTERS_DATA, data: data.data })
                message.success(data.msg)
                this.setState({
                    classifyVisible: false
                }, () => {
                    this.initIds()
                })
            }

        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleClassifyClose = () => {
        this.setState({
            classifyVisible: false,
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private setClassifyVisble = () => {
        this.setState({
            classifyVisible: true,
            dialogName: '创建路由'
        })
    }

    private handleEdit = (data: IRouters) => {
        this.setState({
            classifyVisible: true,
            dialogName: '修改路由'
        }, () => {
            this.initIds(data.id)
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    name: data.name,
                    path: data.path,
                    id: data.id,
                    parent: data.parent,
                    icon: data.icon ? data.icon.id : null
                })
            }, 10)
        })
    }

    private initIds = (id?: string) => {
        const { routers } = this.props
        const lastIds: string[] = []
        const parents: { label: string, value: string }[] = []
        routers.map((i: any) => {
            if (i.id !== id) {
                parents.push({
                    label: i.name,
                    value: i.id
                })
            }
            if (i.children) {
                i.children.map((z: any) => {
                    if (z.id !== id) {
                        parents.push({
                            label: z.name,
                            value: z.id
                        })
                    }
                    if (z.children) {
                        z.children.map((v: any) => {
                            lastIds.push(v.id)
                        })
                    }
                })
            }
        })
        this.setState({
            lastIds,
            parents
        })
    }
}

export default connect(
    ({ routers, jurisd, icons }: IInitState) => ({
        routers,
        jurisd,
        icons
    })
)(Routers)