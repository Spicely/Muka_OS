import React, { Component, Fragment, ChangeEvent } from 'react'
import { message } from 'antd'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, LabelHeader, Form, Input, Select, Icon } from 'components'
import http, { getTitle, getJurisd } from '../../utils/axios'
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

export type IPageType = 'table'

interface IField {
    type: string | number
    field: string
}

interface IState {
    pageType: IPageType
    tableFields: IField[]
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: right;
`

const iconTheme = new IconThemeData({
    size: 16
})

const FieldBox = styled.div`
    padding: ${getUnit(5)};
    border: ${getUnit(1)} solid rgb(232,232,232);
    position: relative;
`
const FiledClose = styled(Icon)`
    position: absolute;
    right: ${getUnit(10)};
    background: rgba(0,0,0,0.2);
    border-radius: 50%;
    right: ${getUnit(-4)};
    top: ${getUnit(-4)};
    cursor: pointer;
    :hover {
        background: rgba(0, 0, 0, 0.4);
    }
`

const FieldLabel = styled.div`
    border: ${getUnit(1)} solid rgb(232,232,232);
    width: ${getUnit(80)};
    border-right: 0;
`

class AdminPage extends Component<IProps, IState> {

    public state: IState = {
        pageType: 'table',
        tableFields: []
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
        const { pageType, tableFields } = this.state
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
        }, {
            component: 'Label',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>表单数据</FromLabel>,
            props: {
                value: tableFields,
            },
            render: (val: IField[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>
                                <div className="flex">
                                    <FieldLabel className="flex_center">字段名</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.field}
                                        placeholder="请输入表单字段"
                                        onChange={this.handleFileldChange.bind(this, index)}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        options={[{ label: '文本', value: 'text' }]}
                                        onChange={this.handelFileldSelectChange.bind(this, index)}
                                    />
                                </div>
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleFileldClose.bind(this, index)}/>
                            </FieldBox>
                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddField}
                    >
                        添加字段
                    </Button>
                </div>
            ),
            visible: pageType === 'table',
            field: 'tableParams'
        }]
        return items
    }

    private handleTypeChange = (val: IPageType) => {
        this.setState({
            pageType: val
        })
    }

    private handelFileldSelectChange = (index: number, val: string | number) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].type = val
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handleFileldClose = (index: number) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams.splice(index, 1)
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handleFileldChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].field = e.target.value
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handleAddField = () => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams.push({
                field: '',
                type: ''
            })
            this.fn.updateFieldProps({ tableParams: [...tableParams] })
        }
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