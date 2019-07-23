import { Component } from 'react'
import { notification, Modal, Icon as AIcon } from 'antd'
import { connect } from 'react-redux'
import { setCookie } from 'nookies'
import PageHead from 'layouts/PageHead'
import PageLayout from 'layouts/PageLayout'
import http, { IinitProps, IRresItems, IRresItem } from 'utils/axios'
import { SET_ROUTER, IRouter } from 'store/action/router'
import { SET_ICONS } from 'store/action/icons'
import { Label, LabelHeader, NavBar, Dialog, ILFormFun, ILFormItem, LForm, Table } from 'components'
import { mapDispatchToProps, IDispatchProps } from 'store/action/icons'
import { mapStateToProps, SET_USERLIST, IUser, IJurisdiction as Jurisd } from 'store/action/userList'
import { router_circle } from '../settings/router/index.less'
import { SET_JURISD, IJurisdiction } from 'store/action/jurisdiction'
import { SET_USERINFO, IUserInfo } from 'store/action/userInfo'

const confirm = Modal.confirm
interface IState {
    visible: boolean
}

interface IProps extends IDispatchProps {
    router: IRouter[]
    userList: IUser[]
    userInfo: IUserInfo
    jurisdiction: IJurisdiction[]
}


class UserList extends Component<IProps, IState> {
    public static async getInitialProps(ctx: IinitProps) {
        const userInfo: IRresItem = await http('user/info', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        if (userInfo.status === 203 && ctx.res) {
            setCookie(ctx, 'hist', ctx.pathname, {
                maxAge: 60 * 2,
                path: '/',
            })
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res && ctx.res.end()
            return {}
        }
        ctx.store.dispatch({ type: SET_ROUTER, data: userInfo.data.router })
        delete userInfo.data.router
        ctx.store.dispatch({ type: SET_USERINFO, data: userInfo.data })
        const icons: IRresItems = await http('icons/find', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        ctx.store.dispatch({ type: SET_ICONS, data: icons.data })
        const userList: IRresItems = await http('user/find', {
            status: true,
            skip: 1
        }, {
                headers: { cookie: ctx.req && ctx.req.headers.cookie },
            })
        ctx.store.dispatch({ type: SET_USERLIST, data: userList.data })
        const jurisdiction: IRresItems = await http('jurisdiction/find', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        ctx.store.dispatch({ type: SET_JURISD, data: jurisdiction.data })
        return {}
    }

    public state = {
        visible: false,
        edit: false
    }

    private type: 'add' | 'update' = 'add'

    private index: number = 0

    private columns: ITableColumns[] = [{
        title: '用户名', dataIndex: 'userName', key: 'userName',
    }, {
        title: '状态', dataIndex: 'status', key: 'status',
        render: (val: boolean) => val ? <Label color="green">使用中</Label> : <Label color="red">禁用中</Label>
    }, {
        title: '权限', dataIndex: 'jurisdiction', key: 'jurisdiction',
        render: (val: Jurisd) => <Label>{val.name}</Label>
    }, {
        title: '操作',
        render: (val: any, data: IUser, index: number) => (
            <div className="flex_center">
                <div className="flex">
                    {data.status ?
                        <Label
                            color="red"
                            onClick={this.updateUser.bind(this, { id: data.id, status: !data.status }, index)}
                        >
                            禁用
                        </Label> :
                        <Label
                            color="green"
                            onClick={this.updateUser.bind(this, { id: data.id, status: !data.status }, index)}
                        >
                            启用
                        </Label>}
                    <Label onClick={this.delUser.bind(this, data, index)}>删除</Label>
                    <Label onClick={this.handleEdit.bind(this, data, index)}>编辑</Label>
                </div>
            </div>
        )
    }]

    private skip: number = 0

    private exFun?: ILFormFun

    private getItems = (exFun: ILFormFun): ILFormItem[] => {
        const { jurisdiction } = this.props
        this.exFun = exFun
        const item: ILFormItem[] = [{
            field: 'id',
            component: 'NULL'
        }, {
            component: 'Input',
            props: {
                label: '用户名:',
            },
            field: 'userName'
        }, {
            component: 'Input',
            props: {
                label: '密  码:',
                type: 'password'
            },
            field: 'passWord'
        }, {
            component: 'Select',
            props: {
                label: '权 限:',
                showSearch: true,
                placeholder: '请选择权限',
                optionFilterProp: 'children',
                filterOption: (input, option: any) => option.props.children.props.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0,
            },
            field: 'jurisdiction'
        }]
        return item
    }
    public render(): JSX.Element {
        const { userList } = this.props
        const { visible } = this.state
        const navBar = (
            <NavBar
                title={<LabelHeader title="权限设置" line="vertical" />}
                right={
                    <div className="flex_justify" style={{ height: '35px' }}>
                        <Label onClick={this.handleShowDialog}>添加用户</Label>
                    </div>
                }
            />
        )
        return (
            <PageHead title="用户管理">
                <PageLayout
                    defaultSelected="/user/list"
                    navBar={navBar}
                >
                    <Table
                        columns={this.columns}
                        dataSource={userList}
                        rowKey={record => record.id}
                    />
                    <Dialog
                        visible={visible}
                        onCancel={this.handlehideDialog}
                        onOk={this.handleEditUser}
                    >
                        <LForm getItems={this.getItems} />
                    </Dialog>
                </PageLayout>
            </PageHead>
        )
    }

    private handlehideDialog = () => {
        this.setState({
            visible: false
        })
        if (this.exFun) {
            this.exFun.cleanFieldValue()
            this.exFun.updateFieldProps({
                'userName': {
                    disabled: false
                }
            })
        }
    }

    private handleEditUser = () => {
        if (this.type === 'add') {
            this.handleAddUser()
        } else {
            const { userList } = this.props
            this.updateUser(userList[this.index], this.index)
        }
        this.handlehideDialog()
    }

    private handleAddUser = async () => {
        if (this.exFun) {
            const data = this.exFun.getFieldValue()
            if (!data.userName) {
                notification.error({
                    message: '请输入用户名'
                })
                return
            }
            if (data.passWord.length < 6) {
                notification.error({
                    message: '请输入至少6位密码'
                })
                return
            }
            try {
                const newUser: IRresItem<IUser> = await http('user/register', data)
                const { setUserList, userList } = this.props
                notification.success({
                    message: newUser.msg
                })
                setUserList([
                    newUser.data,
                    ...userList,
                ])
                this.exFun && this.exFun.cleanFieldValue()
                this.setState({
                    visible: false
                })
            } catch (e) {
                console.error(e)
            }
        } else {
            notification.error({
                message: '初始化出错'
            })
        }
    }

    private handleShowDialog = () => {
        this.type = 'add'
        this.setState({
            visible: true
        })
    }

    private async updateUser(params: IValue = {}, index: number) {
        try {
            if (this.type === 'update') {
                if (this.exFun) {
                    const data = this.exFun.getFieldValue(['jurisdiction'])
                    params.jurisdiction = data.jurisdiction
                }
            }
            const res: IRresItem<IUser> = await http('user/update', params)
            const { setUserList, userList } = this.props
            userList[index] = res.data
            notification.success({
                message: res.msg
            })
            setUserList([...userList])
        } catch (e) {
            console.error(e)
        }
    }

    private handleEdit(data: IUser, index: number) {
        this.index = index
        this.type = 'update'
        this.setState({
            visible: true
        }, () => {
            setTimeout(() => {
                if (this.exFun) {
                    const { userInfo } = this.props
                    this.exFun.setFieldValue({
                        userName: data.userName,
                        jurisdiction: userInfo.jurisdiction.id
                    })
                    this.exFun.updateFieldProps({
                        'userName': {
                            disabled: true
                        }
                    })
                }
            }, 10)
        })
    }

    private delUser(data: IUser, index: number) {
        confirm({
            okText: '确认',
            cancelText: '取消',
            icon: null,
            content: (
                <div>
                    <AIcon type="exclamation-circle" className={router_circle} />
                    删除后不可恢复,确定要删除么?
                </div>
            ),
            onOk: async () => {
                try {
                    const res: IRresItem<IUser[]> = await http('user/delete', {
                        id: data.id
                    })
                    const { setUserList, userList } = this.props
                    notification.success({
                        message: res.msg
                    })
                    userList.splice(index, 1)
                    setUserList([...userList])
                } catch (e) {
                    console.error(e)
                }
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)