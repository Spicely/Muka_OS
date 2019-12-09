export const SET_USERLIST_DATA = 'SET_USERLIST_DATA'

export interface IUserList {
    id: string
    userName: string
    history: any[]
    jurisdiction: { name: string, id: string }
    userLogo: string
    createdAt: number
}

export interface IUserListProps {
    userList: IUserList[]
    setUserList: (data: IUserList[]) => void
}

export const actions = {
    setUserList: (data: IUserList[]) => {
        return {
            type: SET_USERLIST_DATA,
            data
        }
    }
}