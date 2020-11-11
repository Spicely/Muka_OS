import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { connect, DispatchProp } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import { Tooltip, message } from 'antd'
import styled, { css } from 'styled-components'
import { Icon, Input, Layout, Menu, NavBar, Image, Dialog, Form, Spin } from 'components'
import { IInitState } from 'src/store/state'
import { IRouter } from 'src/store/reducers/router'
import { IUserInfo } from 'src/store/reducers/userInfo'
import { IJurisd } from 'src/store/reducers/jurisd'
import http, { imgUrl, httpUtils } from 'src/utils/axios'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import Color from 'src/components/lib/utils/Color'
import { IconThemeData, MenuThemeData, ThemeData, transition, InputThemeData, NavBarThemeData, getUnit } from 'src/components/lib/utils'
import { GET_LAYOUT_DATA, SET_COLLAPSED, SET_SOLO, SET_LOGIN, SET_ICONS_DATA, SET_ROUTER_DATA } from 'src/store/action'
import msg from 'src/components/lib/Icon/global/msg'

interface IPageLayout extends DispatchProp {
    solo: boolean
    collapsed: boolean
    isLogin: boolean
    spinLoading: boolean
    userInfo: IUserInfo
    router: IRouter[]
    navBar?: JSX.Element
    title?: string | JSX.Element
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
    width: ${() => getUnit(70)};
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
    min-width: ${() => getUnit(50)};
    cursor: pointer;
    height: ${() => getUnit(50)};
    ${({ userBox }) => {
        if (userBox) return css`width: ${getUnit(160)};`
    }}
    position: relative;
    ${({ hasAfter }) => {
        if (hasAfter) return css`
            &::after {
                content: "";
                position: absolute;
                width: ${() => getUnit(1)};
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
                width: ${() => getUnit(1)};
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
    padding: ${() => getUnit(10)} ${() => getUnit(25)};
    overflow: auto;
    position: relative;
`

const SpinLoading = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
`

const LayoutSolo = styled.div<ILayoutSoloProps>`
    position: absolute;
    cursor: pointer;
    z-index: 8;
    height: ${() => getUnit(30)};
    width: ${() => getUnit(20)};
    right: 0;
    top: ${() => getUnit(30)};
    transform: translate(0, -50%);
    background: #f5f7f9;
    ${({ show }) => {
        if (show) return css` background: #fff;right:${getUnit(-20)};${transition(0.5)};`
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
        const { children, navBar, collapsed, title, router, userInfo, solo, spinLoading } = this.props
        const { visible, selected, extendSelected } = this.state
        const items: any[] = router.map((i) => {
            return {
                item: {
                    field: i.path,
                    label: i.name,
                    icon: i.icon,
                },
                field: i.path,
                icon: i.icon,
            }
        })
        let extendRoute = []
        let typeSeletct = ''
        if (selected) {
            let data: any
            for (let i = 0; i < router.length; i++) {
                if (router[i].path === selected) {
                    data = router[i].children
                    typeSeletct = router[i].path
                    break
                }
            }
            if (data) {
                extendRoute = (data || []).map((i: any) => {
                    return {
                        label: i.name,
                        field: i.path,
                        chirdren: i.children?.map((v: any) => {
                            return {
                                field: v.path,
                                label: v.name,
                                icon: null,
                            }
                        }),
                        icon: null
                    }
                })
            }
        }
        const menuOptions = {
            selected: typeSeletct || selected,
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
                                    src={imgUrl + userInfo.avatar}
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
                            <LayoutNavList className="flex_center" onClick={this.handleExit}>
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
                    <div
                        className="flex flex_1"
                        style={{ overflow: 'hidden' }}
                    >
                        
                        <div id="pgae_view_left"></div>
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
                                                            <Menu.Group
                                                                title={i.label}
                                                                field={i.field || index}
                                                                key={i.field || index}
                                                            >
                                                                {
                                                                    i.children.map((i: any, index: number) => {
                                                                        return (
                                                                            <Menu.Item
                                                                                key={i.field || index}
                                                                                field={i.field || index}
                                                                            >
                                                                                {i.label}
                                                                            </Menu.Item>
                                                                        )
                                                                    })
                                                                }
                                                            </Menu.Group>
                                                        )
                                                    }
                                                    return (
                                                        <Menu.Item
                                                            field={i.field || index}
                                                            key={i.field || index}
                                                        >
                                                            {i.label}
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </Menu>
                                    </LayoutAniMenu>
                                    <LayoutSolo
                                        className="flex_center"
                                        show={solo}
                                        onClick={this.tabMenu}
                                    >
                                        <Icon
                                            icon={solo ? 'double-arrow-right' : 'double-arrow-left'}
                                            theme={new IconThemeData({ size: 14 })}
                                        />
                                    </LayoutSolo>
                                </LayoutMenu>
                            ) : null
                        }
                        <LayoutScroll className="flex_1">
                            <SpinLoading className="flex_center" style={{ display: spinLoading ? '' : 'none' }}>
                                <Spin spinning={spinLoading} />
                            </SpinLoading>
                            {children}
                        </LayoutScroll>
                        <div id="actions_view"></div>
                    </div>
                </div>
                <Dialog
                    title="修改密码"
                    visible={visible}
                    onClose={this.handleHideVisible}
                    onOk={this.handleOk}
                    async={true}
                >
                    <Form getItems={this.getItems} />
                </Dialog>
            </Layout>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private handleChange = (field: any) => {
        const { history, router } = this.props
        let selected = '/'
        let initSelectd = ''
        for (let i = 0; i < router.length; i++) {
            if (router[i].path === field) {
                selected = field
                if (router[i].children?.length) {
                    initSelectd = (router[i].children || [])[0].path
                }
                break
            }
        }
        const arr = field.split('/')
        this.setState({
            selected: arr.length === 2 ? field : `/${arr[1]}`,
            extendSelected: initSelectd || field
        })
        history.push(initSelectd || field)
    }

    public UNSAFE_componentWillReceiveProps(nextProps: IPageLayout) {
        const { history } = this.props
        if (!nextProps.isLogin) {
            history.replace('/login')
            return
        }
    }

    private getData = async () => {
        const { isLogin, history } = this.props
        if (!isLogin) {
            history.replace('/login')
            return
        }
        const arr = history.location.pathname.split('/')
        const selected = arr.length === 2 ? history.location.pathname : `/${arr[1]}`
        this.setState({
            selected,
            extendSelected: arr.includes('view') ? arr[2] : history.location.pathname
        })
        const { dispatch } = this.props
        try {
            // const { data } = await http('/admin/icon/get')
            const res = await http('/admin/router/user')
            // dispatch({ type: SET_ICONS_DATA, data: data })
            dispatch({ type: SET_ROUTER_DATA, data: res || [] })
        } catch (msg) {
            message.error(msg)
        }
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

    private handleExit = async () => {
        try {
            const { dispatch } = this.props
            await http('/admin/logout')
            dispatch({ type: SET_LOGIN, data: false })
            localStorage.setItem('token', '')
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
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
                const data = await http('/admin/user/repass', { ...fieldValue })
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
const mapStateToProps = ({ collapsed, router, userInfo, isLogin, solo, spinLoading }: IInitState) => ({
    collapsed,
    router,
    userInfo,
    isLogin,
    solo,
    spinLoading
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

export class LayoutActions extends Component<any, any> {

    public state: any = {
        node: null
    }

    public componentDidMount() {
        const dom = document.getElementById('actions_view')
        this.setState({
            node: dom
        })
    }

    public render() {
        const { node } = this.state
        if (node) {
            return createPortal(
                this.props.children,
                node
            )
        }
        return null
    }
}

export class LayoutLeft extends Component<any, any> {

    public state: any = {
        node: null
    }

    public componentDidMount() {
        const dom = document.getElementById('pgae_view_left')
        this.setState({
            node: dom
        })
    }

    public render() {
        const { node } = this.state
        if (node) {
            return createPortal(
                this.props.children,
                node
            )
        }
        return null
    }
}