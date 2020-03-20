import { SET_USERINFO_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IUserInfo {
    id: string
    userName: string
    jurisdiction: string | null
    avatar: string
    createdAt: number
    status: boolean
    endTime: number
    smsNum: number
}

export interface IUserInfoProps {
    userInfo: IUserInfo
}

const initData: IUserInfo = {
    id: '',
    userName: '',
    jurisdiction: null,
    avatar: '',
    createdAt: 0,
    status: true,
    endTime: 0,
    smsNum: 0
}

export default function userInfo(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_USERINFO_DATA:
            return action.data
        default:
            return state
    }
}