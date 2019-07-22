import { IIcons } from './icons'

export interface IRouter {
    id: string
    icon?: IIcons,
    label: string
    field: string
    parentId: string
    children?: IRouter[]
}

export interface Router{
    router: IRouter[]
}
export interface IRouterProps {
    router: IRouter[]
    setRouter: (data: IRouter[]) => void
}

export const SET_ROUTER = 'SET_ROUTER'
export const ASYNC_GET_ROUTER = 'ASYNC_GET_ROUTER'

export const actions = {
    setRouter: (data: IRouter[]) => {
        return {
            type: SET_ROUTER,
            data
        }
    }
}