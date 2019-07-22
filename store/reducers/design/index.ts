import { SET_COMPONENT_DATA } from '../../action/design'
import { AnyAction } from 'redux'

const initData = {
    name: '',
    introduce: '',
    pageColor: '',
    pagePorps: []
}

export default function shopList(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_COMPONENT_DATA:
            return action.data || initData
        default:
            return state
    }
}