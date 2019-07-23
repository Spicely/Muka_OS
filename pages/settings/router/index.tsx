import { Component, Fragment } from 'react'
import { setCookie } from 'nookies'
import PageHead from 'layouts/PageHead'
import PageLayout from 'layouts/PageLayout'
import { NavBar, Label, Table, Dialog, LForm, ILFormItem, ILFormFun, Icon, Image } from 'components'
import http, { imgUrl, baseUrl, IRresItems, IRresItem, IinitProps } from 'utils/axios'
import { connect } from 'react-redux'
import { IRouter, SET_ROUTER } from 'store/action/router'
import { SET_ICONS, mapStateToProps, mapDispatchToProps, IIcons, IDispatchProps } from 'store/action/icons'


interface IProps extends IDispatchProps {
    icons: IIcons[]
    router: IRouter[]
}

interface IState {
    visible: boolean
}

class SettingsRouter extends Component<IProps, IState> {
    public static async getInitialProps(ctx: IinitProps) {
        const router: IRresItem = await http('user/info', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        if (router.status === 203 && ctx.res) {
            setCookie(ctx, 'hist', ctx.pathname, {
                maxAge: 60 * 2,
                path: '/',
            })
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res && ctx.res.end()
            return {}
        }
        ctx.store.dispatch({ type: SET_ROUTER, data: router.data.router })
        const icons: IRresItems = await http('icons/find', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        ctx.store.dispatch({ type: SET_ICONS, data: icons.data })
        return {}
    }

    public state: IState = {
        visible: false,
    }

    private exFun?: ILFormFun

    private getItems = (exFun: ILFormFun): ILFormItem[] => {
        const { icons, router } = this.props
        this.exFun = exFun
        const item: ILFormItem[] = [{
            field: 'id',
            component: 'NULL'
        }, {
            component: 'Input',
            props: {
                placeholder: '菜单名(必填)',
                label: '菜单名:'
            },
            field: 'label'
        }, {
            component: 'Input',
            props: {
                label: '路由名:',
                placeholder: '只能英文名称如：home(必填)'
            },
            field: 'field'
        }, {
            component: 'Select',
            props: {
                label: '图标名:',
                showSearch: true,
                placeholder: '请选择图标',
                optionFilterProp: 'children',
                filterOption: (input, option: any) => option.props.children.props.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0
            },
            field: 'icon'
        }, {
            component: 'Select',
            props: {
                label: '父级路由:',
                showSearch: true,
                placeholder: '选择父级路由(可选)',
                optionFilterProp: 'children',
                filterOption: (input, option: any) => option.props.children.props.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0,
            },
            field: 'parentId'
        }]
        return item
    }

    public render(): JSX.Element {
        const { router } = this.props
        return (
            <PageHead title="路由管理">
                <PageLayout defaultSelected="/settings/router">
                    <NavBar left="路由管理" right={
                        <div className="flex">
                            <Label onClick={this.handleShowDialog}>添加菜单</Label>
                        </div>
                    } />
                </PageLayout>
            </PageHead>
        )
    }

    private handleShowDialog = () => {
        this.setState({
            visible: true
        })
    }

    private handlehideDialog = () => {
        this.setState({
            visible: false
        })
        this.exFun && this.exFun.cleanFieldValue()
        this.exFun && this.exFun.setFieldValue({ 'type': 'icon' })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsRouter)