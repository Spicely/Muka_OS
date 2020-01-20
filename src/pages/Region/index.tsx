import React, { Component } from 'react'
import { find } from 'lodash'
import { message, Modal } from 'antd'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Table, Label, Icon, Image, Tag } from 'components'
import http, { imgUrl, httpUtils, getTitle } from '../../utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView } from 'src/utils/node'
import { IInitState, MukaOS } from 'src/store/state'
import { NavBarThemeData, Color, getUnit } from 'src/components/lib/utils'
import { SET_ROUTERS_DATA, GET_REGION } from 'src/store/action'
import { IRouters } from 'src/store/reducers/routers'
import styled from 'styled-components'

const { confirm } = Modal

interface IProps extends DispatchProp {
    region: MukaOS.Region[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
    lastIds: string[]
    parents: { label: string, value: string }[]
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: justify;
`

class Region extends Component<IProps, IState> {

    public state: IState = {
        classifyVisible: false,
        lastIds: [],
        dialogName: '',
        parents: []
    }

    private fn: IFormFun | null = null

    private title = getTitle('/system/router')

    private columns: ITableColumns<any>[] = [{
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
            return (
                <div>111</div>
                // <div>
                //     {lastIds.includes(val.id) ? null : find(jurisd, { type: 3 }) ? <Label onClick={this.handleAddChildRouter.bind(this, data.id)}>添加子路由</Label> : null}
                //     <Label onClick={this.handleEdit.bind(this, data)}>修改</Label>
                //     {data.status && find(jurisd, { type: 6 }) ? <Label onClick={this.handleSetStatus.bind(this, ids, false)} color="red">禁用</Label> : null}
                //     {!data.status && find(jurisd, { type: 6 }) ? <Label onClick={this.handleSetStatus.bind(this, ids, true)} color="green">启用</Label> : null}
                // </div>
            )
        }
    }]

    public componentDidMount() {
        this.getData()
    }

    private getData() {
        const { dispatch } = this.props
        dispatch({ type: GET_REGION })
    }

    public render(): JSX.Element {
        const { region } = this.props
        const { classifyVisible, dialogName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={<Button mold="primary" onClick={this.setClassifyVisble}>添加省份</Button>}
                />
                <Table
                    columns={this.columns}
                    dataSource={region}
                    rowKey={(data: any) => data.id}
                />
                <Dialog
                    visible={classifyVisible}
                    title={dialogName}
                    onOk={this.handleUpdateOrCreate}
                    async
                    onClose={this.handleClassifyClose}
                >
                    <Form getItems={this.getItems} style={{ padding: getUnit(10) }} />
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
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>路由名称</FromLabel>,
            props: {
                placeholder: '请输入路由名称(输入已经存在的路由会导致创建失败)'
            },
            field: 'name'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>路由地址</FromLabel>,
            props: {
                placeholder: '请输入路由地址(以/开头)',
            },
            field: 'path'
        }, {
            component: 'Input',
            label: <FromLabel>权重</FromLabel>,
            props: {
                placeholder: '数值越高显示越前',
                value: 0,
                type: 'number'
            },
            field: 'sort'
        }, {
            component: 'Select',
            label: <FromLabel>父级路由</FromLabel>,
            props: {
                options: parents
            },
            field: 'parent'
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
                let url = 'router/create'
                if (router.id) {
                    url = 'router/update'
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
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    name: data.name,
                    path: data.path,
                    id: data.id,
                    parent: data.parent,
                    icon: data.icon ? data.icon.id : null,
                    sort: data.sort
                })
            }, 10)
        })
    }
}

export default connect(
    ({ region }: IInitState) => ({
        region
    })
)(Region)