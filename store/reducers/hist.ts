import { SET_HIST } from '../action/hist'
import { AnyAction } from 'redux'

export default function icons(state = '', action: AnyAction) {
    switch (action.type) {
        case SET_HIST:
            return action.data || ''
        default:
            return state
    }
}