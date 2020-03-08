import React, { Component, ComponentProps, Fragment } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'
import { parse } from 'query-string'
import { isBoolean, find } from 'lodash'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Tag, Table, Label, Image, Icon } from 'components'
import http, { httpUtils, getTitle, getJurisd, imgUrl, baseUrl } from 'src/utils/axios'
import { IArticle } from 'src/store/reducers/article'
import { connect, DispatchProp } from 'react-redux'
import { IInitState, MukaOS, ITabelRes } from 'src/store/state'
import moment from 'moment'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView, FormLable, FormRequire } from 'src/utils/node'
import { NavBarThemeData, Color, IconThemeData, getUnit, DialogThemeData } from 'src/components/lib/utils'
import { SET_ARTICLE_DATA, GET_CAROUSEL, SET_SPINLOADING_DATA } from 'src/store/action'
import { RouteComponentProps, Link } from 'react-router-dom'
import { IPageType, IFieldParams, IFieldTableEdits, IBarActions } from '../Page'
import { imageModal } from 'src/utils'

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: right;
`

const ActionButton = styled(Button)`
    margin-right: ${getUnit(5)};
    :last-child {
        margin-right: 0;
    }
`

const UoloadIcon = styled(Icon)``

const UploadBox = styled.div`
    height: ${getUnit(200)};
    width: ${getUnit(375)};
    border: ${getUnit(1)} dashed rgb(217,217,217);
    border-radius: 0;
    cursor: pointer;
    vertical-align: middle;
    position: relative;
    transition: all 0.3s;
    :hover {
        border-color: ${({ theme }) => theme.primarySwatch};
        ${UoloadIcon} {
            fill:  ${({ theme }) => theme.primarySwatch};
        }
    }
`

const dialogTheme = new DialogThemeData({
    height: 'auto',
    minHeight: 400
})

const uploadIconTheme = new IconThemeData({
    size: 34,
    color: Color.fromRGB(217, 217, 217)
})

interface IProps extends DispatchProp {
    carousel: MukaOS.Carousel
    region: MukaOS.Region[]
}

interface IState {
    title: string
    titleBar: boolean
    pageType?: IPageType
    pageData: ITabelRes
    tableParams: IFieldParams[]
    tableEdits: IFieldTableEdits[]
    editDialogTitle: string
    editVisible: boolean
    imageVisible: boolean
    imageUrl: string
    barActions: IBarActions[]
    barActionData: IFieldTableEdits[]
}

const AntModel = styled(Modal)`
    .ant-modal-close {
        .ant-modal-close-x{
            width: ${getUnit(28)};
            height: ${getUnit(34)};
            line-height: ${getUnit(34)};
        }
    }
