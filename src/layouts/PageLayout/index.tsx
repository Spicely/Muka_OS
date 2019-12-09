import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { connect, DispatchProp } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import { Tooltip, message } from 'antd'
import styled, { css } from 'styled-components'
import { Icon, Input, Layout, Menu, NavBar, Image, Dialog, Form } from 'components'
import { IInitState } from 'src/store/state'
import { IRouter } from 'src/store/reducers/router'
import { IUserInfo } from 'src/store/reducers/userInfo'
import { IJurisd } from 'src/store/reducers/jurisd'
import http, { baseUrl, imgUrl, httpUtils } from 'src/utils/axios'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import Color from 'src/components/lib/utils/Color'
import { IconThemeData, MenuThemeData, ThemeData, transition, InputThemeData, NavBarThemeData } from 'src/components/lib/utils'
import { GET_LAYOUT_DATA, SET_COLLAPSED, SET_SOLO } from 'src/store/action'

interface IPageLayout extends DispatchProp {
    solo: boolean
    collapsed: boolean
    isLogin: boolean
    userInfo: IUserInfo
    router: IRouter[]
    navBar?: JSX.Element
    title?: string | JSX.Element
    actionsView?: JSX.Element
    setRouter: (data: IRouter[]) => void
    setUserInfo: (data: IUserInfo) => void
    setJurisd: (data: IJurisd[]) => void
}

type PageState = {
    visible: boolean
    extendSelected: string
    selected: string
}

const LayoutLogo = styled.div`
    height: ${() => 50 * ThemeData.ratio + ThemeData.unit};
    background: #1a1c24;
`

const LayoutCollapsedIcon = styled(Icon)``

const LayoutCollapsed = styled.div`
    cursor: pointer;
    background: #21232a;
    &:hover ${LayoutCollapsedIcon} {
        fill: #fff;
    }
`

const LayoutPass = styled.div`
    width: ${() => 80 * ThemeData.ratio + ThemeData.unit};
    text-align: right;
`

const LayoutMenu = styled.div`
    background: #fff;
    position: relative;
`

const LayoutTitle = styled.div`
    width: ${() => 110 * ThemeData.ratio + ThemeData.unit};
    height:${() => 60 * ThemeData.ratio + ThemeData.unit};
    line-height: ${() => 60 * ThemeData.ratio + ThemeData.unit};
    white-space: nowrap;
`

interface ILayoutSoloProps {
    show: boolean
}

const LayoutAniMenu = styled.div<ILayoutSoloProps>`
    width:${({ show }) => (show ? 0 : 110) * ThemeData.ratio + ThemeData.unit};
    ${transition(0.4)};
    overflow: hidden;
`

interface ILayoutNavList {
    userBox?: boolean
    hasAfter?: boolean
    hasBefore?: boolean
}

const LayoutNavList = styled.div<ILayoutNavList>`
    min-width: ${() => 50 * ThemeData.ratio + ThemeData.unit};
    cursor: pointer;
    height: ${() => 50 * ThemeData.ratio + ThemeData.unit};
    ${({ userBox }) => {
        if (userBox) return css`width: ${160 * ThemeData.ratio + ThemeData.unit};`
    }}
    position: relative;
    ${({ hasAfter }) => {
        if (hasAfter) return css`
            &::after {
                content: "";
                position: absolute;
                width: ${() => 1 * ThemeData.ratio + ThemeData.unit};
                height: 100%;
                background: ${({ theme }) => theme.dividerColor};
                transform: scaleX(0.5);
                right: 0;
                top: 0;
            }
        `
    }}
    ${({ hasBefore }) => {
        if (hasBefore) return css`
            &::before {
                content: "";
                position: absolute;
                width: ${() => 1 * ThemeData.ratio + ThemeData.unit};
                height: 100%;
                background: ${({ theme }) => theme.dividerColor};
                transform: scaleX(0.5);
                left: 0;
                top: 0;
            }
        `
    }}
    
    
    &:hover {
        background: #f9f9f9;
    }
`

const LayoutScroll = styled.div`
    padding: ${() => 10 * ThemeData.ratio + ThemeData.unit} ${() => 25 * ThemeData.ratio + ThemeData.unit};
    overflow: auto;
`

const LayoutSolo = styled.div<ILayoutSoloProps>`
    position: absolute;
    cursor: pointer;
    height: ${() => 30 * ThemeData.ratio + ThemeData.unit};
    width: ${() => 20 * ThemeData.ratio + ThemeData.unit};
    right: 0;
    top: ${() => 30 * ThemeData.ratio + ThemeData.unit};
    transform: translate(0, -50%);
    background: #f5f7f9;
    ${({ show }) => {
        if (show) return css` background: #fff;right:${-20 * ThemeData.ratio + ThemeData.unit};${transition(0.5)};`
    }}
