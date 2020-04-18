import { SET_IMAGES_DATA } from '../../action'
import { AnyAction } from 'redux'
import { MukaOS } from '../../state'



export type IImages = {
    private: MukaOS.IImageParams[]
    public: MukaOS.IImageParams[]
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