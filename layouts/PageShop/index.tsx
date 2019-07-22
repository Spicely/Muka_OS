import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ILayoutMenuOptionsItem, ILMenuItem } from 'components'
import { IInitState } from 'store/state'
import { Router as IRouter } from 'store/action/router'
import { Layout, NavBar, Icon, Dropdown, Menu } from 'components'
import { home_logo, home_nav, home_nav_icon, home_menu, home_nav_item, home_view, home_scroll } from '../PageLayout/index.less'

interface IPageLayout extends IRouter {
    defaultSelected?: string
    navBar?: JSX.Element
}
type PageState = {
    status: boolean
}

class PageLayout extends Component<IPageLayout, PageState> {


    public state: Readonly<PageState> = {
        status: false
    }

    public render(): JSX.Element {
        const { status } = this.state
        const { children, defaultSelected, navBar } = this.props
        const items: ILayoutMenuOptionsItem[] = [{
            item: {
                label: '商品设置',
                field: '/shop/controller/shop',
                icon: {
                    type: 'icon',
                    name: 'ios-menu'
                }
            }
        }, {
            item: {
                label: '店铺设置',
                field: '/shop/controller/setting',
                icon: {
                    type: 'icon',
                    name: 'md-settings'
                }
            }
        }]
        const menuOptions = {
            className: home_menu,
            defaultSelected,
            width: '10rem',
            items,
        }
        const logoView = (
            <div className={`${home_logo} flex_center`}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>臻食优品溯源系统</span>
            </div>
        )
        const service = (
            <Menu width="15rem">
                <Menu.Item>1111</Menu.Item>
                <Menu.Item>2222</Menu.Item>
                <Menu.Item>3333</Menu.Item>
            </Menu>
        )
        const pageNav = (
            <NavBar
                className={home_nav}
                left={
                    <Icon
                        icon={status ? 'menu-open' : 'menu-close'}
                        className={home_nav_icon}
                        onClick={() => { this.setState({ status: !status }) }}
                    />
                }
                right={
                    <div className="flex">
                        <Dropdown className="flex" overlay={service}>
                            <div className={`${home_nav_item} flex_justify`}>
                                <div className="flex">
                                    <Icon icon="custom-service" fontSize="0.8rem" style={{ marginRight: '0.2rem' }} />
                                    <span>联系客服</span>
                                    <Icon icon="md-arrow-dropdown" fontSize="0.8rem" />
                                </div>
                            </div>
                        </Dropdown>
                        <div className={`${home_nav_item} flex_justify`}>
                            <div className="flex">
                                <Icon icon="ios-volume-high" fontSize="0.8rem" viewBox="0 0 512 512" style={{ marginRight: '0.2rem' }} />
                                <span>消息中心</span>
                                <Icon icon="md-arrow-dropdown" fontSize="0.8rem" />
                            </div>
                        </div>
                        <div className={`${home_nav_item} flex`}>
                            {/* <Image
                                src={require('../../assets/user_logo.png')}
                                style={{ width: '1.5rem', height: '1.5rem', borderRadius: '1.5rem', marginRight: '0.3rem' }}
                            /> */}
                            <div className="flex_justify">
                                <div className="flex">
                                    <span>超级管理员</span>
                                    <Icon icon="md-arrow-dropdown" fontSize="0.8rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />
        )
        return (
            <Layout
                menuOptions={menuOptions}
                logoView={logoView}
                pageNav={pageNav}
            >
                <div className={`flex_column ${home_view}`}>
                    {navBar}
                    <div className={`${home_scroll} flex_1`}>
                        {children}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default connect(
    ({ router }: IInitState) => ({
        router
    })
)(PageLayout)