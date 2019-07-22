import { Component } from 'react'
import PageShop from 'layouts/PageShop'
import PageHead from 'layouts/PageHead'
import { ILFormItem, LForm, ILFormFun } from 'components'
import http, { IinitProps, IRresItem, baseUrl } from 'utils/axios'

interface IShopInfo {
    address: string
    addressComponents: {
        country: string,
        province: string,
        city: string,
        district: string,
        street: string,
        streetNumber: string,
        town: string,
        village: string
    }
    averageMoney: number
    createdAt: number
    id: string
    location: { lat: number, lng: number }
    name: string
    notice: string
    owner: string
    riderDeliveryMoney: number
    shopLogo: string
    startDeliveryMoney: number
    status: number
    updatedAt: number
}

interface IProps {
    shopInfo: IShopInfo
}

interface IState {

}

export default class ControllerIndex extends Component<IProps, IState> {

    public static async getInitialProps(ctx: IinitProps) {
        const data: IRresItem = await http('shop/findById', {}, { headers: { cookie: ctx.req && ctx.req.headers.cookie } })
        if (data.status === 203 && ctx.res) {
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res && ctx.res.end()
            return {}
        }
        return { shopInfo: data.data }
    }

    private exFun?: ILFormFun

    private getItems = (exFun: ILFormFun): ILFormItem[] => {
        const { shopInfo } = this.props
        this.exFun = exFun
        const item: ILFormItem[] = [{
            field: 'id',
            props: {
                value: shopInfo.id
            },
            component: 'NULL'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入店铺名(必填)',
                label: '店铺名:',
                value: shopInfo.name,
                disabled: true
            },
            field: 'name'
        }, {
            component: 'ImagePicker',
            props: {
                disabled: true,
                crop: true,
                maxLength: 1,
                cropProps: {
                    cropSize: {
                        width: 160,
                        height: 160
                    }
                },
                value: [{
                    url: baseUrl + shopInfo.shopLogo
                }]
            },
            label: '店铺Logo：',
            field: 'shopLogo'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入起送费(必填)',
                type: 'number',
                value: shopInfo.startDeliveryMoney,
                disabled: true
            },
            label: '起送费：',
            field: 'startDeliveryMoney'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入配送费(必填)',
                type: 'number',
                value: shopInfo.riderDeliveryMoney,
                disabled: true
            },
            label: '配送费：',
            field: 'riderDeliveryMoney'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入均费用(必填)',
                type: 'number',
                value: shopInfo.averageMoney,
                disabled: true
            },
            label: '人均费用：',
            field: 'averageMoney'
        }, {
            component: 'Textarea',
            props: {
                placeholder: '请输入公告',
                maxLength: 150,
                showMaxLength: true, 
                disabled: true,
                value: shopInfo.notice
            },
            label: '公告：',
            field: 'notice'
        }, {
            component: 'Map',
            props: {
                width: 600,
                height: 450,
                apiKey: 'FUABZ-FU4KF-VVYJC-JRFO2-2AB7Z-ZNF6U',
                location: true,
                initLatLng: {
                    lat: shopInfo.location.lat,
                    lng: shopInfo.location.lng
                }
            },
            label: '店铺地址：',
            field: 'address'
        }]
        return item
    }

    public render(): JSX.Element {
        return (
            <PageHead title="店铺-控制台">
                <PageShop defaultSelected="/shop/controller/setting">
                    <LForm getItems={this.getItems} />
                </PageShop>
            </PageHead>
        )
    }

}