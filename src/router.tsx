import React, { Component } from 'react'
import { routes, IRoutes, loadable } from './routes'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { IInitState } from './store/state'


class RouterItem extends Component<any, any> {

    public render(): JSX.Element {
        const { userInfo } = this.props
        console.log(userInfo)
        return (
            <Switch>
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