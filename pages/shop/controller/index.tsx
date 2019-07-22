import { Component } from 'react'
import PageShop from 'layouts/PageShop'
import PageHead from 'layouts/PageHead'
import http, { IinitProps, IRresItem } from 'utils/axios'

interface IProps {

}

interface IState {

}

export default class ControllerIndex extends Component<IProps, IState> {

    public static async getInitialProps(ctx: IinitProps) {
        const data: IRresItem = await http('shop/findById', { id: ctx.query.id }, { headers: { cookie: ctx.req && ctx.req.headers.cookie } })
        return {}
    }
    
    public render(): JSX.Element {
        return (
            <PageHead title="店铺-控制台">
                <PageShop></PageShop>
            </PageHead>
        )
    }

}