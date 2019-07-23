import { Component } from 'react'
import { notification } from 'antd'
import { connect } from 'react-redux'
import { omit } from 'muka'
import { bindActionCreators } from 'redux'
import { IInitState } from 'store/state'
import PageHead from 'layouts/PageHead'
import PageLayout from 'layouts/PageLayout'
import http, { IinitProps, IRresItems, initServerData, IRresItem, baseUrl } from 'utils/axios'
import { IRouter } from 'store/action/router'
import { Label, LabelHeader, ILFormFun, ILFormItem, LForm, NavBar, Dialog, Table, Image } from 'components'
import { page_navbar } from 'styles/global.less'
import { SET_SHOPLIST, IShopList, actions } from 'store/action/shop'
import { shop_logo } from './index.less'
import Link from 'next/link'


interface IState {
    visible: boolean
    edit: boolean
}

interface IProps {
    router: IRouter[]
    allRouter: IRouter[]
    shopList: IShopList[]
    setShopList: (data: IShopList[]) => void
}


class ShopList extends Component<IProps, IState> {
    public static async getInitialProps(ctx: IinitProps) {
        const data = await initServerData(ctx)
        if (data.status !== 200) {
            return data
        }
        const shopList: IRresItems<IShopList> = await http('shop/find', {}, { headers: { cookie: ctx.req && ctx.req.headers.cookie } })
        ctx.store.dispatch({ type: SET_SHOPLIST, data: shopList.data })
        return {}
    }

    public state = {
        visible: false,
        edit: false,
        value: []
    }

    private exFun?: ILFormFun

    private getItems = (exFun: ILFormFun): ILFormItem[] => {
        this.exFun = exFun
        const item: ILFormItem[] = [{
            field: 'id',
            component: 'NULL'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入店铺名(必填)',
                label: '店铺名:'
            },
            field: 'name'
        }, {
            component: 'ImagePicker',
            props: {
                crop: true,
                maxLength: 1,
                cropProps: {
                    cropSize: {
                        width: 160,
                        height: 160
                    }
                }
            },
            label: '店铺Logo：',
            field: 'shopLogo'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入起送费(必填)',
                type: 'number',
                value: 15
            },
            label: '起送费：',
            field: 'startDeliveryMoney'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入配送费(必填)',
                type: 'number',
                value: 3
            },
            label: '配送费：',
            field: 'riderDeliveryMoney'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入均费用(必填)',
                type: 'number',
                value: 20
            },
            label: '人均费用：',
            field: 'averageMoney'
        }, {
            component: 'Textarea',
            props: {
                placeholder: '请输入公告',
                maxLength: 150,
                showMaxLength: true
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
                onLocationError: () => { notification.error({ message: '地址加载失败,请手动选择' }) }
            },
            label: '店铺地址：',
            field: 'address'
        }]
        return item
    }

    private columns: ITableColumns[] = [{
        title: '店铺Logo', dataIndex: 'shopLogo', key: 'shopLogo',
        render: (val: any = {}, data: IShopList) => {
            return <Image src={baseUrl + data.shopLogo} className={shop_logo} />
        }
    }, {
        title: '店铺名', dataIndex: 'name', key: 'name',
    }, {
        title: '状态', dataIndex: 'status', key: 'status',
        render: (val: number) => {
            return this.getStatusLable(val);
        }
    }, {
        title: '操作', dataIndex: 'id', key: 'id',
        render: (val: string, ) => {
            return (
                <Link
                    href={{
                        pathname: '/shop/controller',
                        query: {
                            id: val
                        }
                    }}
                    prefetch
                >
                    <Label>进入店铺</Label>
                </Link>
            )
        }
    }]

    public render(): JSX.Element {
        const { shopList } = this.props
        const { visible } = this.state
        const navBar = (
            <NavBar
                className={page_navbar}
                title={<LabelHeader title="我的店铺" line="vertical" />}
                right={
                    <div className="flex_justify" style={{ height: '35px' }}>
                        <Label onClick={this.handleShowDialog}>添加店铺</Label>
                    </div>
                }
            />
        )
        return (
            <PageHead title="我的店铺">
                <PageLayout
                    defaultSelected="/shop/list"
                    navBar={navBar}
                >
                    <Table columns={this.columns} dataSource={shopList} rowKey={(data: IShopList) => data.id} />
                    <Dialog
                        visible={visible}
                        onClose={this.handleDialogClose}
                        onOk={this.handleDialogOk}
                    >
                        <LForm getItems={this.getItems} />
                    </Dialog>
                </PageLayout>
            </PageHead>
        )
    }

    private getStatusLable(status: number) {
        switch (status) {
            case 1: {
                return <Label color="green">审核中</Label>
            }
            case 2: {
                return <Label color="green">审核成功</Label>
            }
            case 3: {
                return <Label color="red">审核失败</Label>
            }
            case 4: {
                return <Label color="blue">上线中</Label>
            }
            default: return <Label />
        }
    }

    private handleDialogClose = () => {
        this.setState({
            visible: false
        })
        this.exFun && this.exFun.cleanFieldValue()
    }

    private handleDialogOk = async () => {
        if (this.exFun) {
            const data = this.exFun.getFieldValue()
            // if (notVal(data.startDeliveryMoney) || notVal(data.riderDeliveryMoney) || notVal(data.name) || notVal(data.averageMoney) || !data.address.address) {
            //     return notification.error({
            //         message: '参数不完整'
            //     })
            // }
            const formData = new FormData()
            data.shopLogo.map((i: any) => {
                formData.append('avatar', i.file)
            })
            let params = '?'
            Object.keys(omit(data, ['shopLogo', 'address'])).map((i) => {
                params += i + '=' + data[i] + '&'
            })
            params += 'address=' + data['address'].address + '&'
            params += 'addressComponents=' + JSON.stringify(data['address'].addressComponents) + '&'
            params += 'location=' + JSON.stringify(data['address'].location)
            try {
                const res: IRresItem = await http(`shop/create${params}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                })
                const { shopList, setShopList } = this.props
                setShopList([res.data, ...shopList])
                notification.success({
                    message: res.msg
                })
            } catch (e) {
                console.error(e)
            }
        } else {
            notification.error({
                message: '初始化出错'
            })
        }
    }

    private handleShowDialog = () => {
        this.setState({
            visible: true
        })
    }
}
export default connect(
    (state: IInitState) => ({
        shopList: state.shopList
    }),
    (dispatch: any) => bindActionCreators(actions, dispatch)
)(ShopList)