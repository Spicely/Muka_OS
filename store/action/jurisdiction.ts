import { SET_ROUTER, IRouter } from './router'
export const SET_JURISD = 'SET_JURISD'

export interface IJurisdiction {
    id: string
    name: string
    router: {
        id: string
    }[]
}

export interface IDispatchToProps {
    setJurisd: (data: IJurisdiction[]) => void
}

export function mapDispatchToProps(dispatch: (obj: any) => void): any {
    return {
        'setJurisd': (data: IJurisdiction[]) => {
            dispatch({ type: SET_JURISD, data })
        },
    }
}
export const actions = {
    setRouter: (data: IRouter[]) => {
        return {
            type: SET_ROUTER,
            data
        }
    },
    setJurisd: (data: IJurisdiction[]) => {
        return { type: SET_JURISD, data }
    },
}