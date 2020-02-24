import React, { Component, Fragment } from 'react'
import { difference } from 'lodash'
import { message } from 'antd'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, Icon, Tree, Spin } from 'components'
import http, { httpUtils, getTitle, getJurisd } from '../../utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { GlobalView } from 'src/utils/node'
import { IInitState, MukaOS } from 'src/store/state'
import { NavBarThemeData, Color, getUnit, IconThemeData } from 'src/components/lib/utils'
import { GET_REGION, SET_SPINLOADING_DATA } from 'src/store/action'
import styled from 'styled-components'

interface IProps extends DispatchProp {
    region: MukaOS.Region[]
}

type IPageType = 'table'

interface IState {
    pageType: IPageType
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: right;
`

const treeIconTheme = new IconThemeData({
    size: 16
})

class AdminPage extends Component<IProps, IState> {

    public state: IState = {
        pageType: 'table'
    }

    private fn: IFormFun | null = null

    private title = getTitle('/page')

    public componentDidMount() {
        // this.getData()
    }

    private getData() {
        const { dispatch } = this.props
        dispatch({ type: GET_REGION })
    }

    public render(): JSX.Element {

        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={
                        <Fragment>
                            {getJurisd(7) && <Button mold="primary" onClick={this.handleAddPage}>新增页面</Button>}
                        </Fragment>
                    }
                />
                <Form getItems={this.getItems} style={{ padding: getUnit(10) }} />
            </GlobalView>
        )
    }

    private getItems = (fn: IFormFun) => {
        const { pageType } = this.state
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>页面名称</FromLabel>,
            props: {
                placeholder: '请输入页面名称'
            },
            field: 'title'
        }, {
            component: 'RadioGroup',
            label: <FromLabel>标题栏</FromLabel>,
            props: {
                options: [{
                    label: '显示',
                    value: true,
                }, {
                    label: '不显示',
                    value: false,
                }],
                value: true
            },
            field: 'titleBar'
        }, {
            component: 'RadioGroup',
            label: <FromLabel>页面类型</FromLabel>,
            props: {
                options: [{
                    label: '表单页面',
                    value: 'table',
                }],
                value: pageType,
                onChange: this.handleTypeChange
            },
            field: 'pageType'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>请求地址</FromLabel>,
            props: {
                placeholder: '请输入地址'
            },
            visible: pageType === 'table',
            field: 'initUrl'
        }]
        return items
    }

    private handleTypeChange = (val: IPageType) => {
        this.setState({
            pageType: val
        })
    }

    private handleAddPage = async () => {
        const { dispatch } = this.props
        try {
            if (this.fn) {
                const val = this.fn.getFieldValue()
                dispatch({ type: SET_SPINLOADING_DATA, data: true })
                await http('adminPage/create', val)
                dispatch({ type: SET_SPINLOADING_DATA, data: false })
            }
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(e.msg || '网络不稳定,请稍后再试')
        }
    }
}

export default connect(
    ({ region }: IInitState) => ({
        region
    })
)(AdminPage)