import { SET_JURISDICTION_OPTIONS_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IJurisdictionOptions {
    label: string
     value: string
}

const initData: IJurisdictionOptions[] = []

export default function jurisdictionOptions(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_JURISDICTION_OPTIONS_DATA:
            return action.data
        default:
            return state
    }
}