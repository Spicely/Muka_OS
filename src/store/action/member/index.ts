export const SET_MEMBER_DATA = 'SET_MEMBER_DATA'

export interface IMember {
    id: string
    phone: string
    userLogo: string
    userName: string
    device: string
    inviteCode: string
    parent: { userName: string } | null
    status: boolean
}

export interface IMemberProps {
    member: IMember[]
    setMember: (data: IMember[]) => void
}

export const actions = {
    setMember: (data: IMember[]) => {
        return {
            type: SET_MEMBER_DATA,
            data
        }
    }
}