import { SET_CURRENCY_DATA, ICurrency } from '../../action/currency'
import { AnyAction } from 'redux'

const initData: ICurrency[] = []

export default function currency(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_CURRENCY_DATA:
            return action.data
        default:
            return state
    }
}