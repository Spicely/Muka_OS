import { SET_GOODS_LIST_DATA } from '../../action'
import { AnyAction } from 'redux'
import { MukaOS } from 'src/store/state'

const initData: MukaOS.GoodsList = {
    page_num: 10,
    page_size: 1,
    data: [],
    count: 0,
}

export default function goodsList(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_GOODS_LIST_DATA:
            return action.data
        default:
            return state
    }
}