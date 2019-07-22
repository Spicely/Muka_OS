import { Component } from 'react'
import PageHead from 'layouts/PageHead'
import PageShop from 'layouts/PageShop'
import { LabelHeader, Label, NavBar, Dialog, LForm, ILFormFun, ILFormItem } from 'components'
import { nav_bar } from '../index.less'

interface IProps {

}

interface IState {

}

export default class Shop extends Component<IProps, IState> {

    private exFun?: ILFormFun

    private getItems = (exFun: ILFormFun): ILFormItem[] => {
        this.exFun = exFun
        const item: ILFormItem[] = [{
            field: 'id',
            component: 'NULL'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入商品名(必填)',
                label: '商品名:',
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
                }
            },
            label: '商品图片：',
            field: 'logo'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入价格(必填)',
                type: 'number',
                extend: '元'
            },
            label: '价格：',
            field: 'price'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入优惠价',
                type: 'number',
                extend: '元'
            },
            label: '优惠价:',
            field: 'favorablePrice'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入限购份数',
                type: 'number',
                extend: '份'
            },
            label: '限购数:',
            field: 'limitedPurchase'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入餐盒费',
                type: 'number',
                value: 1,
                extend: '元'
            },
            label: '餐盒费：',
            field: 'boxCharges'
        }, {
            component: 'Textarea',
            props: {
                placeholder: '请输入商品详情（例：炸鸡块2个）',
                maxLength: 40,
                showMaxLength: true
            },
            label: '商品详情：',
            field: 'detail'
        }]
        return item
    }

    public render(): JSX.Element {
        const navBar = (
            <NavBar
                className={nav_bar}
                title={<LabelHeader title="商品设置" line="vertical" />}
                right={
                    <div className="flex_justify" style={{ height: '35px' }}>
                        <Label >添加店铺</Label>
                    </div>
                }
            />
        )
        return (
            <PageHead
                title="店铺-控制台-商品设置"
            >
                <PageShop
                    defaultSelected="/shop/controller/shop"
                    navBar={navBar}
                >
                    <Dialog visible>
                        <LForm getItems={this.getItems} />
                    </Dialog>
                </PageShop>
            </PageHead>
        )
    }

}