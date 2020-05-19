import { SET_ROUTERS_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IRouters {
    id: string
    name: string
    path: string
    status: boolean
    parent: string | null
    children?: any[]
    type: 'path' | 'query' | 'url'
    sort: number
    icon: {
        id: string
        type: 'icon' | 'image'
        name: string
    }
}

const initData: IRouters[] = []

export default function routers(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_ROUTERS_DATA:
            return action.data || initData
        default:
            return state
    }
}