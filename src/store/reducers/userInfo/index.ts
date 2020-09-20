import { SET_USERINFO_DATA } from '../../action'
import { IRouter } from '../router'
import { AnyAction } from 'redux'

export interface IUserInfo {
    authority?: {
        children?: IRouter[]
        created_at: string
        id: number
        name: string
        type: number
        updated_at: string
    },
    avatar?: string,
    created_at?: string,
    id?: number
    status?: true,
    type?: number
    updated_at?: string,
    userName?: string
}

export interface IUserInfoProps {
    userInfo: IUserInfo
}

const initData: IUserInfo = {}

export default function userInfo(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_USERINFO_DATA:
            return action.data
        default:
            return state
    }
}