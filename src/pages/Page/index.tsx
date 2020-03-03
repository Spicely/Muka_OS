import React, { Component, Fragment, ChangeEvent } from 'react'
import { message } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, LabelHeader, Form, Input, Select, Icon, Divider } from 'components'
import http, { getTitle, getJurisd, httpUtils } from '../../utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { GlobalView } from 'src/utils/node'
import { IInitState, MukaOS } from 'src/store/state'
import { NavBarThemeData, Color, getUnit, IconThemeData } from 'src/components/lib/utils'
import { GET_REGION, SET_SPINLOADING_DATA } from 'src/store/action'

interface IProps extends DispatchProp {
    region: MukaOS.Region[]
}

export type IPageType = 'table'

export type IFieldActionType = 'edit' | 'status'

interface IFieldActions {
    label: string
    type: IFieldActionType
    url: string
}

export interface IBarActions {
    type: string
    label: string
    url: string
}

export interface IFieldParams {
    type: string | number
    label: string
    field: string
    actions: IFieldActions[]
}


export interface IFieldTableEdits {
    type: string
    label: string
    field: string
    require: boolean
}

interface IState {
    pageType: IPageType
    tableFields: IFieldParams[]
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

    private tableFileOptions = [{
        label: '文本',
        value: 'text',
    }, {
        label: '图片',
        value: 'img',
    }, {
        label: '时间',
        value: 'date',
    }, {
        label: '操作',
        value: 'actions',
    }]

    private tableActionOptions = [{
        label: '编辑',
        value: 'edit',
    }, {
        label: '删除',
        value: 'del',
    }]

    private tableFieldTypes = [{
        label: '文本框',
        value: 'Input'
    }, {
        label: '选项',
        value: 'Select'
    }, {
        label: '图片',
        value: 'image'
    }]

