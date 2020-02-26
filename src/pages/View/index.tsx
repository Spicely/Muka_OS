import React, { Component, ComponentProps, Fragment } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'
import { isBoolean } from 'lodash'
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
import { NavBarThemeData, Color, UploadThemeData, IconThemeData, getUnit } from 'src/components/lib/utils'
import { SET_ARTICLE_DATA, GET_CAROUSEL, SET_SPINLOADING_DATA } from 'src/store/action'
import { RouteComponentProps } from 'react-router-dom'
import { IPageType, IFieldParams, IFieldTableEdits } from '../Page'

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: right;
`

const uploadTheme = new UploadThemeData({
    itemWidth: 375,
    itemHeight: 200,
    iconTheme: new IconThemeData({
        size: 30,
        color: Color.fromRGB(217, 217, 217),
    })
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

    public state: IState = {
        title: '',
        titleBar: false,
        pageType: undefined,
        pageData: {
            page: 1,
            data: [],
            skip: 10
        },
        tableParams: [],
        tableEdits: [],
        editVisible: false,
        imageVisible: false,
        imageUrl: '',
        editDialogTitle: ''
    }

    public render(): JSX.Element {
        const { title, titleBar, pageType, imageVisible, imageUrl, editVisible, editDialogTitle } = this.state
        return (
            <GlobalView>
                {
                    titleBar && (
                        <LayoutNavBar
                            left={null}
                            theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                            title={<LabelHeader title={title} line="vertical" />}
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

    private handleDialogOk = () => {
        console.log(this.actionUrl)
    }

    private getItems = (fn: IFormFun) => {
        const { tableEdits } = this.state
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }]
        tableEdits.forEach((i: any) => {
            switch (i.type) {
                case 'img': items.push({
                    component: 'Upload',
                    props: {
                        maxLength: 1,
                        crop: true,
                        cropProps: {
                            cropSize: {
                                width: 620,
                                height: 310,
                            }
                        },
                        action: 'https://robin-animate.oss-cn-chengdu.aliyuncs.com',
                        theme: uploadTheme,
                        name: 'file',
                        onBeforeUpload: this.handleBeforeUpload,
                        baseUrl: imgUrl
                    },
                    field: i.field,
                    label: <FromLabel>{i.require && <span style={{ color: 'red' }}>*</span>}{i.label}</FromLabel>
                }); break;
                default: items.push({
                    component: i.type,
                    field: i.field,
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
                                        style={{ height: getUnit(60) }}
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
                                render: (status: boolean | number) => {
                                    if (isBoolean(status)) {
                                        return <Tag color={status ? 'green' : 'red'}>{status ? '使用中' : '未启用'}</Tag>
                                    } else {
                                        return '111'
                                    }
                                }
                            }
                        }
                        case 'actions': {
                            return {
                                title: i.label,
                                dataIndex: i.field,
                                key: i.field,
                                render: (val: any, data: any) => {
                                    if (i.actions) {
                                        return (
                                            <Fragment>
                                                {
                                                    i.actions.map((i, index: number) => {
                                                        switch (i.type) {
                                                            case 'status': return (
                                                                <Label
                                                                    color="green"
                                                                    key={index}
                                                                    onClick={this.handleInUrl.bind(this, i.url, { id: data.id })}
                                                                >
                                                                    {i.label}
                                                                </Label>
                                                            )
                                                            default: return (
                                                                <Label
                                                                    key={index}
                                                                    onClick={this.handleEdit.bind(this, i.url, data)}
                                                                >
                                                                    {i.label}
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

    private handleEdit = (url: string, data: any) => {
        this.actionUrl = url
        this.setState({
            editDialogTitle: '修改',
            editVisible: true
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
    }

    private handleInUrl = async (url: string, params: any) => {
        const { dispatch } = this.props
        const { pageData } = this.state
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const { data } = await http(url, { skip: pageData.skip, page: pageData.page })
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