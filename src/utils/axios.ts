import { isFunction } from 'lodash'
import { message } from 'antd'
import CryptoJS from 'crypto-js'
import axois, { AxiosRequestConfig } from 'axios'
import { store } from 'src/store'
import { SET_LOGIN } from 'src/store/action'

interface IValue {
    [name: string]: any
}

export const baseUrl = 'http://localhost:1337'
export const imgUrl = 'http://localhost:1337'

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

const instance = axois.create({
    baseURL: baseUrl,
    timeout: 25000,
    method: 'POST',
    withCredentials: true,
})

export const encrypt = (data: IValue) => {
    // const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'encrypt_A5ECC', {
    //     iv: '1C599FEWDD22EEC2',
    //     mode: CryptoJS.mode.CFB,
    //     padding: CryptoJS.pad.AnsiX923
    // })
    // return encrypted.toString()
    return data
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
    // const devia = deviaDecrypt(res.data.devia)
    // res.data = JSON.parse(decrypt(res.data.value, res.data.secret, devia))
    if (res.status === 200 && res.data.status === 200) {
        return res.data
    } else {
        return Promise.reject(res.data)
    }
})

const http = function (url: string, params?: IValue, config?: AxiosRequestConfig): any {
    const headers = config ? config.headers : {}
    return instance(`/admin/${url}`, {
        ...config,
        data: encrypt(params || {}),
        headers: {
            ...headers,
        }
    })
}

export default http


export class httpUtils {
    public static verify(data: IRresItem | IRresItems, callback?: (data: any) => void) {
        if (data.status === 203) {
            message.error(data.msg)
            return
        }
        if (data.status !== 200) {
            message.error(data.msg)
            return
        }
        if (isFunction(callback)) callback(data.data)
    }
}

export const getTitle = (field: string) => {
    const data = store.getState()
    let title = ''
    data.router.map((i: any) => {
        if (i.item.field === field) {
            title = i.item.label
        }
    })
    return title
}