    private tableBarOptions = [{
        label: '新增',
        value: 'add'
    }]

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
        }, {
            component: 'Label',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>标题烂按钮</FromLabel>,
            props: {
                value: [],
            },
            render: (val: IBarActions[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>
                                <div className="flex">
                                    <FieldLabel className="flex_center">请求地址</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.url}
                                        placeholder="请输入请求地址"
                                        onChange={this.handleFieldsChange.bind(this, index, 'barActions')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">文本内容</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入文本内容"
                                        onChange={this.handleFileldLabelChange.bind(this, index)}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        value={i.type}
                                        options={this.tableBarOptions}
                                        onChange={this.handelFileldSelectChange.bind(this, index)}
                                    />
                                </div>
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleFieldClose.bind(this, index, 'barActions')} />
                            </FieldBox>

                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddField}
                    >
                        添加按钮
                    </Button>
                </div>
            ),
            field: 'barActions',
        }, {
            component: 'Label',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>表单数据</FromLabel>,
            props: {
                value: [],
            },
            render: (val: IFieldParams[]) => (
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
                                        onChange={this.handleFieldsChange.bind(this, index, 'tableParams')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">文本内容</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入表单文本"
                                        onChange={this.handleFileldLabelChange.bind(this, index)}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        value={i.type}
                                        options={this.tableFileOptions}
                                        onChange={this.handelFileldSelectChange.bind(this, index)}
                                    />
                                </div>
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleFieldClose.bind(this, index, 'tableParams')} />
                                {i.actions.length ? (
                                    <Divider
                                        borderType="dashed"
                                        type="horizontal"
                                        style={{
                                            borderWidth: getUnit(2),
                                            marginTop: getUnit(10),
                                        }}
                                    />
                                ) : null}
                                {
                                    i.actions.map((v, k) => {
                                        return (
                                            <FieldBox key={k} style={{ marginTop: getUnit(10) }}>
                                                <div className="flex">
                                                    <FieldLabel className="flex_center">功能名</FieldLabel>
                                                    <Input
                                                        className="flex_1"
                                                        value={v.label}
                                                        placeholder="请输入功能名称"
                                                        onChange={this.handleActionLabelChange.bind(this, index, k)}
                                                    />
                                                </div>
                                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                                    <FieldLabel className="flex_center">请求地址</FieldLabel>
                                                    <Input
                                                        className="flex_1"
                                                        value={v.url}
                                                        placeholder="请输入请求地址"
                                                        onChange={this.handleActionUrlChange.bind(this, index, k)}
                                                    />
                                                </div>
                                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                                    <FieldLabel className="flex_center">功能类型</FieldLabel>
                                                    <Select
                                                        className="flex_1"
                                                        value={v.type}
                                                        options={this.tableActionOptions}
                                                        onChange={this.handelActionSelectChange.bind(this, index, k)}
                                                    />
                                                </div>
                                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleActionClose.bind(this, index, k)} />
                                            </FieldBox>
                                        )
                                    })
                                }
                                {i.type === 'actions' && (
                                    <Button
                                        mold="primary"
                                        style={{ width: getUnit(160), marginTop: getUnit(10) }}
                                        onClick={this.handleAddAction.bind(this, index)}
                                    >
                                        添加功能
                                    </Button>
                                )}
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
        }, {
            component: 'Label',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>编辑列表</FromLabel>,
            props: {
                value: [],
            },
            render: (val: IFieldTableEdits[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>
                                <div className="flex">
                                    <FieldLabel className="flex_center">字段名</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.field}
                                        placeholder="请输入列表字段名"
                                        onChange={this.handleFileldTableFieldChange.bind(this, index)}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">列表文字</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入列表文字"
                                        onChange={this.handleFileldTableLabelChange.bind(this, index)}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        value={i.type}
                                        options={this.tableFieldTypes}
                                        onChange={this.handelFileldTableSelectChange.bind(this, index)}
                                    />
                                </div>
                                <FiledClose
                                    icon="ios-close"
                                    theme={iconTheme}
                                    onClick={this.handleFieldClose.bind(this, index, 'tableEdits')}
                                />
                            </FieldBox>
                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddForm}
                    >
                        添加编辑列表
                    </Button>
                </div>
            ),
            visible: false,
            field: 'tableEdits'
        },]
        return items
    }

    private handleTypeChange = (val: IPageType) => {
        this.setState({
            pageType: val
        })
    }

    private handleActionLabelChange = (index: number, k: number, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].actions[k].label = e.target.value
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handleActionUrlChange = (index: number, k: number, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].actions[k].url = e.target.value
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handelActionSelectChange = (index: number, k: number, val: string | number) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].actions[k].type = val
            const status = tableParams.some((i: any) => {
                if (!i.actions.length) return false
                return i.actions.some((v: any) => v.type === 'edit')
            })
            if (status) {
                this.fn.showFieldElement(['tableEdits'])
            } else {
                this.fn.hideFieldElement(['tableEdits'])
            }
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handelFileldTableSelectChange = (index: number, val: string | number) => {
        if (this.fn) {
            const { tableEdits } = this.fn.getFieldValue()
            tableEdits[index].type = val
            this.fn.setFieldValue({
                tableEdits: [...tableEdits]
            })
        }
    }

    private handelFileldSelectChange = (index: number, val: string | number) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].type = val
            if (val === 'actions') {
                tableParams[index].actions = [{
                    lable: '',
                    type: '',
                    url: ''
                }]
            } else {
                tableParams[index].actions = []
            }
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handleActionClose = (index: number, key: number) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].actions.splice(key, 1)
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handleFieldClose = (index: number, field: string) => {
        if (this.fn) {
            const data = this.fn.getFieldValue()
            data[field].splice(index, 1)
            this.fn.setFieldValue({
                [field]: [...data[field]]
            })
        }
    }

    private handleFileldTableLabelChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const { tableEdits } = this.fn.getFieldValue()
            tableEdits[index].label = e.target.value
            this.fn.setFieldValue({
                tableEdits: [...tableEdits]
            })
        }
    }

    private handleFileldTableFieldChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const { tableEdits } = this.fn.getFieldValue()
            tableEdits[index].field = e.target.value
            this.fn.setFieldValue({
                tableEdits: [...tableEdits]
            })
        }
    }

    private handleFileldLabelChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].label = e.target.value
            this.fn.setFieldValue({
                tableParams: [...tableParams]
            })
        }
    }

    private handleFieldsChange = (index: number, field: string, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const data: any = this.fn.getFieldValue()
            data[field][index].field = e.target.value
            this.fn.setFieldValue({
                [field]: [...data[field]]
            })
        }
    }

    private handleAddForm = () => {
        if (this.fn) {
            const { tableEdits } = this.fn.getFieldValue()
            tableEdits.push({
                field: '',
                type: '',
                label: ''
            })
            this.fn.updateFieldProps({ tableEdits: [...tableEdits] })
        }
    }

    private handleAddField = () => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams.push({
                field: '',
                type: '',
                actions: [],
            })
            this.fn.updateFieldProps({ tableParams: [...tableParams] })
        }
    }

    private handleAddAction = (index: number) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].actions.push({
                lable: '',
                type: '',
                url: '',
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
            httpUtils.verify(e)
        }
    }
}

export default connect(
    ({ region }: IInitState) => ({
        region
    })
)(AdminPage)