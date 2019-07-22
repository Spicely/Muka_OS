import { SET_HIST } from './hist'
import { IInitState } from '../state'
import { IRouter, SET_ROUTER } from './router'
import { SET_USERLIST, IUser } from './userList'
import { IUserInfo, SET_USERINFO } from './userInfo'

export interface IIcons {
    createdAt: number
    id: string
    name: string
    type: 'icon' | 'image'
    updatedAt: number
}

export const SET_ICONS = 'SET_ICONS'

export interface IDispatchProps {
    setIcons: (data: IIcons) => void
    setRouter: (data: IRouter[]) => void
    setHist: (hist: string) => void
    setUserList: (data: IUser[]) => void
    setUserInfo: (data: IUserInfo) => void
}

export function mapStateToProps(state: IInitState) {
    return {
        icons: state.icons || [],
        router: state.router || [],
        userInfo: state.userInfo || {}
    }
}

export function mapDispatchToProps(dispatch: (obj: any) => void): any {
    return {
        'setIcons': (data: IIcons[]) => {
            dispatch({ type: SET_ICONS, data })
        },
        'setRouter': (data: IRouter[]) => {
            dispatch({ type: SET_ROUTER, data })
        },
        'setHist': (hist: string) => {
            dispatch({ type: SET_HIST, hist })
        },
        'setUserList': (data: IUser[]) => {
            dispatch({ type: SET_USERLIST, data })
        },
        'setUserInfo': (data: IUserInfo) => {
            dispatch({ type: SET_USERINFO, data })
        },
    }
}