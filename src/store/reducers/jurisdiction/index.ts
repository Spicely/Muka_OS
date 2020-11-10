import { SET_JURISDICTION_DATA } from '../../action'
import { IJurisd } from '../jurisd'
import { AnyAction } from 'redux'

export interface IJurisdiction {
    id: string
    children: IJurisd[]
    name: string
    routers: string[]
}

const initData: IJurisdiction[] = []

export default function jurisdiction(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_JURISDICTION_DATA:
            return action.data
        default:
            return state
    }
}