import { SET_USERLIST } from '../action/userList'
import { AnyAction } from 'redux'

export default function userList(state = [], action: AnyAction) {
    switch (action.type) {
        case SET_USERLIST:
            return action.data || []
        default:
            return state
    }
}