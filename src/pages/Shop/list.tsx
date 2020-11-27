import React, { Component } from 'react'
import { message, Modal } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Table, Label, Tag } from 'components'
import http, { httpUtils, baseUrl } from '../../utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView } from 'src/utils/node'
import { IInitState, MukaOS } from 'src/store/state'
import { NavBarThemeData, Color, getUnit, DialogThemeData } from 'src/components/lib/utils'
import { SET_GOODS_LIST_DATA, SET_ROUTERS_DATA, SET_SPINLOADING_DATA } from 'src/store/action'
import { IRouter } from 'src/store/reducers/router'

declare const AMap: any

const { confirm } = Modal

interface IProps extends DispatchProp {
    goodsList: MukaOS.GoodsList
}

const navBarTheme = new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })

interface IState {
    classifyVisible: boolean
    dialogName: string
    lastIds: number[]
    parents: { label: number, value: any }[]
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: justify;
`

const dialogTheme = new DialogThemeData({
    height: 'auto',
    minHeight: 400
})


class ShopList extends Component<IProps, IState> {

    public state: IState = {
        classifyVisible: false,
        lastIds: [],
        dialogName: '',
        parents: []
    }

    private fn: IFormFun | null = null

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
        render: (val: any, data: IRouter) => {
            return (
                <div>
                    <Label onClick={this.handleEdit.bind(this, data)}>修改</Label>
                </div>
            )
        }
    }]

    public componentDidMount() {
        this.getData()
    }

    private async getData() {
        const { dispatch, goodsList } = this.props
        if (goodsList.data.length) return
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('/admin/goods/find', {
                page_num: goodsList.page_num,
                page_size: goodsList.page_size,
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            dispatch({ type: SET_GOODS_LIST_DATA, data: data })
        } catch (msg) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(msg)
        }
    }

    public render(): JSX.Element {
        const { goodsList } = this.props
        const { classifyVisible, dialogName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={navBarTheme}
                    title={<LabelHeader title="商品列表" line="vertical" />}
                    right={<Button mold="primary" onClick={this.setClassifyVisble}>添加商品</Button>}
                />
                <Table
                    bordered
                    columns={this.columns}
                    dataSource={goodsList.data}
                    rowKey={(data: any) => data.id}
                    expandedRowKeys={goodsList.data.map(item => item.id)}
                />
                <Dialog
                    visible={classifyVisible}
                    title={dialogName}
                    theme={dialogTheme}
                    onOk={this.handleUpdateOrCreate}
                    async
                    onClose={this.handleClassifyClose}
                >
                    <Form getItems={this.getItems} style={{ padding: getUnit(10) }} />
                </Dialog>
            </GlobalView>
        )
    }

    private getItems = (fn: IFormFun) => {
        const { parents } = this.state
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>商品名称</FromLabel>,
            field: 'name'
        }, {
            component: 'Upload',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>展示图</FromLabel>,
            props: {
                maxLength: 5,
                crop: true,
                fileTypes: ['.jpeg', '.jpg', '.png'],
                cropProps: {
                    cropSize: {
                        width: 720,
                        height: 460,
                    },
                },
            },
            field: 'logo'
        }, {
            component: 'Select',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>商品类型</FromLabel>,
            props: {
                options: [{
                    label: '普通商品',
                    value: 1,
                }, {
                    label: '手办',
                    value: 2,
                }, {
                    label: '门票',
                    value: 3,
                }],
                value: 1,
            },
            field: 'type'
        }, {
            component: 'AsyncSelect',
            label: <FromLabel>销售地区</FromLabel>,
            props: {
                url: baseUrl + '/admin/city/options',
                onBeforeOptions: (data: any[]) => {
                    return data.map((i) => {
                        return {
                            label: i.name,
                            value: i.id,
                            children: i.ascription?.map((v: any) => {
                                return {
                                    label: v.name,
                                    value: v.id,
                                }
                            })
                        }
                    });
                }
            },
            field: 'city'
        }, {
            component: 'Map',
            label: <FromLabel>选择地区</FromLabel>,
            // visible: (value) => !!value.city,
            props: {
                apiKey: '3eed71ca58c5e7517c830080a89589fc',
                width: 'auto',
                height: 300,
                showMaxBtn: true,
                isInDialog: true,
                UIPlugins: ['misc/PoiPicker'],
                poiPicker: true,
                onInit: (map) => {
                    
                }
            }
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
                if (!router.id) delete router.id
                if (!router.router_id) delete router.router_id
                const data = await http(router.id ? '/admin/router/update' : '/admin/router/create', {
                    ...router,
                    'icon_id': router.icon_id ? Number(router.icon_id) : null
                })
                const { dispatch } = this.props
                dispatch({ type: SET_ROUTERS_DATA, data: data })
                message.success(router.id ? '更新成功' : '创建成功')
                this.fn.cleanFieldValue()
                this.setState({
                    classifyVisible: false
                })
            }

        } catch (msg) {
            console.log(msg)
            message.error(msg)
        }
    }

    private handleSetStatus = async (ids: number[], status: boolean) => {
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
            dialogName: '创建商品'
        })
    }

    private handleEdit = (data: IRouter) => {
        this.setState({
            classifyVisible: true,
            dialogName: '修改商品'
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    ...data,
                    icon: data.icon ? data.icon.id : null,
                })
            }, 10)
        })
    }
}

export default connect(
    ({ goodsList }: IInitState) => ({
        goodsList
    })
)(ShopList)