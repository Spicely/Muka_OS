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
    component: import('../pages/Routers'),
    path: '/system/router'
}, {
    component: import('../pages/Icon'),
    path: '/system/icon'
}, {
    component: import('../pages/ShopList'),
    path: '/ShopList'
},{
    component: import('../pages/Jurisdiction'),
    path: '/system/jurisd'
}, {
    component: import('../pages/Setting'),
    path: '/system/config'
}, {
    component: import('../pages/Setting'),
    path: '/system'
},{
    component: import('../pages/Page'),
    path: '/page'
}, {
    component: import('../pages/Carousel'),
    path: '/platform/carousel'
},{
    component: import('../pages/Region'),
    path: '/platform/region'
},{
    component: import('../pages/View'),
    path: '/view/:id'
},]

export const loadable = (component: Promise<React.ComponentClass<any> | React.StatelessComponent<any> | { default: React.ComponentType<any> }>) => {
    return Loadable({
        delay: 400,
        loader: () => component,
        loading: Loading,
        timeout: 10000
    })
}