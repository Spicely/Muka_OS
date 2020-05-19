import { put, call, all } from 'redux-saga/effects'
import http, { httpUtils } from '../utils/axios'
import { IActionsProps } from './index'
import { SET_REGION_DATA, SET_CAROUSEL_DATA } from 'src/store/action'

export default function* carouselAsync(actions: IActionsProps) {
    try {
        const data = yield all([
            call(http, '/admin/region/get'),
            call(http, '/admin/carousel/get'),
        ])
        yield all([
            put({ type: SET_REGION_DATA, data: data[0].data }),
            put({ type: SET_CAROUSEL_DATA, data: data[1].data }),
        ])
    } catch (data) {
        httpUtils.verify(data)
    }
}