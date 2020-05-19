import { SET_COLLAPSED } from '../../action'
import { AnyAction } from 'redux'

export default function collapse(state = false, action: AnyAction) {
    switch (action.type) {
        case SET_COLLAPSED:
            return action.data || false
        default:
            return state
    }
}