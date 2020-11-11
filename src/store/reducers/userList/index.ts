import { SET_USERLIST_DATA } from '../../action'
import { AnyAction } from 'redux'
import { IUserInfo } from '../userInfo'

const initData: IUserInfo[] = []

export default function userList(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_USERLIST_DATA:
            return action.data
        default:
            return state
    }
}