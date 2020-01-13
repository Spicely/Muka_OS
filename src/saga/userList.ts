import { put, call, all } from 'redux-saga/effects'
import http, { httpUtils } from '../utils/axios'
import { IActionsProps } from './index'
import { SET_USERLIST_DATA, SET_JURISDICTION_DATA } from 'src/store/action'

export default function* userListAsync(actions: IActionsProps) {
    try {
        const data = yield all([
            call(http, 'system-user', { page_size: 6000 })
            // call(http, 'user/find'),
            // call(http, 'jurisdiction/classifyFind')
        ])
        yield all([
            put({ type: SET_USERLIST_DATA, data: data[0] }),
            // put({ type: SET_USERLIST_DATA, data: data[0].data }),
            // put({ type: SET_JURISDICTION_DATA, data: data[1].data }),
        ])
    } catch (data) {
        httpUtils.verify(data)
    }
}