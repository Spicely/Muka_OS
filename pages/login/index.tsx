import { Component } from 'react'
import Router from 'next/router'
import { notification } from 'antd'
import Cookies from 'js-cookie'
import { LForm, ILFormItem, ILFormFun } from 'components'
import PageHead from 'layouts/PageHead'
import http, { imgUrl, IRresItem } from 'utils/axios'
import { login, login_box, login_logo, login_int, login_sub } from './index.less'


interface IProps {
    hist: string
    bgImgUrl?: string
    logoImgUrl?: string
}

export default class Login extends Component<IProps, any> {
    public static async getInitialProps() {
        const data: IRresItem = await http('config/find', { path: 'login' })
        return data.data
    }

    private setItem = (exFun: ILFormFun): ILFormItem[] => {
        return [
            {
                component: 'Input',
                props: {
                    placeholder: "用户名",
                },
                field: 'userName'
            },
            {
                component: 'Input',
                field: 'passWord',
                props: {
                    placeholder: "请输入密码",
                    type: 'password',
                },
            },
            {
                component: 'Radio',
                field: 'keep',
                props: {
                    children: "保持登陆",
                    className: login_int,
                    checked: true
                }
            },
            {
                component: 'Button',
                props: {
                    children: "登录",
                    className: login_sub,
                    mold: 'primary',
                    onClick: () => {
                        const data = exFun.getFieldValue(['userName', 'passWord', 'keep'])
                        if (!data.userName) {
                            notification.error({
                                message: '请输入用户名'
                            })
                            return
                        }
                        if (data.passWord.length < 6) {
                            notification.error({
                                message: '请输入至少6位的密码'
                            })
                            return
                        }
                        this.login(data)
                    }
                }
            }]
    }
    public render(): JSX.Element {
        const { logoImgUrl, bgImgUrl } = this.props
        return (
            <PageHead title="登录">
                <div className={login} style={{ backgroundImage: `url(${imgUrl + bgImgUrl})` }}>
                    <div className={login_box}>
                        <div className={login_logo} style={{ backgroundImage: `url(${imgUrl + logoImgUrl})` }} />
                        <LForm getItems={this.setItem} />
                    </div>
                </div>
            </PageHead>
        )
    }

    public componentDidMount() {
        // const { history } = this.props
        // const admin_id = Cookies.get('admin_id')
        // if (admin_id) {
        //     history.replace('/router/home')
        // }
    }

    private login = async (params: IValue) => {
        const hist = Cookies.get('hist')
        try {
            const data: IRresItem<any> = await http('user/login', params)
            Router.replace(hist || '/')
        } catch (e) {
            console.log(e)
        }
    }
}