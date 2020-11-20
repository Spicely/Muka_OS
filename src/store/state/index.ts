import { IMember } from '../action/member'
import { IJurisd } from '../reducers/jurisd'
import { IJurisdiction } from '../reducers/jurisdiction'
import { IJurisdictionOptions } from '../reducers/jurisdictionOptions'
import { IRouter } from '../reducers/router'
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

export interface DiyComItem {
    display_name: string
    id: number
    is_menus: number
    module: any
    pid: number
    sort: number
}


// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MukaOS {
    export interface UserInfo {
        authority?: {
            children?: IRouter[]
            created_at: string
            id: number
            name: string
            type: number
            updated_at: string
        },
        avatar?: string
        created_at?: string
        id?: number
        status?: true
        type?: number
        updated_at?: string
        userName?: string
        business?: {
            name: string
            logo: MukaOS.Image
            status: number
            introduce: string
            backdrop: MukaOS.Image
        }
    }
    export interface Region {
        id: string
        name: string
        status: boolean
        children?: MukaOS.Region[]
    }
    export interface Image {
        url: string
        size: number
        mimeType: string
        height: number
        width: number
        type: string
    }
    export interface Carousel {
        page: number
        skip: number
        data: CarouselData[]
    }

    export interface IImageParams {
        file_link: string
        group_id: number
        id: number
    }
    export interface DiyCom extends DiyComItem {
        children: DiyComItem[]
    }
}

export interface ITabelRes<T = any> {
    page: number
    skip: number
    total: number
    data: T[]
}

export interface IInitState {
    routers: IRouter[]
    collapsed: boolean
    member: IMember[]
    jurisd: IJurisd[]
    jurisdiction: IJurisdiction[]
    router: IRouter[]
    userList: MukaOS.UserInfo[]
    userInfo: MukaOS.UserInfo
    shopList: IShopList
    article: IArticle[]
    images: IImages
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
    selectModalVisible: boolean
    diyCom: MukaOS.DiyCom[]
    goodsModalVisible: boolean
}