import { IInitState } from '../state'

export const SET_USERINFO = 'SET_USERINFO'

export interface IJurisdiction {
    id: string
    name: string
}

export interface IUserInfo {
    id: string
    userName: string
    status: boolean
    jurisdiction: IJurisdiction
}

export interface IDispatchToProps {
    setUserInfo: (data: IUserInfo) => void
}

export function mapStateToProps(state: IInitState) {
    return {
        router: state.router || [],
        icons: state.icons || [],
        userList: state.userList || [],
        jurisdiction: state.jurisdiction || [],
    }
}

export function mapDispatchToProps(dispatch: (obj: any) => void): any {
    return {
        'setUserInfo': (data: IUserInfo) => {
            dispatch({ type: SET_USERINFO, data })
        },
    }
}