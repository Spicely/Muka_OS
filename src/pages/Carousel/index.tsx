import React, { Component } from 'react'
import { message, Spin } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Tag, Table, Label, Image, Icon } from 'components'
import http, { httpUtils, getTitle, getJurisd } from 'src/utils/axios'
import { IArticle } from 'src/store/reducers/article'
import { IJurisd } from 'src/store/reducers/jurisd'
import { connect, DispatchProp } from 'react-redux'
import { IInitState } from 'src/store/state'
import moment from 'moment'
import { IImages } from 'src/store/reducers/images'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView, FormLable, FormRequire } from 'src/utils/node'
import { NavBarThemeData, Color, getRatioUnit } from 'src/components/lib/utils'
import { SET_ARTICLE_DATA } from 'src/store/action'
import { imageModal } from 'src/utils'

interface IProps extends DispatchProp {
    article: IArticle[]
    jurisd: IJurisd[]
    images: IImages[]
}

interface IState {
    visible: boolean
    uploadDialog: boolean
    imagesDialog: boolean
    dialogName: string
    fileList: any[]
    spinning: boolean
}

const ArticleContent = styled.div`
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`

const ArticleForm = styled(Form)`
    width: 100%;
    height: 100%;
`

const ArticleLogo = styled.div`
     width: ${getRatioUnit(240)};
    height:  ${getRatioUnit(160)};
    cursor: pointer;
    border:  ${getRatioUnit(1)} solid #e6e6e6;
    overflow: hidden;
`

class Carousel extends Component<IProps, IState> {
    // public static async getInitialProps(ctx: IinitProps) {
    //     try {
    //         const headers = await initOSInfo(ctx)
    //         const data = await http('article/find', {}, headers)
    //         ctx.store.dispatch({ type: SET_ARTICLE_DATA, data: data.data })
    //         const images = await http('image/find', {}, headers)
    //         ctx.store.dispatch({ type: SET_IMAGES_DATA, data: images.data })
    //         return {}
    //     } catch (data) {
    //         httpUtils.resTest(data, ctx)
    //     }
    // }

    public state: IState = {
        imagesDialog: false,
        uploadDialog: false,
        visible: false,
        dialogName: '',
        fileList: [],
        spinning: false
    }

    private imageHandler: any

    private type: 'logo' | 'editor' = 'logo'

    private fn: IFormFun | null = null

    private title = getTitle('/platform/carousel')

    private index: number = 0

    private columns: ITableColumns<any>[] = [{
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: '4rem',

    }, {
        title: '简介',
        dataIndex: 'synopsis',
        key: 'synopsis',
        width: '4rem',
    }, {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        render: (val: string) => {
            return <ArticleContent>{val}</ArticleContent>
        }
    }, {
        title: '创建时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: '8rem',
        render: (time: number) => {
            return moment(time).format('YYYY-MM-DD HH:mm:ss')
        }
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: '4rem',
        render: (status: boolean) => {
            return <Tag color={status ? 'green' : 'red'}>{status ? '使用中' : '禁用中'}</Tag>
        }
    }, {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        width: '8rem',
        render: (val: any, data: IArticle, index: number) => {
            const { jurisd } = this.props
            if (!jurisd.find((i) => i.type === 12)) return ''
            return (
                <div>
                    {!data.status ? <Label onClick={this.handleUpdate.bind(this, data.id, true, index)} color="green">启用</Label> : null}
                    {data.status ? <Label onClick={this.handleUpdate.bind(this, data.id, false, index)} color="red">禁用</Label> : null}
                    <Label onClick={this.handleEdit.bind(this, data, index)}>修改</Label>
                </div>
            )
        }
    }]

    public render(): JSX.Element {
        const { article } = this.props
        const { visible, dialogName, spinning } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={
                        getJurisd(5) ? <Button mold="primary" onClick={this.setVisble}>新增轮播</Button> : null
                    }
                />
                <Spin tip="Loading..." spinning={spinning}>
                    <Table
                        columns={this.columns}
                        dataSource={article}
                        rowKey={(data: any) => data.id}
                    />
                </Spin>
                <Dialog
                    visible={visible}
                    title={dialogName}
                    onOk={this.handleUpdateOrCreate}
                    async
                    onClose={this.handleClassifyClose}
                >
                    <ArticleForm getItems={this.getItems} />
                </Dialog>
            </GlobalView>
        )
    }

    private handleUploadVisible = (status: boolean) => {
        this.setState({
            uploadDialog: status,
            fileList: []
        })
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FormLable><FormRequire color="red">*</FormRequire>标题</FormLable>,
            props: {
                placeholder: '请输入标题'
            },
            field: 'title'
        }, {
            component: 'Upload',
            label: <FormLable><FormRequire color="red">*</FormRequire>图片</FormLable>,
            field: 'img',
            props: {
                maxLength: 1,
                crop: true,
                name: 'file',
                action: 'https://robin-animate.oss-cn-chengdu.aliyuncs.com',
                onBeforeUpload: this.handleBeforeUpload,
                // withCredentials: true
            }
        }, {
            component: 'Input',
            label: <FormLable><FormRequire color="red">*</FormRequire>跳转地址</FormLable>,
            props: {
                placeholder: '请输入简介',
            },
            field: 'url'
        }]
        return items
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

    public componentDidMount() {
        this.getData()
    }

    private async getData() {
        try {
            const { dispatch } = this.props
            const data = await Promise.all([
                http('article/find'),
                http('image/find')
            ])
            dispatch({ type: SET_ARTICLE_DATA, data: data[0].data })

        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleUpdate = async (id: string, status: boolean, index: number) => {
        try {
            this.setState({
                spinning: true
            })
            const { dispatch, article } = this.props
            const userList = await http('article/update', {
                id,
                status,
            })
            article[index] = userList.data
            dispatch({ type: SET_ARTICLE_DATA, data: article })
            message.success(userList.msg)
            this.setState({
                spinning: false
            })
        } catch (data) {
            httpUtils.verify(data)
            this.setState({
                spinning: false
            })
        }
    }
    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const user = this.fn.getFieldValue()
                if (!user.title) {
                    message.error('请输入标题')
                    return
                }
                if (!user.logo) {
                    message.error('请设置LOGO')
                    return
                }
                if (!user.content) {
                    message.error('请输入内容')
                    return
                }
                let url = 'article/create'
                if (user.id) {
                    url = 'article/update'
                }
                const { dispatch, article } = this.props
                const userList = await http(url, {
                    ...user
                })
                if (user.id) {
                    article[this.index] = userList.data
                } else {
                    article.unshift(userList.data)
                }
                dispatch({ type: SET_ARTICLE_DATA, data: article })
                message.success(userList.msg)
                this.setState({
                    visible: false
                })
                this.fn.cleanFieldValue()
            }
        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleEdit = (data: IArticle, index: number) => {
        this.index = index
        this.setState({
            visible: true,
            dialogName: '修改文章'
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue(data)
            }, 10);
        })
    }

    private handleClassifyClose = () => {
        this.setState({
            visible: false,
        })
        this.fn && this.fn.cleanFieldValue()
    }
    private setVisble = () => {
        this.setState({
            visible: true,
            dialogName: '添加轮播'
        })
    }
}

export default connect(
    ({ article, images }: IInitState) => ({
        article,
        images
    })
)(Carousel)