import { SET_IMAGES_DATA } from '../../action'
import { AnyAction } from 'redux'

export type IImages = any

const initData: IImages[] = []

export default function images(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_IMAGES_DATA:
            return action.data
        default:
            return state
    }
}