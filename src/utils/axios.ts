import CryptoJS from 'crypto-js'
import axois, { AxiosRequestConfig } from 'axios'
import { store } from 'src/store'

interface IValue {
    [name: string]: any
}
// export const baseUrl = 'https://api.muka.site'
export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://192.168.1.134:8080/' : 'http://api.muka.site'
export const imgUrl = 'https://img.muka.site'

export interface IRresItem<T = any> {
    msg: string
    code: number
    data: T
}
export interface IRresItems<T = any> {
    msg: string
    code: number
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

instance.interceptors.request.use(function (req: AxiosRequestConfig) {
    req.headers.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTA1Ojg4MDBcL3NldFwvYWRtaW5cL2xvZ2luIiwiaWF0IjoxNjAzMzM3ODEwLCJleHAiOjE2MDM5NDI2MTAsIm5iZiI6MTYwMzMzNzgxMCwianRpIjoiZEF3dE1pemtYaFo4Q2huQiIsInN1YiI6MSwicHJ2IjoiZGY4ODNkYjk3YmQwNWVmOGZmODUwODJkNjg2YzQ1ZTgzMmU1OTNhOSJ9.QmNEyI0xEOQ2wANKfDeYGZZ-12GJ4ITbK5Aw8NiGpPg'
    return req
})

instance.interceptors.response.use(async function (res: any) {
    // const devia = deviaDecrypt(res.data.devia)
    // res.data = JSON.parse(decrypt(res.data.value, res.data.secret, devia))
    if (res.status === 200 && res.data.code === 0) {
        return res.data
    } else {
        return Promise.reject(res.data)
    }
})

const http = function (url: string, params?: IValue, config?: AxiosRequestConfig): any {
    let param: any = { data: encrypt(params || {}) }
    if (config && config.method?.toUpperCase() === 'GET') {
        param = { params }
    }
    return instance(`${url}`, {
        ...config,
        ...param
    })
}

export default http


export class httpUtils {
    public static verify(data: IRresItem | IRresItems) {
        if (data.code === 400) {
            return Promise.reject(data.msg || '登录失效,请重新登录')
        }
        if (data.code !== 0) {
            return Promise.reject(data.msg || '网络连接失败')
        }
        return Promise.resolve(data.data)
    }
}

export const getTitle = (field: string) => {
    const data = store.getState()
    let title = ''
    // data.router.forEach((i: any) => {
    //     if (i.item.field === field) {
    //         title = i.item.label
    //     }
    //     if (i.extend) {
    //         i.extend.forEach((v: any) => {
    //             if (v.field === field) {
    //                 title = v.label
    //             }
    //         })
    //     }
    // })
    document.title = title
    return title
}

export const getJurisd = (type: number): boolean => {
    const data = store.getState()
    return data.jurisd.some((i: any) => i.type === type)
}