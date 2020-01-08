import React, { Component } from 'react'
import { message } from 'antd'
import moment from 'moment'
import { find } from 'lodash'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Tag, Table, Label } from 'components'
import http, { httpUtils, getTitle } from 'src/utils/axios'
import { IUserList } from 'src/store/reducers/userList'
import { IJurisdiction } from 'src/store/reducers/jurisdiction'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IUserInfo } from 'src/store/reducers/userInfo'
import { connect, DispatchProp } from 'react-redux'
import { IInitState } from 'src/store/state'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView, FormRequire, FormLable } from 'src/utils/node'
import { NavBarThemeData, Color } from 'src/components/lib/utils'
import { SET_USERLIST_DATA, GET_USERLIST } from 'src/store/action'

interface IProps extends DispatchProp {
    userList: IUserList[]
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

    private title = getTitle('/admin')

    private columns: ITableColumns<any>[] = [{
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',

    }, {
        title: '权限',
        dataIndex: 'jurisdiction',
        key: 'jurisdiction',
        render: (jurisdiction: { name: string }) => {
            return jurisdiction.name
        }
    }, {
        title: '上次登录时间',
        dataIndex: 'history',
        key: 'history',
        render: (time: { createdAt: number }[]) => {
            if (time[0]) {
                return moment(time[0].createdAt).format('YYYY-MM-DD HH:mm:ss')
            } else {
                return '无登录记录'
            }
        }
    }, {
        title: '注册时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (time: number) => {
            return moment(time).format('YYYY-MM-DD HH:mm:ss')
        }
    }, {
        title: '使用状态',
        dataIndex: 'status',
        key: 'status',
        render: (status: boolean) => {
            return <Tag color={status ? '#7edc55' : 'red'}>{status ? '使用中' : '禁用中'}</Tag>
        }
    }, {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        render: (val: any, data: IUserList) => {
            const { jurisd, userInfo } = this.props
            return (
                <div>
                    {jurisd.find((i) => i.type === 10) && data.id !== userInfo.id ? <Label onClick={this.handleEdit.bind(this, data)}>修改</Label> : null}
                </div>
            )
        }
    }]

    public render(): JSX.Element {
        const { userList, jurisd } = this.props
        const { classifyVisible, dialogName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={find(jurisd, { type: 7 }) ? <Button mold="primary" onClick={this.setClassifyVisble}>创建权限</Button> : null}
                />
                <Table
                    columns={this.columns}
                    dataSource={userList}
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

    public componentDidMount() {
        this.getData()
    }

    private getData() {
        const { dispatch } = this.props
        dispatch({ type: GET_USERLIST })
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
            field: 'userName'
        }, {
            component: 'Input',
            label: <FormLable><FormRequire color="red" >*</FormRequire>密码</FormLable>,
            props: {
                placeholder: '请输入密码(修改状态下不更改密码就不填)',
                type: 'password'
            },
            field: 'passWord'
        }, {
            component: 'Select',
            label: <FormLable><FormRequire color="red" >*</FormRequire>权限</FormLable>,
            props: {
                placeholder: '请选择权限',
                options: options
            },
            field: 'jurisdiction'
        },]
        return items
    }

    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const user = this.fn.getFieldValue()
                if (!user.userName) {
                    message.error('请输入用户名')
                    return
                }
                if (!user.passWord && !user.id) {
                    message.error('请输入密码')
                    return
                }
                if (user.passWord.length < 6 && !user.id) {
                    message.error('请输入至少6位的密码')
                    return
                }
                if (!user.jurisdiction) {
                    message.error('请选择权限')
                    return
                }
                let url = 'user/register'
                if (user.id) {
                    url = 'user/update'
                }
                const { dispatch } = this.props
                const userList = await http(url, {
                    ...user
                })
                dispatch({ type: SET_USERLIST_DATA, data: userList.data })
                message.success(userList.msg)
                this.setState({
                    classifyVisible: false
                })
                this.fn.cleanFieldValue()
            }
        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleEdit = (data: IUserList) => {
        this.setState({
            classifyVisible: true,
            dialogName: '修改管理员'
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    id: data.id,
                    userName: data.userName,
                    jurisdiction: data.jurisdiction.id
                })
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
    ({ userList, jurisd, jurisdiction, userInfo }: IInitState) => ({
        userList,
        jurisd,
        jurisdiction,
        userInfo
    })
)(AdminList)