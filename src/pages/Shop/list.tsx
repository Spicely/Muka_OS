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
import moment from 'moment'

declare const AMap: any

const { confirm } = Modal

interface IProps extends DispatchProp {
    goodsList: MukaOS.GoodsList
}

const navBarTheme = new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })

const AddClass = styled.div`
    cursor: pointer;
    color:${({ theme }) => theme.primarySwatch};
`

interface IState {
    visible: boolean
    visibleName: string
    classifyVisible: boolean
    classifyName: string
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
        visible: false,
        visibleName: '',
        classifyVisible: false,
        classifyName: '',
        lastIds: [],
        parents: []
    }

    private fn: IFormFun | null = null

    private index: number = 0

    private columns: ITableColumns<any>[] = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',

    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    }, {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex'
    }, {
        title: 'WhatsApp',
        dataIndex: 'whatsApp',
        key: 'whatsApp'
    }, {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile'
    }, {
        title: '自我介绍',
        dataIndex: 'introduce',
        key: 'introduce'
    }, {
        title: '创建时间',
        dataIndex: 'created_at',
        key: 'created_at',
        render: (val) => {
            return moment(val).format('YYYY-MM-DD HH:mm:ss')
        }
    }, {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        render: (val: any, data: any, index: number) => {
            return (
                <div>
                    <Label onClick={this.handleDelete.bind(this, data.id)} color="red">删除</Label>
                    <Label onClick={this.handleEdit.bind(this, data, index)} color="green">修改</Label>
                </div>
            )
        }
    }]

    public componentDidMount() {
        this.getData()
    }

    private async getData() {
        const { dispatch, goodsList } = this.props
        // if (goodsList.data.length) return
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
        const { visible, visibleName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={navBarTheme}
                    title={<LabelHeader title="申请列表" line="vertical" />}
                />
                <Table
                    bordered
                    columns={this.columns}
                    dataSource={goodsList.data}
                    rowKey={(data: any) => data.id}
                    pagination={{
                        current: goodsList.page_num,
                        total: goodsList.count,
                        onChange: (page) => {
                            const { dispatch, goodsList } = this.props
                            goodsList.page_num = page
                            dispatch({ type: SET_GOODS_LIST_DATA, data: { ...goodsList } })
                            this.getData()
                        }
                    }}
                    expandedRowKeys={goodsList.data.map(item => item.id)}
                />
                <Dialog
                    visible={visible}
                    title={visibleName}
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

    private handleDelete = async (id: any) => {
        const { dispatch, goodsList } = this.props
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('/admin/goods/delete', {
                page_num: goodsList.page_num,
                page_size: goodsList.page_size,
                id: id,
            })
            dispatch({ type: SET_GOODS_LIST_DATA, data: data })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (msg) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(msg)
        }
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>姓名</FromLabel>,
            field: 'name'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>年龄</FromLabel>,
            field: 'age',
            props: { type: 'number' }
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>性别</FromLabel>,
            field: 'sex'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>WhatsApp</FromLabel>,
            field: 'whatsApp'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>手机号</FromLabel>,
            field: 'mobile'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>自我介绍</FromLabel>,
            field: 'introduce'
        }]
        return items
    }


    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const data = this.fn.getFieldValue()
                if (!data.name) {
                    message.error('Please enter name')
                    return
                }
                if (!Number(data.age)) {
                    message.error('Please enter age')
                    return
                }
                if (!data.sex) {
                    message.error('Please enter sex')
                    return
                }
                if (!data.whatsApp) {
                    message.error('Please enter whatsApp')
                    return
                }
                if (!data.mobile) {
                    message.error('Please enter Mobile Phone')
                    return
                }
                if (!data.introduce) {
                    message.error('Please enter self-introduction')
                    return
                }
                await http('/admin/goods/update', data)
                const { dispatch, goodsList } = this.props
                goodsList.data[this.index] = data
                goodsList.data = [...goodsList.data]
                this.setState({
                    visible: false
                })
                dispatch({ type: SET_ROUTERS_DATA, data: { ...goodsList } })
                message.success('更新成功')
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

    private handleClassifyClose = () => {
        this.setState({
            visible: false,
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private handleEdit = (data: any, index: number) => {
        this.index = index
        this.setState({
            visible: true,
            visibleName: '修改'
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    ...data
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