import { SET_USERINFO_DATA } from './../store/action/index';
import { put, takeEvery, all, call } from 'redux-saga/effects'
import { GET_LAYOUT_DATA, SET_ROUTER_DATA, SET_JURISD_DATA, SET_LOGIN, GET_ROUTER, GET_JURISDICTION , GET_REGION, GET_USERLIST, GET_CAROUSEL} from '../store/action'
import { createBrowserHistory } from 'history'
import http, { httpUtils } from '../utils/axios'
import routersAsync from './router'
import jurisdictionAsync from './jurisdiction'
import userListAsync from './userList'
import regionAsync from './region'
import carouselAsync from './carousel'

export const history = createBrowserHistory()

export interface IActionsProps {
    type: string
    params?: any
    data?: any
}

export function* layoutAsync() {
    try {
        const data = yield all([
            call(http, 'router/get'),
        ])
        yield all([
            put({ type: SET_ROUTER_DATA, data: data[0].data.router }),
            put({ type: SET_JURISD_DATA, data: data[0].data.jurisd }),
            put({ type: SET_USERINFO_DATA, data: data[0].data.userInfo }),
        ])
    } catch (data) {
        yield put({ type: SET_LOGIN, data: false })
        httpUtils.verify(data)
    }
}

export function* watchIncrementAsync() {
    yield takeEvery(GET_LAYOUT_DATA, layoutAsync)
    yield takeEvery(GET_ROUTER, routersAsync)
    yield takeEvery(GET_JURISDICTION, jurisdictionAsync)
    yield takeEvery(GET_USERLIST, userListAsync)
    yield takeEvery(GET_REGION, regionAsync)
    yield takeEvery(GET_CAROUSEL, carouselAsync)
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ])
}