import { IRouters } from '../reducers/routers'
import { IMember } from '../action/member'
import { IJurisd } from '../reducers/jurisd'
import { IJurisdiction } from '../reducers/jurisdiction'
import { IJurisdictionOptions } from '../reducers/jurisdictionOptions'
import { IRouter } from '../reducers/router'
import { IUserList } from '../reducers/userList'
import { IUserInfo } from '../reducers/userInfo'
import { IArticle } from '../reducers/article'
import { IImages } from '../reducers/images'
import { ICurrency } from '../action/currency'
import { IIcons } from '../reducers/icons'
import { IShopList } from '../action/shopList'
import { IActionsList } from '../action/actionsList'
import { ICarouselList } from '../action/carouselList'
import { IComponentData } from '../reducers/componentData'
import { ISettingsShopUnits } from '../action/settings/shopUnits'
import { ISettingsShopSpecs } from '../action/settings/shopSpecs'

export interface CarouselData {
    status: boolean
    img: {
        filename: string
        size: number
        mimeType: string
        height: number
    }
    url: string
    region: {
        parent: string
        sort: number
        status: true,
        name: string,
        createdAt: number
    }
    createdAt: number
    updatedAt: number
    id: string
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MukaOS {
    export interface Region {
        id: string
        name: string
        status: boolean
        children?: MukaOS.Region[]
    }

    export interface Carousel {
        page: number
        skip: number
        data: CarouselData[]
    }
}

export interface ITabelRes<T = any> {
    page: number
    skip: number
    data: T[]
}

export interface IInitState {
    routers: IRouters[]
    collapsed: boolean
    member: IMember[]
    jurisd: IJurisd[]
    jurisdiction: IJurisdiction[]
    router: IRouter[]
    userList: IUserList
    userInfo: IUserInfo
    shopList: IShopList
    article: IArticle[]
    images: IImages[]
    currency: ICurrency[]
    icons: IIcons[]
    actionsList: IActionsList[]
    jurisdictionOptions: IJurisdictionOptions[]
    carouselList: ICarouselList[]
    componentData: IComponentData
    settingsShopUnits: ISettingsShopUnits[]
    settingsShopSpecs: ISettingsShopSpecs[]
    isLogin: boolean
    solo: boolean
    imageModalVisible: boolean
    region: MukaOS.Region[]
    spinLoading: boolean
    carousel: MukaOS.Carousel
}