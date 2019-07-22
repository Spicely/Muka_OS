export const SET_COLLAPSED = 'SET_COLLAPSED'

export const actions = {
    setCollapsed: (data: boolean) => {
        return {
            type: SET_COLLAPSED,
            data
        }
    }
}