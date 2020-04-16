import React, { Component, Fragment } from 'react'
import { Modal, message } from 'antd'
import { isNil, get } from 'lodash'
import styled, { createGlobalStyle } from 'styled-components'
import { parse } from 'query-string'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Tag, Table, Label, Image, Icon, TabBar } from 'components'
import http, { httpUtils, imgUrl, baseUrl } from 'src/utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IInitState, MukaOS, ITabelRes } from 'src/store/state'
import moment from 'moment'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { GlobalView } from 'src/utils/node'
import { NavBarThemeData, Color, IconThemeData, getUnit, DialogThemeData, TabBarThemeData, UploadThemeData } from 'src/components/lib/utils'
import { SET_SPINLOADING_DATA } from 'src/store/action'
import { RouteComponentProps, Link } from 'react-router-dom'
import { IPageType, IFieldParams, IFieldTableEdits, IBarActions } from '../Page'
import { imageModal } from 'src/utils'

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
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

const uploadTheme = new UploadThemeData({
    itemHeight: 200,
    itemWidth: 375
})

interface IProps extends DispatchProp {
    carousel: MukaOS.Carousel
    region: MukaOS.Region[]
}

const Gstyle = createGlobalStyle`
    .evc_q {
        min-height: ${getUnit(30)};
        height: ${getUnit(30)};
    }
`

interface IState {
    title: string
    titleBar: boolean
    pageType?: IPageType
    pageData: ITabelRes
    tableParams: IFieldParams[]
    editParams: any[]
    editDialogTitle: string
    editVisible: boolean
    imageVisible: boolean
    imageUrl: string
    editUrl: string
    barActions: IBarActions[]
    barActionData: IFieldTableEdits[]
    tabSelects: IFieldParams[]
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

const tabBarTheme = new TabBarThemeData({
    height: '100%'
})

class View extends Component<IProps & RouteComponentProps<{ id: string }>, IState> {

    private fn?: IFormFun

    private editFn?: IFormFun

    private tabBarFuns: IFormFun[] = []

    private actionUrl: string = ''

    private index: number = 0

    private initUrl: string = ''

    public state: IState = {
        title: '',
        titleBar: false,
        pageType: undefined,
        pageData: {
            total: 0,
            page: 1,
            data: [],
            skip: 10
        },
        editUrl: '',
        editParams: [],
        barActions: [],
        tableParams: [],
        editVisible: false,
        imageVisible: false,
        imageUrl: '',
        editDialogTitle: '',
        barActionData: [],
        tabSelects: []
    }

    public UNSAFE_componentWillReceiveProps(nextProps: IProps & RouteComponentProps<{ id: string }>) {
        const { params } = this.props.match
        if (params.id !== nextProps.match.params.id) {
            this.setState({
                barActions: [],
                tableParams: [],
                barActionData: [],
                pageData: {
                    total: 0,
                    page: 1,
                    data: [],
                    skip: 10
                },
            }, () => {
                this.getData(nextProps.match.params.id)
            })

        }
    }

