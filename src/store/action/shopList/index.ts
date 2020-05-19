export const SET_SHOPLIST_DATA = 'SET_SHOPLIST_DATA'

export interface IShopList {
    id: string
    userName: string
    history: any[]
    jurisdiction: { name: string, id: string }
    userLogo: string
    status: boolean
    createdAt: number
}

export interface IShopProps {
    count: number
    items: IShopList[]
}

export interface IShopListProps {
    shopList: IShopProps
    setShopList: (data: IShopProps) => void
}

export const actions = {
    setShopList: (data: IShopProps) => {
        return {
            type: SET_SHOPLIST_DATA,
            data
        }
    }
}