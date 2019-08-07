import { setCookie } from 'nookies'
import redirect from 'next-redirect'
import CryptoJS from 'crypto-js'
import axois from 'axios'
import { NextContext } from 'next'
import Router from 'next/router'
import { Store } from 'redux'
import { SET_ROUTER } from 'store/action/router'
import { SET_ICONS } from 'store/action/icons'

const config = require('../config.json')

interface IValue {
    [name: string]: any
}

export const baseUrl = config.baseUrl
export const imgUrl = config.imgUrl

export interface IinitProps extends NextContext {
    store: Store
}

const getCertificate = async () => {
    return axois.get(`${config.baseUrl}/certificate/public.key`, {
        responseType: 'arraybuffer'
    }).then(res => {
        return res.data
    })
}

export const initErrorToView = (ctx: any, url: string = '/login') => {
    setCookie(ctx, 'hist', ctx.pathname, {
        maxAge: 60 * 60,
        path: '/',
    })
    ctx.res.writeHead(302, { Location: url })
    ctx.res && ctx.res.end()
    return {}
}

export interface IRresItem<T = any> {
    msg: string
    status: number
    data: T
}
export interface IRresItems<T = any> {
    msg: string
    status: number
    data: Array<T>
}

export const initServerData = async (ctx: IinitProps) => {
    setCookie(ctx, 'hist', ctx.pathname, {
        maxAge: 60 * 2,
        path: '/',
    })
    const router: IRresItem = await http('user/info', {}, {
        headers: { cookie: ctx.req && ctx.req.headers.cookie },
    })
    if (router.status === 203 && ctx.res) {
        ctx.res.writeHead(302, { Location: '/login' })
        ctx.res && ctx.res.end()
        return {
            status: 203
        }
    }
    ctx.store.dispatch({ type: SET_ROUTER, data: router.data.router })
    const icons: IRresItems = await http('icons/find', {}, {
        headers: { cookie: ctx.req && ctx.req.headers.cookie },
    })
    ctx.store.dispatch({ type: SET_ICONS, data: icons.data })
    return {
        status: 200
    }
}

const instance = axois.create({
    baseURL: baseUrl,
    timeout: 2500,
    method: 'POST',
    withCredentials: true
})

export const encrypt = (data: IValue) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'encrypt_A5ECC', {
        iv: '1C599FEWDD22EEC2',
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.AnsiX923
    })
    return encrypted.toString()
}

export const decrypt = (data: string, key: any, iv: any) => {
    const decrypt = CryptoJS.AES.decrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.AnsiX923
    })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}

export const deviaDecrypt = (data: string) => {
    const decrypt = CryptoJS.AES.decrypt(data, 'devia', {
        iv: '1C599FE5BA22EEC2',
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}

instance.interceptors.response.use(async function (res: any) {
    const devia = deviaDecrypt(res.data.devia)
    res.data = JSON.parse(decrypt(res.data.value, res.data.secret, devia))
    if (res.data.status === 200 && res.status === 200) {
        return res.data
    } else if (res.data.status === 203 && res.status === 200) {
        if (typeof window !== 'undefined') {
            redirect('/login')
            return
        }
        return res.data
    } else if (res.data.status === 503) {
        if (typeof document !== 'undefined') {
            redirect('/404')
            return
        }
    } else {
        const data = res.data
        if (data) {
            // notification.error({
            //     message: data.msg
            // })
        } else {
            // notification.error({
            //     message: '网络堵塞, 请稍后再试'
            // })
        }

        return Promise.reject(res.data)
    }
})

const http = function (url: string, params?: IValue, config?: IValue): any {
    if (config && config.headers) {
        if (!config.headers.cookie) delete config.headers.cookie
    }
    return instance(`/os/${url}`, {
        data: {
            query: encrypt(params || {})
        },
        ...config
    })
}

export default http