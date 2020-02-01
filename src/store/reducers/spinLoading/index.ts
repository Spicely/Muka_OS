import { SET_SPINLOADING_DATA } from '../../action'
import { AnyAction } from 'redux'

const initData: boolean = false

export default function spinLoading(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_SPINLOADING_DATA:
            return action.data
        default:
            return state
    }
}