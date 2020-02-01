import { SET_CAROUSEL_DATA } from '../../action'
import { AnyAction } from 'redux'
import { MukaOS } from 'src/store/state'


const initData: MukaOS.Carousel = {
    page: 1,
    skip: 10,
    data: []
}

export default function carousel(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_CAROUSEL_DATA:
            return action.data
        default:
            return state
    }
}