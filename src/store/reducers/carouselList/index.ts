import { SET_CAROISELLIST_DATA, ICarouselProps } from '../../action/carouselList'
import { AnyAction } from 'redux'

const initData: ICarouselProps = {
    count: 0,
    items: []
}

export default function carouselList(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_CAROISELLIST_DATA:
            return action.data
        default:
            return state
    }
}