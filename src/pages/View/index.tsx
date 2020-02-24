import React, { Component, ComponentProps } from 'react'
import { message, Spin } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Tag, Table, Label, Image } from 'components'
import http, { httpUtils, getTitle, getJurisd, imgUrl } from 'src/utils/axios'
import { IArticle } from 'src/store/reducers/article'
import { connect, DispatchProp } from 'react-redux'
import { IInitState, MukaOS } from 'src/store/state'
import moment from 'moment'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView, FormLable, FormRequire } from 'src/utils/node'
import { NavBarThemeData, Color, UploadThemeData, IconThemeData, getUnit } from 'src/components/lib/utils'
import { SET_ARTICLE_DATA, GET_CAROUSEL, SET_SPINLOADING_DATA } from 'src/store/action'
import { RouteComponentProps } from 'react-router-dom'

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

class View extends Component<IProps & RouteComponentProps<{ id: string }>, IState> {
    public state: IState = {
        title: '',
        titleBar: false
    }

    public render(): JSX.Element {
        const { carousel } = this.props
        const { title, titleBar } = this.state
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

                {/* <Table
                        columns={this.columns}
                        dataSource={carousel.data}
                        rowKey={(data: any) => data.id}
                    /> */}
            </GlobalView>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private getData = async () => {
        const { dispatch, match } = this.props
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('adminPage/findOne', { id: match.params.id })
            this.setState({
                ...data.data
            })
            document.title = data.data.title
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(e.msg || '网络不稳定,请稍后再试')
        }
    }
}

export default connect(
    ({ carousel, images, region }: IInitState) => ({
        carousel,
        images,
        region
    })
)(View)