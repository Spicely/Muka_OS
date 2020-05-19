export const SET_SETTINGS_SHOP_SPECS_DATA = 'SET_SETTINGS_SHOP_SPECS_DATA'

export interface ISettingsShopSpecs {
    id: string
    specs: string
    status: boolean
}

export interface ISettingsShopSpecsProps {
    settingsShopSpecs: ISettingsShopSpecs[]
    setSettingsShopSpecs: (data: ISettingsShopSpecs[]) => void
}

export const actions = {
    setSettingsShop: (data: ISettingsShopSpecs[]) => {
        return {
            type: SET_SETTINGS_SHOP_SPECS_DATA,
            data
        }
    }
}