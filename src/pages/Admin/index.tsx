import React, { Component } from 'react'
import { message } from 'antd'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Tag, Table, Label } from 'components'
import http, { httpUtils } from 'src/utils/axios'
import { IJurisdiction } from 'src/store/reducers/jurisdiction'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IUserInfo } from 'src/store/reducers/userInfo'
import { connect, DispatchProp } from 'react-redux'
import { IInitState } from 'src/store/state'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView, FormRequire, FormLable } from 'src/utils/node'
import { NavBarThemeData, Color, getUnit } from 'src/components/lib/utils'
import { SET_SPINLOADING_DATA, SET_USERLIST_DATA } from 'src/store/action'
import moment from 'moment'

interface IProps extends DispatchProp {
    userList: IUserInfo[]
    jurisd: IJurisd[]
    userInfo: IUserInfo
    jurisdiction: IJurisdiction[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
}

class AdminList extends Component<IProps, IState> {

    public state: IState = {
        classifyVisible: false,
        dialogName: ''
    }

    private fn: IFormFun | null = null

    private pageNum: number = 1

    private columns: ITableColumns<any>[] = [{
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',

    }, {
        title: '注册时间',
        dataIndex: 'created_at',
        key: 'created_at',
        render: (value: string) => {
            return moment(value).format('YYYY-MM-DD HH:mm:ss')
        }
    }, {
        title: '权限',
        dataIndex: 'authority',
        key: 'authority',
        render: (authority: any) => {
            return <Tag>{authority.name}</Tag>
        }
    }, {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        render: (val: any, data: IUserInfo) => {
            return (
                <div>
                    <Label onClick={this.handleEdit.bind(this, data)}>修改</Label>
                </div>
            )
        }
    }]

    public render(): JSX.Element {
        const { userList } = this.props
        const { classifyVisible, dialogName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title="用户列表" line="vertical" />}
                    right={<Button mold="primary" onClick={this.setClassifyVisble}>创建管理员</Button>}
                />
                <Table
                    columns={this.columns}
                    dataSource={userList}
                    bordered
                    rowKey={(data: any) => data.id}
                />
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
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('/admin/user/get', {
                page_size: 20,
                page_num: this.pageNum
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            dispatch({ type: SET_USERLIST_DATA, data: data })
        } catch (msg) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(msg)
        }
    }

    private getItems = (fn: IFormFun) => {
        const { jurisdiction } = this.props
        this.fn = fn
        const options = jurisdiction.map((i) => {
            return {
                label: i.name,
                value: i.id
            }
        })
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FormLable><FormRequire color="red">*</FormRequire>用户名</FormLable>,
            props: {
                placeholder: '请输入用户名'
            },
            field: 'username'
        }, {
            component: 'Input',
            label: <FormLable><FormRequire color="red" >*</FormRequire>密码</FormLable>,
            props: {
                placeholder: '请输入密码(修改状态下不更改密码就不填)',
                type: 'password'
            },
            field: 'password'
        }, {
            component: 'Select',
            label: <FormLable><FormRequire color="red" >*</FormRequire>权限</FormLable>,
            props: {
                placeholder: '请选择权限',
                options: options
            },
            field: 'role_id'
        }, {
            component: 'Input',
            label: <FormLable>名称</FormLable>,
            props: {
                placeholder: '请输入使用者名称'
            },
            field: 'users'
        }, {
            component: 'Input',
            label: <FormLable>联系电话</FormLable>,
            props: {
                placeholder: '请输入使用者联系电话'
            },
            field: 'mobile'
        },]
        return items
    }

    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const user = this.fn.getFieldValue()
                if (!user.username) {
                    message.error('请输入用户名')
                    return
                }
                if (!user.password && !user.id) {
                    message.error('请输入密码')
                    return
                }
                if (user.password.length < 6 && !user.id) {
                    message.error('请输入至少6位的密码')
                    return
                }
                if (!user.role_id) {
                    message.error('请选择权限')
                    return
                }
                if (!user.users) {
                    message.error('请输入使用者名称')
                    return
                }
                if (!user.mobile) {
                    message.error('请输入联系电话')
                    return
                }
                if (user.id) {
                    await http('/admin/system-user/create', { ...user })
                } else {
                    await http(`/admin/system-user/create/${user.id}`, { ...user }, { method: 'PUT' })
                }
                // const { dispatch, userList } = this.props

                // dispatch({ type: SET_USERLIST_DATA, data: userList.data })
                message.success('管理员添加成功')
                this.getData()
                this.setState({
                    classifyVisible: false
                })
                this.fn.cleanFieldValue()
            }
        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleEdit = (data: IUserInfo) => {
        this.setState({
            classifyVisible: true,
            dialogName: '修改管理员'
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue(data)
            }, 10)
        })
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
            dialogName: '添加管理员'
        })
    }
}

export default connect(
    ({ userList, userInfo }: IInitState) => ({
        userList,
        userInfo
    })
)(AdminList)