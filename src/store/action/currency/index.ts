export const SET_CURRENCY_DATA = 'SET_CURRENCY_DATA'

export interface ICurrency {
    id: string
    name: string
    status: boolean
    default: boolean
}

export interface ICurrencyProps {
    currency: ICurrency[]
    setCurrency: (data: ICurrency[]) => void
}

export const actions = {
    setCurrency: (data: ICurrency[]) => {
        return {
            type: SET_CURRENCY_DATA,
            data
        }
    }
}