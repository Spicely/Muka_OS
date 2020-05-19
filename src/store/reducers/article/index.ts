import { SET_ARTICLE_DATA } from '../../action'
import { AnyAction } from 'redux'

export interface IArticle {
    id: string
    title: string
    logo: string
    synopsis: string
    content: string
    readNum: number
    status: boolean
}


const initData: IArticle[] = []

export default function article(state = initData, action: AnyAction) {
    switch (action.type) {
        case SET_ARTICLE_DATA:
            return action.data
        default:
            return state
    }
}