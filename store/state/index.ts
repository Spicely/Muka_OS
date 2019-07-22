import { IIcons } from '../action/icons'
import { IJurisdiction } from '../action/jurisdiction'
import { IRouter } from '../action/router'
import { IUser } from '../action/userList'
import { IUserInfo } from '../action/userInfo'
import { IShopList } from '../action/shop'
import { IComponentData } from '../action/design'

export interface IInitState {
    allRouter: IRouter[]
    router: IRouter[]
    icons?: IIcons[]
    jurisdiction: IJurisdiction[]
    hist: string
    userList: IUser[]
    userInfo: IUserInfo
    shopList: IShopList[]
    collapsed: boolean
    componentData: IComponentData
}