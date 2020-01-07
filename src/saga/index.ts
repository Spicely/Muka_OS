import { GET_USERLIST } from './../store/action/index';
import { put, takeEvery, all, call } from 'redux-saga/effects'
import { GET_LAYOUT_DATA, SET_USERINFO_DATA, SET_ROUTER_DATA, SET_JURISD_DATA, SET_LOGIN, GET_ROUTER, GET_JURISDICTION } from '../store/action'
import { createBrowserHistory } from 'history'
import http, { httpUtils } from '../utils/axios'
import routersAsync from './router'
import jurisdictionAsync from './jurisdiction'
import userListAsync from './userList'

export const history = createBrowserHistory()

export interface IActionsProps {
    type: string
    params?: any
    data?: any
}

export function* layoutAsync() {
    try {
        const data = yield all([
            call(http, 'get-menu', {}, { method: 'GET' }),
            // call(http, 'user/get'),
            // call(http, 'routers/get'),
            // call(http, 'jurisdiction/get')
        ])

        const router = data[0].map((i: any) => {
            return {
                item: {
                    field: i.module.split('-').join('/'),
                    label: i.display_name
                },
                extend: i.children.map((v: any) => {
                    return {
                        field: v.module.split('-').join('/'),
                        id: v.id,
                        label: v.display_name
                    }
                })
            }
        })
        yield all([
            put({ type: SET_ROUTER_DATA, data: router }),
            // put({ type: SET_USERINFO_DATA, data: data[0].data }),
            // put({ type: SET_ROUTER_DATA, data: data[1].data }),
            // put({ type: SET_JURISD_DATA, data: data[2].data }),
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
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ])
}