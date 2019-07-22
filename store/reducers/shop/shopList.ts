import { SET_SHOPLIST } from '../../action/shop/shopList'
import { AnyAction } from 'redux'

export default function shopList(state = [], action: AnyAction) {
    switch (action.type) {
        case SET_SHOPLIST:
            return action.data || []
        default:
            return state
    }
}