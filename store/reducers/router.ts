import { SET_ROUTER } from '../action/router'
import { AnyAction } from 'redux'

export default function router(state = [], action: AnyAction) {
    switch (action.type) {
        case SET_ROUTER:
            return action.data || []
        default:
            return state
    }
}