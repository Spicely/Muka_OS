import { SET_IMAGES_DATA } from '../../action'
import { AnyAction } from 'redux'

interface IImageParams {
    id: string
    filename: string
    size: number
    mimeType: string
    height: number
    width: number
    type: 'private' | 'public'
    user: string
    createdAt: number
    updatedAt: number
}

export type IImages = {
    private: IImageParams[]
    public: IImageParams[]
}

const initData: IImages = {
    private: [],
    public: []
}

export default function images(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_IMAGES_DATA:
            return action.data
        default:
            return state
    }
}