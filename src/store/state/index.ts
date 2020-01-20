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

export namespace MukaOS {
    export class Region {

    }
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
}