`
class PageLayout extends Component<IPageLayout & RouteComponentProps, PageState> {

    public state: PageState = {
        visible: false,
        selected: '',
        extendSelected: ''
    }

    private fn?: IFormFun

    public render(): JSX.Element {
        const { children, navBar, collapsed, title, actionsView, router, userInfo, solo } = this.props
        const { visible, selected, extendSelected } = this.state
        const items: any[] = router
        let extendRoute = []
        if (selected) {
            const data: any = items.find((i) => (i.item && i.item.field === selected))
            if (data) {
                extendRoute = data.extend || []
            }
        }

        const menuOptions = {
            selected: selected,
            fontColor: Color.fromRGB(255, 255, 255),
            fieldToUrl: true,
            items,
            collapsed,
            theme: new MenuThemeData({
                width: 180,
                color: Color.fromRGB(255, 255, 255),
                menuColor: Color.fromRGB(26, 28, 36),
                hoverIconColor: Color.fromRGB(255, 255, 255),
            })
        }

        const logoView = (
            <div>
                <LayoutLogo className="flex_center"></LayoutLogo>
                <LayoutCollapsed className="flex_center" onClick={this.handleCollapsed}>
                    <LayoutCollapsedIcon icon={collapsed ? 'menu-open' : 'menu-close'} theme={new IconThemeData({ color: Color.hex('#7c838a') })} />
                </LayoutCollapsed>
            </div>
        )
        const pageNav = (
            <NavBar
                theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255), height: 50 })}
                style={{ padding: 0 }}
                onBack={() => { }}
                left={
                    <div className="flex">
                        <LayoutNavList className="flex_center">
                            <Icon icon="md-home" theme={new IconThemeData({ color: Color.hex('#696363') })} />
                        </LayoutNavList>
                        <LayoutNavList className="flex_1" hasAfter>
                            <Input
                                placeholder="请输入关键词进行功能搜索..."
                                theme={new InputThemeData({ height: 50, width: 280 })}
                                extend={
                                    <div style={{ width: '1.5rem' }}
                                        className="flex_center"
                                    >
                                        <Icon icon="md-search" theme={new IconThemeData({ color: Color.hex('#696363') })} />
                                    </div>
                                }
                            />
                        </LayoutNavList>
                    </div>
                }
                right={
                    <div className="flex">
                        <LayoutNavList className="flex_center" userBox hasAfter hasBefore>
                            <span className="flex">
                                <Image
                                    src={baseUrl + userInfo.userLogo}
                                    style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', verticalAlign: 'middle' }}
                                />
                                <span className="flex_center" style={{ paddingLeft: '0.5rem' }}>{userInfo.userName}</span>
                            </span>
                        </LayoutNavList>
                        <LayoutNavList className="flex_center" hasAfter userBox onClick={this.handleShowVisible}>
                            <span className="flex">
                                <Icon icon="ios-lock" />
                                <span className="flex_center" style={{ paddingLeft: '0.5rem' }}>修改密码</span>
                            </span>
                        </LayoutNavList>
                        <Tooltip title="退出登录" placement="left">
                            <LayoutNavList className="flex_center">
                                <Icon icon="md-exit" color="#696363" />
                            </LayoutNavList>
                        </Tooltip>
                    </div>
                }
            />
        )
        return (
            <Layout
                menuOptions={menuOptions}
                baseUrl={imgUrl}
                logoView={logoView}
                pageNav={pageNav}
                menuChange={this.handleChange}
            >
                <div className="flex_column" style={{ height: '100%' }}>
                    <div id="navBar_item"></div>
                    {navBar}
                    <div className={`flex flex_1`} style={{ overflow: 'hidden' }}>
                        {
                            extendRoute.length ? (
                                <LayoutMenu>
                                    <LayoutAniMenu className="flex_column" show={solo}>
                                        <LayoutTitle className="flex_center">
                                            {title}
                                        </LayoutTitle>
                                        <Menu
                                            arrowIconPos="left"
                                            fieldToUrl
                                            selected={extendSelected}
                                            onChange={this.handleChange}
                                            theme={
                                                new MenuThemeData({
                                                    width: 110
                                                })
                                            }
                                        >
                                            {
                                                extendRoute.map((i: any, index: number) => {
                                                    if (i.children) {
                                                        return (
                                                            <Menu.Group title={i.label} field={i.field || index} key={i.field || index}>
                                                                {
                                                                    i.children.map((i: any, index: number) => {
                                                                        return <Menu.Item key={i.field || index} field={i.field || index}>{i.label}</Menu.Item>
                                                                    })
                                                                }
                                                            </Menu.Group>
                                                        )
                                                    }
                                                    return (
                                                        <Menu.Item field={i.field || index} key={i.field || index}>{i.label}</Menu.Item>
                                                    )
                                                })
                                            }
                                        </Menu>
                                    </LayoutAniMenu>
                                    <LayoutSolo className="flex_center" show={solo} onClick={this.tabMenu}>
                                        <Icon icon={solo ? 'double-arrow-right' : 'double-arrow-left'} theme={new IconThemeData({ size: 14 })} />
                                    </LayoutSolo>
                                </LayoutMenu>
                            ) : null
                        }
                        <LayoutScroll className="flex_1">
                            {children}
                        </LayoutScroll>
                        <div>
                            {actionsView}
                        </div>
                    </div>
                </div>
                <Dialog
                    title="修改密码"
                    visible={visible}
                    onClose={this.handleHideVisible}
                    onOk={this.handleOk}
                    async={true}
                >
                    <Form getItems={this.getItems} style={{ marginTop: '3rem' }} />
                </Dialog>
            </Layout>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private handleChange = (field: any) => {
        const { history } = this.props
        const arr = field.split('/')
        this.setState({
            selected: arr.length === 2 ? field : `/${arr[1]}`,
            extendSelected: field
        })
        history.push(field)
    }

    public componentWillReceiveProps(nextProps: IPageLayout) {
        const { history } = this.props
        if (!nextProps.isLogin) {
            history.replace('/login')
            return
        }
    }

    private getData = async () => {
        const { dispatch, isLogin, history } = this.props
        if (!isLogin) {
            history.replace('/login')
            return
        }
        const arr = history.location.pathname.split('/')
        this.setState({
            selected: arr.length === 2 ? history.location.pathname : `/${arr[1]}`,
            extendSelected: history.location.pathname
        })
        dispatch({ type: GET_LAYOUT_DATA })
    }

    private getItems = (fn: IFormFun): IFormItem[] => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'Input',
            label: <LayoutPass>原密码</LayoutPass>,
            props: {
                placeholder: '请输入原始密码',
                type: 'password'
            },
            field: 'passWord'
        }, {
            component: 'Input',
            label: <LayoutPass>新密码</LayoutPass>,
            props: {
                placeholder: '请输入新的密码',
                type: 'password'
            },
            field: 'newPass'
        }, {
            component: 'Input',
            label: <LayoutPass>重复新密码</LayoutPass>,
            props: {
                placeholder: '请输入新的密码',
                type: 'password'
            },
            field: 'newRePass'
        }]

        return items
    }

    private handleOk = async () => {
        if (this.fn) {
            const fieldValue = this.fn.getFieldValue()
            if (!fieldValue.passWord) {
                message.error('请输入原密码')
                return
            }
            if (fieldValue.passWord.length < 6) {
                message.error('原密码不能少于6位数')
                return
            }
            if (!fieldValue.newPass || !fieldValue.newRePass) {
                message.error('请输入新密码')
                return
            }
            if (fieldValue.newPass === fieldValue.passWord) {
                message.error('新密码不能和旧密码一致')
                return
            }
            if (fieldValue.newPass.length < 6) {
                message.error('新密码不能少于6位数')
                return
            }
            if (fieldValue.newPass !== fieldValue.newRePass) {
                message.error('两次密码不一致')
                return
            }
            try {
                const data = await http('user/repass', { ...fieldValue })
                message.success(data.msg)
                this.setState({
                    visible: false
                })
                // Router.push('/login')
            } catch (data) {
                httpUtils.verify(data)
            }

        }
    }

    private tabMenu = () => {
        const { solo, dispatch } = this.props
        dispatch({ type: SET_SOLO, data: !solo })
    }

    private handleHideVisible = () => {
        this.setState({
            visible: false
        })
    }

    private handleShowVisible = () => {
        this.setState({
            visible: true
        })
    }

    private handleCollapsed = () => {
        const { collapsed, dispatch } = this.props
        dispatch({ type: SET_COLLAPSED, data: !collapsed })
    }
}
const mapStateToProps = ({ collapsed, router, userInfo, isLogin, solo }: IInitState) => ({
    collapsed,
    router,
    userInfo,
    isLogin,
    solo
})
export default withRouter(connect(mapStateToProps)(PageLayout)) as any


interface ILayoutNavBarProps {
    left?: JSX.Element | string | null
    title?: JSX.Element | string
    right?: JSX.Element | string | null
    theme?: NavBarThemeData
}

export class LayoutNavBar extends Component<ILayoutNavBarProps, any> {

    public state: any = {
        node: null
    }

    public componentDidMount() {
        const dom = document.getElementById('navBar_item')
        this.setState({
            node: dom
        })
    }

    public render() {
        const { node } = this.state
        if (node) {
            return createPortal(
                <NavBar {...this.props} />,
                node
            )
        }
        return null
    }
}