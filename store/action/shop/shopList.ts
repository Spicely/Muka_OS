export const SET_SHOPLIST = 'SET_SHOPLIST'
export interface IShopList {
    name: string
    id: string
    shopLogo: string
    status: number
}

export const actions = {
    setShopList: (data: IShopList[]) => {
        return {
            type: SET_SHOPLIST,
            data
        }
    }
}