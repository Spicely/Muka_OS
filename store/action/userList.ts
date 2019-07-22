import { IInitState } from '../state'

export const SET_USERLIST = 'SET_USERLIST'

export interface IJurisdiction {
    id: string
    name: string
}

export interface IUser {
    id: string
    userName: string
    status: boolean
    jurisdiction: IJurisdiction
}

export interface IDispatchToProps {
    setUserList: (data: IUser[]) => void
}

export function mapStateToProps(state: IInitState) {
    return {
        router: state.router || [],
        icons: state.icons || [],
        userList: state.userList || [],
        jurisdiction: state.jurisdiction || [],
        userInfo: state.userInfo || {},
    }
}

export function mapDispatchToProps(dispatch: (obj: any) => void): any {
    return {
        'setUserList': (data: IUser[]) => {
            dispatch({ type: SET_USERLIST, data })
        },
    }
}