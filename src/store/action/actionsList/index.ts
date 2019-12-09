export const SET_ACTIONLIST_DATA = 'SET_ACTIONLIST_DATA'

export interface IActionsList {
    id: string
    actionName: string
    askPath: string
    status: boolean
}

export interface IActionsListProps {
    actionsList: IActionsList[]
    setActionsList: (data: IActionsList[]) => void
}

export const actions = {
    setActionsList: (data: IActionsList[]) => {
        return {
            type: SET_ACTIONLIST_DATA,
            data
        }
    }
}