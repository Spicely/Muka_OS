import { SET_SOLO } from '../../action'
import { AnyAction } from 'redux'

const initData: boolean = false

export default function solo(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_SOLO:
            return action.data
        default:
            return state
    }
}