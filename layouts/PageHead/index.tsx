import React, { Component } from 'react'
import Head from 'next/head'
import 'babel-polyfill'
import './index.less'

export interface IPageHead {
    title?: string
}

export default class PageHead extends Component<IPageHead, any> {

    public static defaultProps: IPageHead = {
        title: '',
    }
    
    public render(): JSX.Element {
        const { title, children } = this.props
        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no" />
                </Head>
                {children}
            </React.Fragment>
        )
    }
}