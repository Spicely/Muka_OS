import { SET_SHOPLIST_DATA, IShopProps } from '../../action/shopList'
import { AnyAction } from 'redux'

const initData: IShopProps = {
    count: 0,
    items: []
}

export default function shopList(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_SHOPLIST_DATA:
            return action.data
        default:
            return state
    }
}