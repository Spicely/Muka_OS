import { SET_ROUTER_DATA } from '../../action'
import { AnyAction } from 'redux'
import { IIcons } from '../icons'

export interface IRouter {
    children?: IRouter[]
    created_at: string
    id: number
    name: string
    path: string
    status: boolean
    router_id: number
    sort: number
    type: string
    updated_at: string
    icon?: IIcons
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