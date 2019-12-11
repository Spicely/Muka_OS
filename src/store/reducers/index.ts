import { combineReducers } from 'redux'
import router from './router'
import routers from './routers'
import member from './member'
import collapsed from './collapsed'
import jurisd from './jurisd'
import jurisdiction from './jurisdiction'
import jurisdictionOptions from './jurisdictionOptions'
import userList from './userList'
import userInfo from './userInfo'
import article from './article'
import images from './images'
import currency from './currency'
import icons from './icons'
import shopList from './shopList'
import actionsList from './actionsList'
import carouselList from './carouselList'
import componentData from './componentData'
import settingsShopUnits from './settings/shopUnits'
import settingsShopSpecs from './settings/shopSpecs'
import isLogin from './isLogin'
import solo from './solo'
import imageModalVisible from './imageModal/index'

export default combineReducers({
    router,
    routers,
    member,
    collapsed,
    jurisd,
    jurisdiction,
    jurisdictionOptions,
    userList,
    userInfo,
    article,
    images,
    currency,
    icons,
    shopList,
    actionsList,
    carouselList,
    componentData,
    settingsShopUnits,
    settingsShopSpecs,
    isLogin,
    solo,
    imageModalVisible
})