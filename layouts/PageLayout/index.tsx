import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tooltip } from 'antd'
import { Icon, Input, Layout, ILayoutMenuOptionsItem, Menu, NavBar } from 'components'
import { IInitState } from 'store/state'
import { Router as IRouter } from 'store/action/router'
import { bindActionCreators } from 'redux'
import { actions } from 'store/action/collapsed'
import { home_logo, home_nav, home_menu, home_view, home_scroll, home_collapsed, home_nav_list, nav_input, nav_left, nav_title, nav_right, nav_user, page_menu, page_menu_title, page_menu_title_solo, fold, animate_menu, show_solo } from './index.less'

interface IPageLayout extends IRouter {
    defaultSelected?: string
    defaultExtendSelected?: string
    navBar?: JSX.Element
    collapsed: boolean
    setCollapsed: (data: boolean) => void
    title?: string | JSX.Element
    actionsView?: JSX.Element
}
type PageState = {
    hide: boolean
}

class PageLayout extends Component<IPageLayout, PageState> {


    public state: Readonly<PageState> = {
        hide: false
    }

    public render(): JSX.Element {
        const { children, defaultSelected, navBar, collapsed, title, defaultExtendSelected, actionsView } = this.props
        const { hide } = this.state
        const items: ILayoutMenuOptionsItem[] = [{
            item: {
                label: '店铺',
                icon: {
                    type: 'icon',
                    name: 'shop'
                }
            }
        }, {
            item: {
                label: '商品',
                icon: {
                    type: 'icon',
                    name: 'shopping'
                }
            }
        }, {
            item: {
                label: '会员',
                icon: {
                    type: 'icon',
                    name: 'md-person'
                }
            }
        }, {
            item: {
                label: '订单',
                icon: {
                    type: 'icon',
                    name: 'md-document'
                }
            }
        }, {
            item: {
                label: '门店',
                icon: {
                    type: 'icon',
                    name: 'shop-setting'
                }
            }
        }, {
            item: {
                label: '营销',
                icon: {
                    type: 'icon',
                    name: 'ios-gift'
                }
            }
        }, {
            item: {
                label: '财务',
                icon: {
                    type: 'icon',
                    name: 'purse'
                }
            }
        }, {
            item: {
                label: '数据',
                icon: {
                    type: 'icon',
                    name: 'md-trending-up'
                }
            }
        }, {
            item: {
                label: '小程序',
                icon: {
                    type: 'icon',
                    name: 'small-routine',
                    initColor: '#54a532',
                    highlight: '#54a532',
                },
                field: '/apps',
            },
            extend: [{
                label: '页面设计',
                field: '/apps/design'
            }, {
                label: '商品二维码',
                field: '/apps/shopCode'
            }, {
                label: '小程序设置',
                field: '/apps/settings'
            }, {
                label: '其他设置',
                field: '/apps/other',
                children: [{
                    label: '模板消息',
                    field: '/apps/other/msg',
                }]
            }]
        }, {
            item: {
                label: '应用',
                icon: {
                    type: 'icon',
                    name: 'md-apps'
                }
            }
        }, {
            item: {
                label: '设置',
                icon: {
                    type: 'icon',
                    name: 'md-settings'
                }
            }
        }]
        let extendRoute = []
        if (defaultSelected) {
            const data: any = items.find((i) => (i.item && i.item.field === defaultSelected))
            if (data) {
                extendRoute = data.extend || []
            }
        }

        const menuOptions = {
            className: home_menu,
            defaultSelected,
            fieldToUrl: true,
            items,
            collapsed
        }
        const logoView = (
            <div>
                <div className={`${home_logo} flex_center`}></div>
                <div className={`flex_center ${home_collapsed}`} onClick={this.handleCollapsed}>
                    <Icon icon={collapsed ? 'menu-open' : 'menu-close'} className="collapsed_icon" />
                </div>
            </div>
        )
        const pageNav = (
            <NavBar
                className={home_nav}
                leftClassName={nav_left}
                titleClassName={nav_title}
                rightClassName={nav_right}
                left={
                    <div className="flex">
                        <div className={`${home_nav_list} flex_center`}>
                            <Icon icon="md-home" color="#696363" />
                        </div>
                        <div className={`${home_nav_list} flex_1`}>
                            <Input className={nav_input} placeholder="请输入关键词进行功能搜索..." extend={<Icon icon="md-search" color="#696363" />} />
                        </div>
                    </div>
                }
                right={
                    <div className="flex">
                        <div className={`${home_nav_list} ${nav_user} flex_center`}>
                            管理员
                        </div>
                        <Tooltip title="退出登录" placement="bottom">
                            <div className={`${home_nav_list} flex_center`}>
                                <Icon icon="md-exit" color="#696363" />
                            </div>
                        </Tooltip>
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
                    <div className={`flex flex_1`} style={{ overflow: 'hidden' }}>
                        <div className={`${page_menu}`}>
                            <div className={`flex_column ${animate_menu} ${hide ? fold : ''}`}>
                                <div className={`${page_menu_title} flex_center`}>
                                    {title}
                                </div>
                                <Menu width="5.5rem" arrowIconPos="left" fieldToUrl defaultSelected={defaultExtendSelected}>
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
                            </div>
                            <div className={`${page_menu_title_solo} flex_center ${hide ? show_solo : ''}`} onClick={this.tabMenu}>
                                <Icon icon={hide ? 'double-arrow-right' : 'double-arrow-left'} color="#b1bfcb" fontSize="0.7rem" />
                            </div>
                        </div>
                        <div className={`${home_scroll} flex_1`}>
                            {children}
                        </div>
                        <div>
                            {actionsView}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    private tabMenu = () => {
        const { hide } = this.state
        this.setState({
            hide: !hide
        })
    }

    private handleCollapsed = () => {
        const { collapsed, setCollapsed } = this.props
        setCollapsed(!collapsed)
    }
}

export default connect(
    ({ router, collapsed }: IInitState) => ({
        router,
        collapsed
    }),
    (dispatch: any) => bindActionCreators(actions, dispatch)
)(PageLayout)