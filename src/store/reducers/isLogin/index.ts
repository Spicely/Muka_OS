import { SET_LOGIN } from '../../action'
import { AnyAction } from 'redux'

const initData: boolean = true

export default function isLogin(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_LOGIN:
            return action.data
        default:
            return state
    }
}