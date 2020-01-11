import { put, call, all } from 'redux-saga/effects'
import http, { httpUtils } from '../utils/axios'
import { IActionsProps } from './index'
import { SET_ROUTERS_DATA, SET_ICONS_DATA } from 'src/store/action'

export default function* routersAsync(actions: IActionsProps) {
    try {
        const data = yield all([
            call(http, 'router/findAll'),
            call(http, 'icon/find')
        ])
        yield all([
            put({ type: SET_ROUTERS_DATA, data: data[0].data }),
            put({ type: SET_ICONS_DATA, data: data[1].data }),
        ])
    } catch (data) {
        httpUtils.verify(data)
    }
}