    public render(): JSX.Element {
        const { title, titleBar, pageType, imageVisible, imageUrl, editVisible, editDialogTitle, barActions } = this.state
        return (
            <GlobalView>
                <Gstyle />
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
                    async
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
        const { pageData, barActionData } = this.state
        try {
            if (this.fn) {
                const value = this.fn.getFieldValue()
                for (let i = 0; i < barActionData.length; i++) {
                    if (barActionData[i].type === 'upload') {
                        value[barActionData[i].field] = value[barActionData[i].field][0].data.data.url
                    }
                    if (barActionData[i].require && (isNil(value[barActionData[i].field]) || value[barActionData[i].field] === '')) {
                        message.error(`请输入${barActionData[i].label}`)
                        return
                    }
                }
                const { data } = await http(this.actionUrl, {
                    ...value,
                    page: pageData.page,
                    skip: pageData.skip,
                })
                this.setState({
                    editVisible: false,
                    pageData: data,
                })
                this.fn.cleanFieldValue()
            }
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

    private handleAddItem = (url: string, data: IFieldTableEdits[]) => {
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
        return this.initItems(barActionData || [], fn)
    }

    private initItems = (data: any[], fn: IFormFun) => {
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }];
        data.forEach((i: any) => {
            switch (i.type) {
                case 'Label': items.push({
                    component: 'Label',
                    className: 'evc_q',
                    render: (val: string) => <div className="flex_justify">{val}</div>,
                    field: i.field,
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                case 'image': items.push({
                    component: 'Label',
                    render: (val: string) => {
                        return (
                            // <UploadBox
                            //     className="flex_center"
                            //     onClick={this.handleImageView}
                            // >
                            //     {val ? <Image src={imgUrl + val} style={{ width: '100%' }} /> : <UoloadIcon icon="ios-add" theme={uploadIconTheme} />}
                            // </UploadBox>
                            <Image src={imgUrl + val} style={{ width: '100%' }} />
                        )
                    },
                    field: i.field,
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                case 'upload': items.push({
                    component: 'Upload',
                    props: {
                        maxLength: 1,
                        theme: uploadTheme,
                        action: imgUrl + '/upload/index',
                        name: 'file',
                        baseUrl: imgUrl,
                        withCredentials: true,
                        itemStyle: i.style || {}
                    },
                    field: i.field,
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                case 'Select': items.push({
                    component: 'Select',
                    props: {
                        options: i.options,
                    },
                    field: i.field,
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                case 'CheckBox': items.push({
                    component: 'CheckBox',
                    props: {
                        options: i.options,
                    },
                    field: i.field,
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                case 'AsyncSelect': items.push({
                    component: 'AsyncSelect',
                    field: i.field,
                    props: {
                        url: (i.url.includes('http://') || i.url.includes('https://')) ? i.url : baseUrl + i.url
                    },
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                case 'RadioGroup': items.push({
                    component: 'RadioGroup',
                    props: {
                        options: i.options,
                        onChange: this.handleChange.bind(this, i.ref, fn, data)
                    },
                    field: i.field,
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                default: items.push({
                    component: i.type,
                    field: i.field,
                    props: {
                        placeholder: i.placeholder || `请输入${i.label}`,
                    },
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                })
            }
        })
        return items
    }

    private getData = async (id?: string) => {
        const { dispatch, match } = this.props
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const { data } = await http('/admin/admin_page/findOne', { id: id || match.params.id })
            if (data.initUrl) {
                this.initUrl = data.initUrl
                switch (data.pageType) {
                    case 'table': await this.getTableUrlData(data.initUrl); break;
                    case 'tabBar': await this.getTabBarData(data.initUrl); break;
                }
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

    private handleChange = (field: string, fn: IFormFun, data: any[], val: any) => {
        if (field) {
            const _v = data.find((i) => i.field === field)
            if (_v) {
                for (let i = 0; i < _v.options.length; i++) {
                    if (_v.options[i].value === val) {
                        fn.setFieldValue({
                            [field]: _v.options[i].label
                        })
                        break;
                    }
                }
            }
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

    private getTabBarData = async (url: string) => {
        try {
            const { data } = await http(url)
            this.setState({
                pageData: data
            }, () => {
                setTimeout(() => {
                    this.tabBarFuns.forEach((i) => {
                        i.setFieldValue(data)
                    })
                }, 10)
            })
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
        const { pageData, tableParams, tabSelects, editParams, editUrl } = this.state
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
                                        style={{ height: getUnit(60), maxWidth: getUnit(120) }}
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
                                        if (i.k === status.toString()) {
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
                                                                console.log(url)
                                                                return (
                                                                    <Link key={index} to={url}>
                                                                        <Label>{k.label}</Label>
                                                                    </Link>
                                                                )
                                                            }
                                                            case 'href': {
                                                                const url = k.url.replace('{{baseUrl}}', imgUrl).replace('{{id}}', data.id)
                                                                return (
                                                                    <a key={index} href={url} target="view_window">
                                                                        <Label>{k.label}</Label>
                                                                    </a>
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
                                                                    if (z.k === data[k.field].toString()) {
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
                                                                } else {
                                                                    return <Fragment />
                                                                }
                                                            }
                                                            default: return (
                                                                <Label
                                                                    key={index}
                                                                    onClick={this.handleEdit.bind(this, k.url, k.label, k.data || [], data, k)}
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
                        bordered
                        columns={columns}
                        dataSource={pageData.data}
                        rowKey={(data: any) => data.id}
                        pagination={{
                            showQuickJumper: true,
                            total: pageData.total,
                            current: pageData.page,
                            pageSize: pageData.skip,
                            onChange: this.handleTableChange
                        }}
                    />
                )
            }
            case 'tabBar': {
                return (
                    <TabBar
                        theme={tabBarTheme}
                    >
                        {
                            tabSelects.map((i, index: number) => {
                                return (
                                    <TabBar.Item title={i.label} key={index}>
                                        <Form
                                            getItems={this.getTabBarItems.bind(this, index, i.data || [])}
                                        />
                                        {i.field && (
                                            <Button
                                                async
                                                mold="primary"
                                                style={{ marginLeft: getUnit(108), marginTop: getUnit(20) }}
                                                onClick={this.handleTableUrl.bind(this, i.field, index, i.data || [])}
                                            >
                                                提交
                                            </Button>
                                        )}
                                    </TabBar.Item>
                                )
                            })
                        }
                    </TabBar>
                )
            }
            case 'edit': {
                return (
                    <div>
                        <Form getItems={this.handleEditItems} />
                        {(editParams.length && editUrl) ? <Button mold="primary" async onClick={this.handleEditComplete}>确认</Button> : null}
                    </div>
                )
            }
            default: return null;
        }
    }

    private handleEditItems = (fn: IFormFun) => {
        const { editParams } = this.state
        this.editFn = fn
        return this.initItems(editParams || [], fn)
    }

    private getTabBarItems = (index: number, data: any[], fn: IFormFun) => {
        this.tabBarFuns[index] = fn
        return this.initItems(data, fn)
    }

    private handleImageClose = () => {
        this.setState({
            imageVisible: false,
        })
    }

    private handleTableChange = async (size: number) => {
        const { dispatch } = this.props
        try {
            if (this.initUrl) {
                const { pageData } = this.state
                dispatch({ type: SET_SPINLOADING_DATA, data: true })
                const { data } = await http(this.initUrl, {
                    skip: pageData.skip,
                    page: size
                })
                this.setState({
                    pageData: data
                })
                dispatch({ type: SET_SPINLOADING_DATA, data: false })
            }

        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

    private handleEdit = (url: string, title: string, items: any[], data: any, index: number) => {
        this.index = index
        this.actionUrl = url
        this.setState({
            editDialogTitle: title,
            editVisible: true,
            barActionData: items
        }, () => {
            setTimeout(() => {
                items.forEach((i) => {
                    if (i.ref) {
                        const val = get(data, i.field)
                        items.forEach((v) => {
                            if (i.ref === v.field && v.options) {
                                for (let z = 0; z < v.options.length; z++) {
                                    if (v.options[z].value === val) {
                                        data[v.field] = v.options[z].label
                                        break;
                                    }
                                }
                            }
                        })
                    }
                })
                this.fn && this.fn.setFieldValue(data)
            }, 1)
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

    private handleEditComplete = async () => {
        try {
            if (this.editFn) {
                const { editParams, editUrl } = this.state
                const params = this.editFn.getFieldValue()
                for (let i = 0; i < editParams.length; i++) {
                    if (editParams[i].type === 'upload') {
                        if (params[editParams[i].field][0].data) {
                            params[editParams[i].field] = params[editParams[i].field][0].data.data.url
                        } else {
                            delete params[editParams[i].field]
                        }
                    }
                    if (editParams[i].require && (isNil(params[editParams[i].field]) || params[editParams[i].field] === '')) {
                        message.error(`请输入${editParams[i].label}`)
                        return
                    }
                }
                const res = await http(editUrl, params)
                message.success(res.msg)
            }
        } catch (e) {
            httpUtils.verify(e)
        }
    }

    private handleTableUrl = async (url: string, index: number, data: any[]) => {
        try {
            if (this.tabBarFuns[index]) {
                const value = this.tabBarFuns[index].getFieldValue()
                for (let i = 0; i < data.length; i++) {
                    if (data[i].type === 'upload') {
                        if (value[data[i].field][0].data) {
                            value[data[i].field] = value[data[i].field][0].data.data.url
                        } else {
                            delete value[data[i].field]
                        }
                    }
                    if (data[i].require && (isNil(value[data[i].field]) || value[data[i].field] === '')) {
                        message.error(`请输入${data[i].label}`)
                        return
                    }
                }
                const res = await http(url, value)
                message.success(res.msg)
            }
        } catch (e) {
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