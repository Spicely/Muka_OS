import { SET_REGION_DATA } from '../../action'
import { MukaOS} from '../../state'
import { AnyAction } from 'redux'

const initData: MukaOS.Region[] = []
export default function region(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_REGION_DATA:
            return action.data
        default:
            return state
    }
}