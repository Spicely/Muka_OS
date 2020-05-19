import { SET_SETTINGS_SHOP_UNITS_DATA, ISettingsShopUnits } from '../../action/settings/shopUnits'
import { AnyAction } from 'redux'

const initData: ISettingsShopUnits[] = []

export default function settingsShopUnits(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_SETTINGS_SHOP_UNITS_DATA:
            return action.data
        default:
            return state
    }
}