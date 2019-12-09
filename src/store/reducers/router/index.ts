import { SET_ROUTER_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IRouter {
    id: string
    item: {
        field: string
        icon?: { createdAt: number, updatedAt: number, id: string, name: string, type: 'icon' | 'img' }
        label: string
    },
    extend: {
        field: string
        icon?: { createdAt: number, updatedAt: number, id: string, name: string, type: 'icon' | 'img' }
        id: string
        label: string
    }[]
}


const initData: IRouter[] = []

export default function router(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_ROUTER_DATA:
            return action.data || initData
        default:
            return state
    }
}