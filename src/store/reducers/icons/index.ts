import { SET_ICONS_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IIcons {
    type: 'icon' | 'image'
    name: string
    id: string
}


const initData: IIcons[] = []

export default function icons(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_ICONS_DATA:
            return action.data
        default:
            return state
    }
}