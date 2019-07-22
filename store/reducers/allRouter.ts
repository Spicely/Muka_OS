import { SET_ALLROUTER } from '../action/allRouter'
import { AnyAction } from 'redux'

export default function allRouter(state = [], action: AnyAction) {
    switch (action.type) {
        case SET_ALLROUTER:
            return action.data || []
        default:
            return state
    }
}