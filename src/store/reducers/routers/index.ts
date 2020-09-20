import { SET_ROUTERS_DATA } from '../../action'
import { IRouter } from '../router'
import { AnyAction } from 'redux'

const initData: IRouter[] = []

export default function routers(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_ROUTERS_DATA:
            return action.data || initData
        default:
            return state
    }
}