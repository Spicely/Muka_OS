import { SET_USERLIST_DATA } from '../../action'
import { AnyAction } from 'redux'

interface IUserProps {
    id: number
    username: string
    users: string
    mobile: string
}

export interface IUserList {
    total: number
    data: IUserProps[]
    current_page: number
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