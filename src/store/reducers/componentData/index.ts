import { SET_COMPONENT_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IComponentData {
    name: string
    introduce: string
    pageColor: string
    pageProps: any[]
}

const initData: IComponentData = {
    name: '',
    introduce: '',
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