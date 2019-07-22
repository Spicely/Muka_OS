import { Component } from 'react'
import { setCookie } from 'nookies'
import PageHead from 'layouts/PageHead'
import PageLayout from 'layouts/PageLayout'
import http, { IRresItems, IinitProps, IRresItem } from 'utils/axios'
import { SET_ROUTER } from 'store/action/router'
import { SET_ICONS } from 'store/action/icons'

interface IState {
    visible: boolean
}

class SettingsDesign extends Component<any, IState> {
    public static async getInitialProps(ctx: IinitProps) {
        setCookie(ctx, 'hist', ctx.pathname, {
            maxAge: 60 * 2,
            path: '/',
        })
        const router: IRresItem = await http('user/info', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        if (router.status === 203 && ctx.res) {
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
    public render(): JSX.Element {
        return (
            <PageHead>
                <PageLayout defaultSelected="/settings/design">
                </PageLayout>
            </PageHead>
        )
    }
}

export default SettingsDesign