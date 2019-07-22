import { combineReducers } from 'redux'
import router from './router'
import icons from './icons'
import jurisdiction from './jurisdiction'
import hist from './hist'
import userList from './userList'
import userInfo from './userInfo'
import allRouter from './allRouter'
import { shopList } from './shop'
import collapsed from './collapsed'
import componentData from './design'

export default combineReducers({
    router,
    icons,
    jurisdiction,
    hist,
    userList,
    userInfo,
    allRouter,
    shopList,
    collapsed,
    componentData
})