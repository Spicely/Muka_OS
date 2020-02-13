import React, { Component, Fragment } from 'react'
import { message } from 'antd'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Image, Spin, Table, Tag, Label, Icon } from 'components'
import http, { httpUtils, getTitle, getJurisd, imgUrl } from '../../utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { GlobalView } from 'src/utils/node'
import { IInitState, MukaOS } from 'src/store/state'
import { NavBarThemeData, Color, getUnit, IconThemeData, DialogThemeData } from 'src/components/lib/utils'
import { GET_REGION, SET_REGION_DATA, SET_SPINLOADING_DATA } from 'src/store/action'
import styled from 'styled-components'
import moment from 'moment'
import { ITableColumns } from 'src/components/lib/Table'

interface IProps extends DispatchProp {
    region: MukaOS.Region[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
    entryKeys: string[]
    disableKeys: string[]
    spinning: boolean
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: justify;
`

const ArticleLogo = styled.div`
     width: ${getUnit(240)};
    height:  ${getUnit(160)};
    cursor: pointer;
    border:  ${getUnit(1)} solid #e6e6e6;
    overflow: hidden;
`

const treeIconTheme = new IconThemeData({
    size: 16
})

const dialogTheme = new DialogThemeData({
    height: '80%',
    width: 700,
})

class ShopList extends Component<IProps, IState> {

    public state: IState = {
        classifyVisible: false,
        dialogName: '',
        entryKeys: [],
        disableKeys: [],
        spinning: false
    }

    private fn: IFormFun | null = null

    private title = getTitle('/shopList')

    private columns: ITableColumns<any>[] = [{
        title: '图片',
        dataIndex: 'img',
        key: 'img',
        render: (value: any) => {
            return <Image src={imgUrl + value.filename} style={{ height: getUnit(60) }} />
        }
    }, {
        title: '地区',
        dataIndex: 'region',
        key: 'region',
        render: (value: any) => {
            return value
        }
    }, {
        title: '创建时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (time: number) => {
            return moment(time).format('YYYY-MM-DD HH:mm:ss')
        }
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (status: boolean) => {
            return <Tag color={status ? 'green' : 'red'}>{status ? '使用中' : '未启用'}</Tag>
        }
    }, {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        width: '8rem',
        render: (val: any, data: any, index: number) => {
            return (
                <div>
                    {(!data.status && getJurisd(5)) ? <Label onClick={this.handleUpdate.bind(this, data.id, false, index)} color="green">启用</Label> : null}
                    {(data.status && getJurisd(5)) ? <Label onClick={this.handleUpdate.bind(this, data.id, false, index)} color="red">禁用</Label> : null}
                    <Label >修改</Label>
                </div>
            )
        }
    }]

    public componentDidMount() {
        this.getData()
    }

    private getData() {
        const { dispatch } = this.props
        dispatch({ type: GET_REGION })
    }

    public render(): JSX.Element {
        const { region } = this.props
        const { classifyVisible, dialogName, spinning } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={
                        <Fragment>
                            {getJurisd(7) && <Button mold="primary" onClick={this.setClassifyVisble}>添加商品</Button>}
                        </Fragment>
                    }
                />
                <Spin tip="Loading..." spinning={spinning}>
                    <Table
                        columns={this.columns}
                        dataSource={[]}
                        rowKey={(data: any) => data.id}
                    />
                </Spin>
                <Dialog
                    visible={classifyVisible}
                    title={dialogName}
                    onOk={this.handleCreate}
                    async
                    onClose={this.handleClassifyClose}
                    theme={dialogTheme}
                >
                    <Form getItems={this.getItems} style={{ padding: getUnit(10) }} />
                </Dialog>
            </GlobalView>
        )
    }

    private getItems = (fn: IFormFun) => {
        const { region } = this.props
        const parents = region.map((i) => {
            return {
                value: i.id,
                label: i.name
            }
        })
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Label',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>图片</FromLabel>,
            render: (val: string) => {
                if (!val) {
                    return (
                        <ArticleLogo className="flex_center" onClick={this.handleImg}>
                            {/* <Icon icon="ios-add" fontSize="40px" color="#e6e6e6" /> */}
                            <Icon icon="ios-add" />
                        </ArticleLogo>
                    )
                } else {
                    return (
                        <ArticleLogo className="flex_center" onClick={this.handleImg}>
                            <Image src={imgUrl + val} style={{ height: '8rem' }} />
                        </ArticleLogo>
                    )
                }
            },
            field: 'img'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>商品名称</FromLabel>,
            props: {
                placeholder: '请输入商品名称',
            },
            field: 'name'
        },{
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>规格</FromLabel>,
            props: {
                placeholder: '请输入商品名称',
            },
            field: 'specs'
        }, {
            component: 'RangePicker',
            label: <FromLabel>有效期</FromLabel>,
            props: {
                placeholder: '商品售卖时间，不填则一直有效',
                options: parents
            },
            field: 'parent'
        }]
        return items
    }

    private handleImg = () => { }


    private handleCreate = async () => {
        try {
            if (this.fn) {
                const router = this.fn.getFieldValue()
                if (!router.name) {
                    message.error('请输入 省/地区 名称')
                    return
                }
                const data = await http('region/create', {
                    ...router
                })
                const { dispatch } = this.props
                dispatch({ type: SET_REGION_DATA, data: data.data })
                message.success(data.msg)
                this.fn.cleanFieldValue()
                this.setState({
                    classifyVisible: false
                })
            }

        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleUpdate = async () => {
        try {
            const { disableKeys, entryKeys } = this.state
            const { dispatch } = this.props
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('region/update', {
                employ: entryKeys,
                stopUsing: disableKeys
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            dispatch({ type: SET_REGION_DATA, data: data.data })
            this.setState({
                entryKeys: [],
                disableKeys: [],
            })
            message.success(data.msg)
        } catch (data) {
            const { dispatch } = this.props
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(data)
        }
    }

    private handleClassifyClose = () => {
        this.setState({
            classifyVisible: false,
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private setClassifyVisble = () => {
        this.setState({
            classifyVisible: true,
            dialogName: '新增省/地区'
        })
    }
}

export default connect(
    ({ region }: IInitState) => ({
        region
    })
)(ShopList)