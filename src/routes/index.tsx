import React from 'react'
import Loadable from 'react-loadable'
function Loading(props: any) {
    if (props.error) {
        return <div />
    } else if (props.timedOut) {
        return <div />
    } else if (props.pastDelay) {
        return <div />
    } else {
        return <div />
    }
}

export interface IRoutes {
    path: string
    component: Promise<React.ComponentClass<any> | React.StatelessComponent<any> | { default: React.ComponentType<any> }>
}

export const routes: IRoutes[] = [{
    component: import('../pages/Diy/edit'),
    path: '/diy/edit/:page'
}, {
    component: import('../pages/Diy/editItem'),
    path: '/diy/item'
}, {
    component: import('../pages/Diy'),
    path: '/diy'
}, {
    component: import('../pages/Article'),
    path: '/article'
}, {
    component: import('../pages/Admin'),
    path: '/admin'
}, {
    component: import('../pages/Jurisdiction'),
    path: '/jurisdiction'
}, {
    component: import('../pages/Routers/icons'),
    path: '/routers/icons'
}, {
    component: import('../pages/Routers'),
    path: '/routers'
}, {
    component: import('../pages/Home'),
    path: '/'
},]

export const loadable = (component: Promise<React.ComponentClass<any> | React.StatelessComponent<any> | { default: React.ComponentType<any> }>) => {
    return Loadable({
        delay: 400,
        loader: () => component,
        loading: Loading,
        timeout: 10000
    })
}