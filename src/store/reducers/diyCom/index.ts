import { SET_DIY_COM_DATA } from '../../action'
import { AnyAction } from 'redux'
import { MukaOS } from 'src/store/state'

const initData: MukaOS.DiyCom[] = []

export default function setDiyCom(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_DIY_COM_DATA:
            return action.data
        default:
            return state
    }
}