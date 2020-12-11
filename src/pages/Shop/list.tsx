import React, { Component } from 'react'
import { message, Modal, Tag as ATag } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Table, Label, Tag, Image, Carousel } from 'components'
import http, { httpUtils, baseUrl, imgUrl } from '../../utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView } from 'src/utils/node'
import { IInitState, MukaOS } from 'src/store/state'
import { NavBarThemeData, Color, getUnit, DialogThemeData } from 'src/components/lib/utils'
import { SET_GOODS_LIST_DATA, SET_ROUTERS_DATA, SET_SPINLOADING_DATA } from 'src/store/action'

declare const AMap: any

const { confirm } = Modal

interface IProps extends DispatchProp {
    goodsList: MukaOS.GoodsList
}

const navBarTheme = new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })

const AddClass = styled.div`
    cursor: pointer;
    color:${({ theme }) => theme.primarySwatch};
`

interface IState {
    visible: boolean
    visibleName: string
    classifyVisible: boolean
    classifyName: string
    lastIds: number[]
    parents: { label: number, value: any }[]
    assets: MukaOS.Assets[]
    assetsVisible: boolean
    specsVisible: boolean
    priceName: string
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: justify;
`

const dialogTheme = new DialogThemeData({
    height: 'auto',
    minHeight: 400
})


class ShopList extends Component<IProps, IState> {

    public state: IState = {
        visible: false,
        visibleName: '',
        classifyVisible: false,
        classifyName: '',
        priceName: '',
        lastIds: [],
        parents: [],
        assets: [],
        assetsVisible: false,
        specsVisible: false,
    }

    private fn: IFormFun | null = null

    private classifyFn: IFormFun | null = null

    private specsFn: IFormFun | null = null

    private columns: ITableColumns<any>[] = [{
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',

    }, {
        title: '商品图片',
        dataIndex: 'assets',
        key: 'assets',
        render: (val: MukaOS.Assets[]) => {
            return <Image src={imgUrl + val[0].url} style={{ height: getUnit(30) }} onClick={this.handleAssets.bind(this, val)} />
        }
    }, {
        title: '商品类型',
        dataIndex: 'type',
        key: 'type',
        render: (val: any) => {
            switch (val) {
                case 2: return <Tag>手办</Tag>
                case 3: return <Tag>门票</Tag>
                default: return <Tag>普通商品</Tag>
            }
        }
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'staus',
        render: (status: number) => {
            switch (status) {
                case 1: return <Tag color="#7edc55">已上架</Tag>
                default: return <Tag color="red">待提交</Tag>
            }
        }
    }, {
        title: '操作',
        key: 'action',
        render: (val: any, data: MukaOS.Goods) => {
            return (
                <div>
                    <Label onClick={this.handleEdit.bind(this, data)}>修改</Label>
                </div>
            )
        }
    }]

    public componentDidMount() {
        this.getData()
    }

    private async getData() {
        const { dispatch, goodsList } = this.props
        if (goodsList.data.length) return
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('/admin/goods/find', {
                page_num: goodsList.page_num,
                page_size: goodsList.page_size,
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            dispatch({ type: SET_GOODS_LIST_DATA, data: data })
        } catch (msg) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(msg)
        }
    }

    public render(): JSX.Element {
        const { goodsList } = this.props
        const { visible, visibleName, classifyVisible, classifyName, assetsVisible, assets, specsVisible, priceName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={navBarTheme}
                    title={<LabelHeader title="商品列表" line="vertical" />}
                    right={<Button mold="primary" onClick={this.setClassifyVisble}>添加商品</Button>}
                // right={<Switch />}
                />
                <Table
                    bordered
                    columns={this.columns}
                    dataSource={goodsList.data}
                    rowKey={(data: any) => data.id}
                    expandedRowKeys={goodsList.data.map(item => item.id)}
                />
                <Dialog
                    visible={visible}
                    title={visibleName}
                    theme={dialogTheme}
                    onOk={this.handleUpdateOrCreate}
                    async
                    onClose={this.handleClassifyClose}
                >
                    <Form getItems={this.getItems} style={{ padding: getUnit(10) }} />
                </Dialog>
                <Dialog
                    visible={classifyVisible}
                    title={classifyName}
                    theme={dialogTheme}
                    onOk={this.handleUpdateOrCreate}
                    async
                    onClose={() => {
                        this.setState({ classifyVisible: false })
                    }}
                >
                    <Form getItems={this.getClassifyItems} style={{ padding: getUnit(10) }} />
                </Dialog>
                <Dialog
                    visible={specsVisible}
                    title={priceName}
                    theme={dialogTheme}
                    onOk={this.handleAddSpace}
                    async
                    onClose={() => {
                        this.setState({ specsVisible: false })
                    }}
                >
                    <Form getItems={this.getPriceItems} style={{ padding: getUnit(10) }} />
                </Dialog>
                <Modal
                    visible={assetsVisible}
                    footer={null}
                    onCancel={() => {
                        this.setState({ assetsVisible: false })
                    }}
                >
                    <Carousel value={assets} baseUrl={imgUrl} style={{ height: 'auto' }} />
                </Modal>
            </GlobalView>
        )
    }

    private getPriceItems = (fn: IFormFun) => {
        this.specsFn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>规格名称</FromLabel>,
            props: {
                placeholder: '请输入规格名称',
            },
            field: 'name',
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>规格价格</FromLabel>,
            props: {
                placeholder: '请输入规格价格',
                type: 'number',
            },
            field: 'price',
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>规格数量</FromLabel>,
            props: {
                placeholder: '请输入规格数量',
                type: 'number',
            },
            field: 'number',
        }, {
            component: 'Switch',
            label: <FromLabel>状态</FromLabel>,
            props: {
                value: true
            },
            field: 'status',
        }, {
            component: 'DatePicker',
            label: <FromLabel>开始时间</FromLabel>,
            props: {
                placeholder: '指定的时间之后才可购买(不填则不限制)'
            },
            field: 'startTime',
        }, {
            component: 'DatePicker',
            label: <FromLabel>结束时间</FromLabel>,
            props: {
                placeholder: '指定的时间之前才可购买(不填则不限制)'
            },
            field: 'endTime',
        }]
        return items
    }

    private getClassifyItems = (fn: IFormFun) => {
        this.classifyFn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>分类名称</FromLabel>,
            field: 'name'
        }, {
            component: 'Label',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>分类规格</FromLabel>,
            props: {
                value: [],
            },
            render: (val, vals) => {
                return (
                    <div>
                        {
                            val.map((i: MukaOS.GoodsClassifySpecs, index: number) => {
                                return <ATag key={index} closable onClose={(e) =>{
                                    e.preventDefault()
                                    this.handleClean(index)
                                }}>{i.name}</ATag>
                            })
                        }
                    </div>
                )
            },
            extend: <AddClass onClick={this.addPrice}>+添加</AddClass>,
            field: 'specs'
        },]
        return items
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>商品名称</FromLabel>,
            field: 'name'
        }, {
            component: 'Upload',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>展示图</FromLabel>,
            props: {
                maxLength: 5,
                crop: true,
                fileTypes: ['.jpeg', '.jpg', '.png'],
                baseUrl: imgUrl,
                cropProps: {
                    cropSize: {
                        width: 720,
                        height: 460,
                    },
                },
            },
            field: 'assets'
        }, {
            component: 'Select',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>商品类型</FromLabel>,
            props: {
                options: [{
                    label: '普通商品',
                    value: 1,
                }, {
                    label: '手办',
                    value: 2,
                }, {
                    label: '门票',
                    value: 3,
                }],
                value: 3,
            },
            field: 'type'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>定金</FromLabel>,
            visible: (val) => val.type === 2,
            field: 'deposit',
        }, {
            component: 'Label',
            label: <FromLabel>商品分类</FromLabel>,
            props: {
                value: [],
            },
            render: (val, vals) => {
                return (
                    <div>
                        {
                            val.map((i: any) => {
                                console.log(i)
                                return <div />
                            })
                        }
                    </div>
                )
            },
            extend: <AddClass onClick={this.addClassify}>+添加</AddClass>,
            field: 'classify'
        }, {
            component: 'AsyncSelect',
            label: <FromLabel>销售地区</FromLabel>,
            props: {
                url: baseUrl + '/admin/city/options',
                onBeforeOptions: (data: any[]) => {
                    return data.map((i) => {
                        return {
                            label: i.name,
                            value: i.id,
                            children: i.ascription?.map((v: any) => {
                                return {
                                    label: v.name,
                                    value: v.id,
                                }
                            })
                        }
                    });
                }
            },
            field: 'city'
        }, {
            component: 'Map',
            label: <FromLabel>选择地区</FromLabel>,
            // visible: (value) => !!value.city,
            props: {
                apiKey: '3eed71ca58c5e7517c830080a89589fc',
                width: 'auto',
                height: 300,
                showMaxBtn: true,
                isInDialog: true,
                UIPlugins: ['misc/PoiPicker'],
                poiPicker: true,
                onInit: (map) => {

                }
            }
        }]
        return items
    }

    private addPrice = () => {
        this.setState({
            specsVisible: true,
            priceName: '添加规格'
        })
    }

    private handleClean = (index: number) => {
        if (this.classifyFn) {
            const classif = this.classifyFn.getFieldValue()
            classif.specs.splice(index, 1)
            this.classifyFn.setFieldValue(classif)
        }
    }

    private handleAssets = (val: MukaOS.Assets[]) => {
        this.setState({
            assets: val,
            assetsVisible: true,
        })
    }

    private addClassify = () => {
        this.setState({
            classifyVisible: true,
            classifyName: '添加分类'
        })
    }



    private handleAddSpace = () => {
        if (this.specsFn) {
            const data = this.specsFn.getFieldValue()
            if (!data.name) {
                message.error('请输入规格名称')
                return
            }
            if (!data.price) {
                message.error('请输入规格价格')
                return
            }
            if (!data.number) {
                message.error('请输入规格数量')
                return
            }
            if (this.classifyFn) {
                const classif = this.classifyFn.getFieldValue()
                classif.specs.push(data)
                this.classifyFn.setFieldValue(classif)
                this.specsFn.cleanFieldValue()
                this.setState({
                    specsVisible: false,
                })
            }
        }
    }


    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const params = this.fn.getFieldValue()
                if (!params.name) {
                    message.error('请输入商品名称')
                    return
                }
                if (!params.assets.length) {
                    message.error('请上传展示图')
                    return
                }
                if (!params.type) {
                    message.error('请选择商品类型')
                    return
                }
                const ids: any = []
                const formData = new FormData()
                let status = false
                Object.keys(params).forEach((i) => {
                    if (i === 'assets') {
                        params[i].forEach((v: any) => {
                            if (v.file) {
                                status = true
                                formData.append(`file[]`, v.file);
                            } else {
                                ids.push({ id: v.data.id })
                            }
                        })
                    }
                })
                params.assets = ids
                formData.append('fileName', 'goods')
                if (status) {
                    const data = await http('/upload/files', formData)
                    params.assets = params.assets.concat(data)
                }
                if (!params.id) delete params.id
                const data = await http(params.id ? '/admin/router/update' : '/admin/goods/create', {
                    pageNum: 1,
                    pageSize: 10,
                    data: { ...params },
                })
                // const { dispatch } = this.props
                // dispatch({ type: SET_ROUTERS_DATA, data: data })
                // message.success(params.id ? '更新成功' : '创建成功')
                // this.fn.cleanFieldValue()
                // this.setState({
                //     classifyVisible: false
                // })
            }

        } catch (msg) {
            console.log(msg)
            message.error(msg)
        }
    }

    private handleSetStatus = async (ids: number[], status: boolean) => {
        try {
            if (ids.length > 1) {
                confirm({
                    title: '该路由包含子路由，确认会全部更改',
                    onOk: async () => {
                        const data = await http('routers/update', {
                            id: ids,
                            status
                        })
                        const { dispatch } = this.props
                        dispatch({ type: SET_ROUTERS_DATA, data: data.data })
                        message.success(data.msg)
                        this.setState({
                            classifyVisible: false
                        })
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            } else {
                const data = await http('routers/update', {
                    id: ids,
                    status
                })
                const { dispatch } = this.props
                dispatch({ type: SET_ROUTERS_DATA, data: data.data })
                message.success(data.msg)
                this.setState({
                    classifyVisible: false
                })
            }

        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleClassifyClose = () => {
        this.setState({
            visible: false,
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private setClassifyVisble = () => {
        this.setState({
            visible: true,
            visibleName: '创建商品'
        })
    }

    private handleEdit = (data: MukaOS.Goods) => {
        this.setState({
            visible: true,
            visibleName: '修改商品'
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    ...data,
                    assets: data.assets.map((i) => {
                        return {
                            url: i.url,
                            data: i,
                        }
                    })
                })
            }, 10)
        })
    }
}

export default connect(
    ({ goodsList }: IInitState) => ({
        goodsList
    })
)(ShopList)