import { SET_USERINFO_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IUserInfo {
    id: string
    userName: string
    jurisdiction: string | null
    userLogo: string
    createdAt: number
    status: boolean
}

export interface IUserInfoProps {
    userInfo: IUserInfo
}

const initData: IUserInfo = {
    id: '',
    userName: '',
    jurisdiction: null,
    userLogo: '',
    createdAt: 0,
    status: true
}

export default function userInfo(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_USERINFO_DATA:
            return action.data
        default:
            return state
    }
}