import { put, call, all } from 'redux-saga/effects'
import http, { httpUtils } from '../utils/axios'
import { IActionsProps } from './index'
import { SET_JURISDICTION_DATA, SET_JURISDICTION_OPTIONS_DATA, SET_ROUTERS_DATA } from 'src/store/action'

export default function* jurisdictionAsync(actions: IActionsProps) {
    try {
        const data = yield all([
            call(http, 'jurisd/find'),
            call(http, 'jurisdClassify/find'),
            call(http, 'router/findAll')
        ])
        yield all([
            put({ type: SET_JURISDICTION_OPTIONS_DATA, data: data[0].data }),
            put({ type: SET_JURISDICTION_DATA, data: data[1].data }),
            put({ type: SET_ROUTERS_DATA, data: data[2].data }),
        ])
    } catch (data) {
        httpUtils.verify(data)
    }
}