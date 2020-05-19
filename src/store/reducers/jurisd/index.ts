import { SET_JURISD_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IJurisd {
    id: string
    type: number
}


const initData: IJurisd[] = []

export default function jurisd(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_JURISD_DATA:
            return action.data
        default:
            return state
    }
}