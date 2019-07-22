import { SET_JURISD } from '../action/jurisdiction'
import { AnyAction } from 'redux'

export default function jurisdiction(state = [], action: AnyAction) {
    switch (action.type) {
        case SET_JURISD:
            return action.data || []
        default:
            return state
    }
}