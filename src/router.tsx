import React, { Component } from 'react'
import { routes, IRoutes, loadable } from './routes'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { IInitState, MukaOS } from './store/state'

interface IProps {
    userInfo: MukaOS.UserInfo
}

class RouterItem extends Component<IProps, any> {

    public render(): JSX.Element {
        return (
            <Switch>
                <Route path="/" exact component={loadable(import('./pages/Shop/list'))} />
                {
                    routes.map((item: IRoutes, index: number) => {
                        return <Route path={item.path} exact component={loadable(item.component)} key={index} />
                    })
                }
            </Switch>
        )
    }
}

export default connect(
    ({ userInfo }: IInitState) => ({
        userInfo
    })
)(RouterItem as any)