`

const iconTheme = new IconThemeData({
    size: 24
})

class View extends Component<IProps & RouteComponentProps<{ id: string }>, IState> {

    private fn?: IFormFun

    private actionUrl: string = ''

    private index: number = 0

    private btnType: string = ''

    public state: IState = {
        title: '',
        titleBar: false,
        pageType: undefined,
        pageData: {
            page: 1,
            data: [],
            skip: 10
        },
        barActions: [],
        tableParams: [],
        tableEdits: [],
        editVisible: false,
        imageVisible: false,
        imageUrl: '',
        editDialogTitle: '',
        barActionData: []
    }

    public render(): JSX.Element {
        const { title, titleBar, pageType, imageVisible, imageUrl, editVisible, editDialogTitle, barActions } = this.state
        return (
            <GlobalView>
                {
                    titleBar && (
                        <LayoutNavBar
                            left={null}
                            theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                            title={<LabelHeader title={title} line="vertical" />}
                            right={
                                <div className="flex">
                                    {
                                        barActions.map((i, index: number) => {
                                            switch (i.type) {
                                                default: return (
                                                    <ActionButton
                                                        mold="primary"
                                                        key={index}
                                                        onClick={this.handleAddItem.bind(this, i.url, i.data)}
                                                    >
                                                        {i.label}
                                                    </ActionButton>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            }
                        />
                    )
                }
                {this.getPageTypeNode(pageType)}
                <AntModel
                    visible={imageVisible}
                    footer={null}
                    onCancel={this.handleImageClose}
                    closeIcon={
                        <Icon
                            icon="ios-close"
                            theme={iconTheme}
                        />
                    }
                >
                    <Image src={imageUrl} style={{ width: '100%' }} />
                </AntModel>
                <Dialog
                    theme={dialogTheme}
                    title={editDialogTitle}
                    visible={editVisible}
                    onClose={this.handleDialogClose}
                    onOk={this.handleDialogOk}
                >
                    <Form getItems={this.getItems} />
                </Dialog>
            </GlobalView>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private handleDialogOk = async () => {
        const { dispatch } = this.props
        try {
            if (this.fn) {
                dispatch({ type: SET_SPINLOADING_DATA, data: true })
                const value = this.fn.getFieldValue()
                const { data } = await http(this.actionUrl, value)
                if (this.btnType === 'add') {
                    const { pageData } = this.state
                    pageData.data.unshift(data)
                    this.setState({
                        pageData: { ...pageData }
                    })
                } else {
                    const { pageData } = this.state
                    pageData.data[this.index] = data
                    this.setState({
                        pageData: { ...pageData }
                    })
                }
                dispatch({ type: SET_SPINLOADING_DATA, data: false })
            }
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

    private handleAddItem = (url: string, data: IFieldTableEdits[]) => {
        this.btnType = 'add'
        this.actionUrl = url
        this.setState({
            editDialogTitle: '新增',
            editVisible: true,
            barActionData: data
        })
    }

    private getItems = (fn: IFormFun) => {
        const { barActionData } = this.state
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }]
        barActionData.forEach((i: any) => {
            switch (i.type) {
                case 'image': items.push({
                    component: 'Label',
                    render: (val: string) => {
                        return (
                            <UploadBox
                                className="flex_center"
                                onClick={this.handleImageView}
                            >
                                {val ? <Image src={imgUrl + val} style={{ width: '100%' }} /> : <UoloadIcon icon="ios-add" theme={uploadIconTheme} />}
                            </UploadBox>
                        )
                    },
                    field: i.field,
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                default: items.push({
                    component: i.type,
                    field: i.field,
                    props: {
                        placeholder: `请输入${i.label}`
                    },
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                })
            }
        })
        return items
    }

    private getData = async () => {
        const { dispatch, match } = this.props
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const { data } = await http('adminPage/findOne', { id: match.params.id })
            if (data.initUrl) {
                await this.getTableUrlData(data.initUrl)
            }
            this.setState({
                ...data
            })
            document.title = data.title
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

    private handleImageView = () => {
        imageModal()
    }

    private handleBeforeUpload = async (file: File) => {
        try {
            const data = await http('ossSign')
            return {
                ...data.data,
                key: `${data.data.key}.${file.name.split('.')[1]}`,
            }
        } catch (e) {
            httpUtils.verify(e)
        }
    }

    private getTableUrlData = async (url: string) => {
        try {
            const { data } = await http(url)
            this.setState({
                pageData: data
            })
        } catch (e) {
            httpUtils.verify(e)
        }
    }

    private getPageTypeNode = (pageType?: IPageType) => {
        const { pageData, tableParams } = this.state
        switch (pageType) {
            case 'table': {
                const columns = tableParams.map((i) => {
                    switch (i.type) {
                        case 'img': {
                            return {
                                title: i.label,
                                dataIndex: i.field,
                                key: i.field,
                                render: (val: string) => {
                                    return <Image
                                        src={imgUrl + val}
                                        style={{ height: getUnit(60), width: getUnit(120) }}
                                        onClick={this.handleImgVisible.bind(this, imgUrl + val)}
                                    />
                                }
                            }
                        }
                        case 'date': {
                            return {
                                title: i.label,
                                dataIndex: i.field,
                                key: i.field,
                                render: (val: string) => {
                                    return moment(val).format('YYYY-MM-DD HH:mm:ss')
                                }
                            }
                        }
                        case 'status': {
                            return {
                                title: i.label,
                                dataIndex: i.field,
                                key: i.field,
                                render: (status: boolean | number | string) => {
                                    const convert = i.convert.split(';').map((i: string) => {
                                        const v = i.split('=>')
                                        return {
                                            k: v[0] || '',
                                            v: (v[1] || '').split(':')[0],
                                            c: (v[1] || '').split(':')[1] || ''
                                        }
                                    }).filter((i) => {
                                        if (i.k == status.toString()) {
                                            return true
                                        } else {
                                            return false
                                        }
                                    })
                                    if (convert.length) {
                                        return <Tag color={convert[0].c || '#4395ff'}>{convert[0].v}</Tag>
                                    }
                                    return ''
                                }
                            }
                        }
                        case 'actions': {
                            return {
                                title: i.label,
                                dataIndex: i.field,
                                key: i.field,
                                render: (val: any, data: any, k: number) => {
                                    if (i.actions) {
                                        return (
                                            <Fragment>
                                                {
                                                    i.actions.map((k, index: number) => {
                                                        switch (k.type) {
                                                            case 'link': {
                                                                const url = k.url.split('/').map((i) => {
                                                                    if (i.includes(':')) {
                                                                        return data[i.split(':')[1]]
                                                                    } else {
                                                                        return i
                                                                    }
                                                                }).join('/')
                                                                return (
                                                                    <Link key={index} to={url}>
                                                                        <Label>{i.label}</Label>
                                                                    </Link>
                                                                )
                                                            }
                                                            case 'status': {
                                                                const urls = k.url.split(';')
                                                                const convert = k.label.split(';').map((i: string, index: number) => {
                                                                    const v = i.split('=>')
                                                                    return {
                                                                        k: v[0] || '',
                                                                        v: (v[1] || '').split(':')[0],
                                                                        c: (v[1] || '').split(':')[1] || '',
                                                                        u: urls[index] || ''
                                                                    }
                                                                }).filter((z) => {
                                                                    if (z.k == data[k.field].toString()) {
                                                                        return true
                                                                    } else {
                                                                        return false
                                                                    }
                                                                })
                                                                if (convert.length) {
                                                                    const u = convert[0].u.split('?')
                                                                    const params = parse(u[1])
                                                                    return (
                                                                        <Label
                                                                            color={convert[0].c || 'green'}
                                                                            key={index}
                                                                            onClick={this.handleInUrl.bind(this, u[0], { id: data.id, ...params })}
                                                                        >
                                                                            {convert[0].v}
                                                                        </Label>
                                                                    )
                                                                }
                                                            }
                                                            default: return (
                                                                <Label
                                                                    key={index}
                                                                    onClick={this.handleEdit.bind(this, k.url, data, k)}
                                                                >
                                                                    {k.label}
                                                                </Label>
                                                            )
                                                        }
                                                    })
                                                }
                                            </Fragment>
                                        )
                                    } else {
                                        return ''
                                    }
                                }
                            }
                        }
                        default: return {
                            title: i.label,
                            dataIndex: i.field,
                            key: i.field
                        }
                    }
                })
                return (
                    <Table
                        columns={columns}
                        dataSource={pageData.data}
                        rowKey={(data: any) => data.id}
                    />
                )
            }
            default: return null;
        }
    }

    private handleImageClose = () => {
        this.setState({
            imageVisible: false,
        })
    }

    private handleEdit = (url: string, data: any, index: number) => {
        const { tableEdits } = this.state
        this.index = index
        this.actionUrl = url
        this.setState({
            editDialogTitle: '修改',
            editVisible: true,
            barActionData: tableEdits
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue(data)
            }, 10)
        })
    }

    private handleDialogClose = () => {
        this.setState({
            editVisible: false
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private handleInUrl = async (url: string, params: any) => {
        const { dispatch } = this.props
        const { pageData } = this.state
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const { data } = await http(url, {
                ...params,
                page: pageData.page,
                skip: pageData.skip,
            })
            this.setState({
                pageData: data
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

    private handleImgVisible = (url: string) => {
        this.setState({
            imageVisible: true,
            imageUrl: url
        })
    }
}

export default connect(
    ({ carousel, images, region }: IInitState) => ({
        carousel,
        images,
        region
    })
)(View)