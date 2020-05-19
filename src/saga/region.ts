import { put, call, all } from 'redux-saga/effects'
import http, { httpUtils } from '../utils/axios'
import { IActionsProps } from './index'
import { SET_REGION_DATA } from 'src/store/action'

export default function* regionAsync(actions: IActionsProps) {
    try {
        const data = yield all([
            call(http, '/admin/region/get'),
        ])
        yield all([
            put({ type: SET_REGION_DATA, data: data[0].data }),
        ])
    } catch (data) {
        httpUtils.verify(data)
    }
}