import React, { Component, ChangeEvent } from 'react'
import styled from 'styled-components'
import { Form, Icon } from 'components'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { InputThemeData, Color, IconThemeData, ThemeData, RadioThemeData } from 'src/components/lib/utils'
import http, { httpUtils } from 'src/utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import { SET_LOGIN } from 'src/store/action'

const LoginView = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('https://i.muka.site/pixiv/pixiv_2019_06_07/75063657_p0.png');
    background-size: cover;
    position: relative;
`

const LoginBg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    filter: blur(3px);
`

const LoginBox = styled.div`
    width: ${() => 854 * ThemeData.ratio + ThemeData.unit};
    height: ${() => 576 * ThemeData.ratio + ThemeData.unit};
    box-shadow: 0 0 ${() => 15 * ThemeData.ratio + ThemeData.unit} rgba(167, 167, 167, 0.52);
    position: relative;
    z-index: 1;
`

const LoginBoxView = styled.div`
    padding: ${() => 60 * ThemeData.ratio + ThemeData.unit} ${() => 40 * ThemeData.ratio + ThemeData.unit};
    background-size: cover;
    &:last-child {
        background-color: #2c2d2f;
    }
`

const LoginTitle = styled.div`
    font-size: ${() => 24 * ThemeData.ratio + ThemeData.unit};
    color: #60baaf;
    text-align: center;
`

interface IProps extends RouteComponentProps { }

interface IState {
    passWord: string
    userName: string
}

const inputTheme = new InputThemeData({
    inputColor: Color.fromRGBO(0, 0, 0, 0),
    color: Color.fromRGB(255, 255, 255),
    iconCloseTheme: new IconThemeData({
        color: Color.fromRGB(255, 255, 255),
        size: 13
    })
})

class Login extends Component<IProps & DispatchProp, IState> {

    private fn: IFormFun | null = null

    public render(): JSX.Element {
        return (
            <LoginView className="flex_center">
                <LoginBg />
                <LoginBox className="flex">
                    <LoginBoxView
                        className="flex_1"
                        style={{
                            backgroundImage: 'url(https://i.muka.site/pixiv/pixiv_2019_04_23/74300605_p0.png)'
                        }}
                    />
                    <LoginBoxView className="flex_1">
                        <LoginTitle>登录</LoginTitle>
                        <Form getItems={this.getItem} style={{ marginTop: '1.5rem' }} />
                    </LoginBoxView>
                </LoginBox>
            </LoginView>
        )
    }

    public state: IState = {
        passWord: '',
        userName: ''
    }

    private getItem = (fn: IFormFun) => {
        this.fn = fn
        const { userName, passWord } = this.state
        const item: IFormItem[] = [{
            component: 'Input',
            props: {
                placeholder: '用户名',
                preIcon: <Icon icon="md-person" theme={new IconThemeData({ color: Color.fromRGB(255, 255, 255) })} />,
                value: userName,
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    this.setState({
                        userName: e.target.value
                    })
                },
                theme: inputTheme,
            },
            field: 'userName'
        }, {
            component: 'Input',
            props: {
                placeholder: '密码',
                type: 'password',
                value: passWord,
                theme: inputTheme,
                preIcon: <Icon icon="md-lock" theme={new IconThemeData({ color: Color.fromRGB(255, 255, 255) })} />,
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    this.setState({
                        passWord: e.target.value
                    })
                }
            },
            field: 'passWord'
        }, {
            component: 'CheckBox',
            props: {
                options: [{
                    label: '保持登录',
                    value: true
                }],
                iconColor: '#fff',
                value: [true],
                theme: new RadioThemeData({ color: Color.fromRGB(255, 255, 255) })
            },
            field: 'keep'
        }, {
            component: 'Button',
            props: {
                children: '登录',
                mold: 'primary',
                onClick: this.handleLogin,
                async: true,
                disabled: (userName.length && passWord.length) ? false : true
            },
            field: 'btn'
        }]
        return item
    }

    private handleLogin = async () => {
        try {
            if (this.fn) {
                const data = this.fn.getFieldValue()
                await http('user/login', { ...data, keep: data.keep[0] || false })
                const { history, dispatch } = this.props
                dispatch({ type: SET_LOGIN, data: true })
                setTimeout(() => {
                    history.replace('/')
                }, 10)
            }
        } catch (data) {
            httpUtils.verify(data)
        }
    }
}

export default withRouter(connect()(Login))