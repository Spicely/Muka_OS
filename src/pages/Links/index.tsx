import React, { Component } from 'react'
import { message, Modal } from 'antd'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Table, Label, Image, Tag } from 'components'
import http, { baseUrl, httpUtils } from 'src/utils/axios'
import { IJurisdiction } from 'src/store/reducers/jurisdiction'
import { IJurisd } from 'src/store/reducers/jurisd'
import { connect, DispatchProp } from 'react-redux'
import { IInitState, MukaOS } from 'src/store/state'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView, FormRequire, FormLable } from 'src/utils/node'
import { NavBarThemeData, Color, getUnit, UploadThemeData } from 'src/components/lib/utils'
import { SET_SPINLOADING_DATA, SET_USERLIST_DATA } from 'src/store/action'
interface IProps extends DispatchProp {
    userList: MukaOS.UserInfo[]
    jurisd: IJurisd[]
    userInfo: MukaOS.UserInfo
    jurisdiction: IJurisdiction[]
}

interface IState {
    classifyVisible: boolean
    previewVisible: boolean
    dialogName: string
    previewImage: string
    page_num: number
    page_size: number
    count: number
    data: any[]
}

class Links extends Component<IProps, IState> {

    public state: IState = {
        previewVisible: false,
        classifyVisible: false,
        dialogName: '',
        page_num: 1,
        page_size: 10,
        count: 0,
        data: [],
        previewImage: '',
    }

    private fn: IFormFun | null = null

    private columns: ITableColumns<any>[] = [{
        title: '链接名称',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '链接地址',
        dataIndex: 'url',
        key: 'url'
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (val) => {
            return <Tag color={val ? 'green' : 'red'}>{val ? '使用中' : '禁用中'}</Tag>
        }
    }, {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        render: (val: any, data: any, index: number) => {
            return (
                <div>
                    {data.status ?
                        <Label onClick={this.handleEdit.bind(this, data, index)} color="red">禁用</Label> :
                        <Label onClick={this.handleEdit.bind(this, data, index)} color="green">启用</Label>
                    }
                </div>
            )
        }
    }]

    public render(): JSX.Element {
        const { classifyVisible, dialogName, data, previewVisible, previewImage, page_num, count } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title="外部链接" line="vertical" />}
                    right={<Button mold="primary" onClick={this.setClassifyVisble}>新增链接</Button>}
                />
                <Table
                    columns={this.columns}
                    dataSource={data}
                    bordered
                    rowKey={(data: any) => data.id}
                    pagination={{
                        current: page_num,
                        total: count,
                        onChange: (page) => {
                            this.setState({
                                page_num: page,
                            }, () => {
                                this.getData()
                            })
                        }
                    }}
                />
                <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={() => {
                        this.setState({ previewVisible: false })
                    }}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                <Dialog
                    visible={classifyVisible}
                    title={dialogName}
                    onOk={this.handleUpdateOrCreate}
                    async
                    onClose={this.handleClassifyClose}
                >
                    <div style={{ padding: `${getUnit(10)} ${getUnit(20)}` }}>
                        <Form getItems={this.getItems} />
                    </div>
                </Dialog>
            </GlobalView>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private async getData() {
        const { dispatch } = this.props
        const { page_num, page_size } = this.state
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('/admin/link/get', {
                page_size: page_size,
                page_num: page_num,
            })
            this.setState({ ...data })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (msg) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(msg)
        }
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'Input',
            label: <FormLable><FormRequire color="red">*</FormRequire>链接名称</FormLable>,
            props: {
                placeholder: "请输入链接名称"
            },
            field: 'name'
        }, {
            component: 'Input',
            label: <FormLable><FormRequire color="red">*</FormRequire>链接地址</FormLable>,
            props: {
                placeholder: "请输入链接地址"
            },
            field: 'url'
        }, {
            component: 'Input',
            label: <FormLable><FormRequire color="red">*</FormRequire>排序</FormLable>,
            props: {
                type: 'number',
                placeholder: "请输入排序"
            },
            field: 'sort'
        }]
        return items
    }

    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const { data, count } = this.state
                const value = this.fn.getFieldValue()
                if (!value.name) {
                    message.error('请输入链接名称')
                    return
                }
                if (!value.url) {
                    message.error('请输入链接地址')
                    return
                }
                value.sort = Number(value.sort || 1)
                const v = await http('/admin/link/create', value)
                data.unshift(v)
                this.setState({
                    data: [...data],
                    count: count + 1
                })
                message.success('添加成功')
                this.setState({
                    classifyVisible: false
                })
                this.fn.cleanFieldValue()
            }
        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleEdit = async (v: any, index: number) => {
        const { dispatch } = this.props
        const { data } = this.state
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            await http('/admin/link/update', {
                id: v.id,
                name: v.name,
                url: v.url,
                sort: v.sort,
                status: !v.status,
            })
            data[index].status = !v.status
            this.setState({ data: [...data] })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (msg) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(msg)
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
            dialogName: '添加轮播'
        })
    }
}

export default connect(
    ({ userList, userInfo }: IInitState) => ({
        userList,
        userInfo
    })
)(Links)