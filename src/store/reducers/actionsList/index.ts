import { SET_ACTIONLIST_DATA, IActionsList } from '../../action/actionsList'
import { AnyAction } from 'redux'

const initData: IActionsList[] = []

export default function actionsList(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_ACTIONLIST_DATA:
            return action.data
        default:
            return state
    }
}