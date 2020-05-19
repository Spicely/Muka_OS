import { SET_SETTINGS_SHOP_SPECS_DATA, ISettingsShopSpecs } from '../../action/settings/shopSpecs'
import { AnyAction } from 'redux'

const initData: ISettingsShopSpecs[] = []

export default function settingsShopSpecs(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_SETTINGS_SHOP_SPECS_DATA:
            return action.data
        default:
            return state
    }
}