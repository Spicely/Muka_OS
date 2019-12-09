import { SET_USERLIST_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IUserList {
    id: string
    userName: string
    history: any[]
    jurisdiction: { name: string, id: string }
    userLogo: string
    createdAt: number
}

const initData: IUserList[] = []

export default function userList(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_USERLIST_DATA:
            return action.data
        default:
            return state
    }
}