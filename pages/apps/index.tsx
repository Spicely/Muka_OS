import { Component } from 'react'
import { Alert, LabelHeader, NavBar, Image, Button } from 'components'
import Link from 'next/link'
import PageHead from 'layouts/PageHead'
import PageLayout from 'layouts/PageLayout'
import { IinitProps } from 'utils/axios'
import { connect } from 'react-redux'
import { IRouter } from 'store/action/router'
import { mapStateToProps, mapDispatchToProps, IIcons, IDispatchProps } from 'store/action/icons'
import { nav_bar } from 'layouts/PageLayout/index.less'
import { app_view, app_view_list, app_view_list_name, app_view_list_qrcode, app_view_list_img, app_view_list_line, app_view_list_text, app_view_list_btn } from './index.less'


interface IProps extends IDispatchProps {
    icons: IIcons[]
    router: IRouter[]
}

interface IState {
    visible: boolean
}

class SettingsRouter extends Component<IProps, IState> {
    public static async getInitialProps(ctx: IinitProps) {
        return {}
    }

    public state: IState = {
        visible: false,
    }

    public render(): JSX.Element {
        return (
            <PageHead title="小程序">
                <PageLayout defaultSelected="/apps">
                    <NavBar
                        className={nav_bar}
                        divider={false}
                        left={
                            <LabelHeader title={<span>当前位置: </span>} line="vertical" />
                        }
                    />
                    <div className={app_view}>
                        <Alert
                            inheritColor
                            title="小程序说明"
                            message="小程序是微信小程序的管理后台，可在此设置个性化首页排版、基本设置、设置微信支付、审核发布。"
                        />
                        <div className="flex" style={{ marginTop: '0.8rem' }}>
                            <div className={app_view_list}>
                                <div className={app_view_list_name}>页面设计</div>
                                <div className={app_view_list_qrcode}>
                                    <Image src="/static/app_design.png" className={app_view_list_img} />
                                </div>
                                <div className={app_view_list_line} />
                                <div className={app_view_list_text}>
                                    <div>分为商城首页与自定义页面两种，自定义页面可以做为文章或商城主题活动使用。</div>
                                    <Link href="/apps/design">
                                        <Button className={app_view_list_btn} mold="primary">进入</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className={app_view_list}>
                                <div className={app_view_list_name}>小程序设置</div>
                                <div className={app_view_list_qrcode}>
                                    <Image src="/static/app_setting.png" className={app_view_list_img} />
                                </div>
                                <div className={app_view_list_line} />
                                <div className={app_view_list_text}>
                                    <div> 小程序发布前，AppID、AppSecret为必填配置，微信支付以为客服为可选功能。</div>
                                    <Button className={app_view_list_btn} mold="primary">进入</Button>
                                </div>
                            </div>
                            <div className={app_view_list}>
                                <div className={app_view_list_name}>首页广告</div>
                                <div className={app_view_list_qrcode}>
                                    <Image src="/static/app_photo.png" className={app_view_list_img} />
                                </div>
                                <div className={app_view_list_line} />
                                <div className={app_view_list_text}>
                                    <div>首页广告为弹出式，进商城首页时强出，先设置好广告，在商城首页的配置中引用。</div>
                                    <Button className={app_view_list_btn} mold="primary">进入</Button>
                                </div>
                            </div>
                            <div className={app_view_list}>
                                <div className={app_view_list_name}>底部导航</div>
                                <div className={app_view_list_qrcode}>
                                    <Image src="/static/app_nav.png" className={app_view_list_img} />
                                </div>
                                <div className={app_view_list_line} />
                                <div className={app_view_list_text}>
                                    <div>底部导航比较特别，改动后需重新提交微信审核，并且审核通过后才可生效。</div>
                                    <Button className={app_view_list_btn} mold="primary">进入</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </PageLayout>
            </PageHead>
        )
    }

    private handleShowDialog = () => {
        this.setState({
            visible: true
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsRouter)