import { SET_ICONS } from '../action/icons'
import { AnyAction } from 'redux'

export default function icons(state = [], action: AnyAction) {
    switch (action.type) {
        case SET_ICONS:
            return action.data || []
        default:
            return state
    }
}