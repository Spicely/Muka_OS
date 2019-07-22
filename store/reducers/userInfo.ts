import { SET_USERINFO } from './../action/userInfo'
import { AnyAction } from 'redux'

export default function userInfo(state = {}, action: AnyAction) {
    switch (action.type) {
        case SET_USERINFO:
            return action.data || []
        default:
            return state
    }
}