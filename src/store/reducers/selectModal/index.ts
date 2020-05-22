import { SET_SELECT_MODAL_VISIBLE } from '../../action'
import { AnyAction } from 'redux'

const initData: boolean = false

export default function selectModalVisible(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_SELECT_MODAL_VISIBLE:
            return action.data
        default:
            return state
    }
}