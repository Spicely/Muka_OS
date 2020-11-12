import { SET_COMPONENT_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IComponentData {
    title: string
    path: string
    pageColor: string
    pageProps: any[]
}

const initData: IComponentData = {
    title: '',
    path: '',
    pageColor: '',
    pageProps: []
}


export default function componentData(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_COMPONENT_DATA:
            return action.data
        default:
            return state
    }
}