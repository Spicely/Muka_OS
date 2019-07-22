export const SET_COMPONENT_DATA = 'SET_COMPONENT_DATA'
export interface IComponentData {
    name: string
    introduce: string
    pageColor: string
    pagePorps: any[]
}

export const actions = {
    setComponentData: (data: IComponentData) => {
        return {
            type: SET_COMPONENT_DATA,
            data
        }
    }
}