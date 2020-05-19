import { SET_MEMBER_DATA, IMember } from '../../action/member'
import { AnyAction } from 'redux'

const initData: IMember[] = []
export default function member(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_MEMBER_DATA:
            return action.data
        default:
            return state
    }
}