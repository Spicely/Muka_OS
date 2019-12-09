export const SET_SETTINGS_SHOP_UNITS_DATA = 'SET_SETTINGS_SHOP_UNITS_DATA'

export interface ISettingsShopUnits {
    id: string
    unit: string
    status: boolean
}

export interface ISettingsShopUnitsProps {
    settingsShopUnits: ISettingsShopUnits[]
    setSettingsShop: (data: ISettingsShopUnits[]) => void
}

export const actions = {
    setSettingsShop: (data: ISettingsShopUnits[]) => {
        return {
            type: SET_SETTINGS_SHOP_UNITS_DATA,
            data
        }
    }
}