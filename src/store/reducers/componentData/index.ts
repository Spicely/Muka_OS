import { SET_COMPONENT_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IComponentData {
    title: string
    path: string
    pageColor: string
    pagePorps: any[]
}

const initData: IComponentData = {
    title: '',
    path: '',
    pageColor: '',
    pagePorps: []
}


export default function componentData(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_COMPONENT_DATA:
            return action.data
        default:
            return state
    }
}