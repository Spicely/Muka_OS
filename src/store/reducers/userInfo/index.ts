import { SET_USERINFO_DATA } from '../../action'
import { AnyAction } from 'redux'
import { MukaOS } from 'src/store/state'
export interface IUserInfoProps {
    userInfo: MukaOS.UserInfo
}

const initData: MukaOS.UserInfo = {}

export default function userInfo(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_USERINFO_DATA:
            return action.data
        default:
            return state
    }
}