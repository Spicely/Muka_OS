import React, { Component, Fragment, ChangeEvent } from 'react'
import { isNil } from 'lodash'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, LabelHeader, Form, Input, Select, Icon, Divider, Dialog, RadioGroup } from 'components'
import http, { getTitle, getJurisd, httpUtils } from '../../utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormItem, IFormFun } from 'src/components/lib/Form'
import { GlobalView } from 'src/utils/node'
import { IInitState, MukaOS } from 'src/store/state'
import { NavBarThemeData, Color, getUnit, IconThemeData, DialogThemeData } from 'src/components/lib/utils'
import { GET_REGION, SET_SPINLOADING_DATA } from 'src/store/action'
import { message } from 'antd'
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends DispatchProp {
    region: MukaOS.Region[]
}

export type IPageType = 'table'

export type IFieldActionType = 'edit' | 'status' | 'link'

interface IFieldActions {
    label: string
    type: IFieldActionType
    url: string
    field: string
}

export interface IBarActions {
    type: string
    label: string
    url: string
    data: IFieldTableEdits[]
}

export interface IFieldParams {
    type: string | number
    label: string
    field: string
    actions: IFieldActions[]
    convert: string
}


export interface IFieldTableEdits {
    type: string
    label: string
    field: string
    url?: string
    require: boolean
    options?: { label: string, value: any }[]
}

interface IState {
    pageType: IPageType
    tableFields: IFieldParams[]
    visible: boolean
    tableEdit: boolean
    optionsVisible: boolean
    fieldItem: { field: string, data: any[], index: number }
    optionsItem: { field: string, data: any[], index: number }
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: right;
`

const iconTheme = new IconThemeData({
    size: 16
})

const dialogTheme = new DialogThemeData({
    height: 'auto'
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

class AdminPage extends Component<IProps & RouteComponentProps<{ id?: string }>, IState> {

    public state: IState = {
        pageType: 'table',
        tableFields: [],
        visible: false,
        optionsVisible: false,
        tableEdit: false,
        fieldItem: {
            field: '',
            data: [],
            index: 0,
        },
        optionsItem: {
            field: '',
            data: [],
            index: 0,
        }
    }

    private fn: IFormFun | null = null

    private tableFn: IFormFun | null = null

    private optionsFn: IFormFun | null = null

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
        label: '状态',
        value: 'status',
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
    }, {
        label: '路由',
        value: 'link',
    }, {
        label: '状态',
        value: 'status',
    }]

    private tableFieldTypes = [{
        label: '文本框',
        value: 'Input'
    }, {
        label: '选项',
        value: 'Select'
    }, {
        label: '异步选项',
        value: 'AsyncSelect'
    }, {
        label: '图片',
        value: 'image'
    }]

    private tableBarOptions = [{
        label: '新增',
        value: 'add'
    }]

    public componentDidMount() {
        const { params } = this.props.match
        if (params.id) {
            this.getData(params.id)
        }
    }

    private async getData(id: string) {
        const { dispatch } = this.props
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const { data } = await http('adminPage/findOne', { id })
            let status = false
            data.tableParams.forEach((i: any) => {
                if (i.type === 'actions') {
                    i.actions.forEach((v: any) => {
                        if (v.type === 'edit') {
                            status = true
                        }
                    })
                }
            })
            this.fn && this.fn.setFieldValue(data)
            this.setState({
                tableEdit: status
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

    public render(): JSX.Element {
        const { visible, optionsVisible } = this.state
        const { params } = this.props.match
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={
                        <Fragment>
                            {params.id ?
                                (getJurisd(10) && <Button mold="primary" onClick={this.handleUpdatePage}>更新页面</Button>) :
                                (getJurisd(11) && <Button mold="primary" onClick={this.handleAddPage}>新增页面</Button>)
                            }
                        </Fragment>
                    }
                />
                <Form getItems={this.getItems} style={{ padding: getUnit(10) }} />
                <Dialog
                    visible={visible}
                    title="数据表设置"
                    onClose={this.handleVisibelClose}
                    onOk={this.handleVisibleOk}
                    theme={dialogTheme}
                >
                    <Form getItems={this.getTableDataItems} />
                </Dialog>
                <Dialog
                    visible={optionsVisible}
                    title="选项数据"
                    onClose={this.handleOptionsVisibleClose}
                    onOk={this.handleOptionsVisibleOk}
                    theme={dialogTheme}
                >
                    <Form getItems={this.getOptionsItems} />
                </Dialog>
            </GlobalView>
        )
    }

    private getOptionsItems = (fn: IFormFun) => {
        const { optionsItem } = this.state
        this.optionsFn = fn
        const items: IFormItem[] = [{
            component: 'Label',
            props: {
                value: optionsItem.data
            },
            render: (val: any[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>
                                <div className="flex">
                                    <FieldLabel className="flex_center">字段</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入选项文字"
                                        onChange={this.handleOptionsChange.bind(this, index, 'label')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">文本内容</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.value}
                                        placeholder="请输入选项值"
                                        onChange={this.handleOptionsChange.bind(this, index, 'value')}
                                    />
                                </div>
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleTableDataClose.bind(this, index)} />
                            </FieldBox>

                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddTableData}
                    >
                        添加按钮
                    </Button>
                </div>
            ),
            field: optionsItem.field
        }]
        return items
    }

    private getTableDataItems = (fn: IFormFun) => {
        const { fieldItem } = this.state
        this.tableFn = fn
        const items: IFormItem[] = [{
            component: 'Label',
            props: {
                value: fieldItem.data
            },
            render: (val: any[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>
                                <div className="flex">
                                    <FieldLabel className="flex_center">字段</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.field}
                                        placeholder="请输入字段"
                                        onChange={this.handleTableDataChange.bind(this, index, 'field')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">文本内容</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入文本内容"
                                        onChange={this.handleTableDataChange.bind(this, index, 'label')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        value={i.type}
                                        options={this.tableFieldTypes}
                                        onChange={this.handelTableDataSelectChange.bind(this, index, 'type')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">是否为必须</FieldLabel>
                                    <div
                                        className="flex_1 flex_justify"
                                        style={{ height: getUnit(32), border: '0.05rem solid rgb(232,232,232)' }}
                                    >
                                        <RadioGroup
                                            style={{ marginLeft: getUnit(10) }}
                                            value={i.require}
                                            options={[{ label: '是', value: true }, { label: '否', value: false }]}
                                            onChange={this.handelTableDataSelectChange.bind(this, index, 'require')}
                                        />
                                    </div>
                                </div>
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleTableDataClose.bind(this, index)} />
                            </FieldBox>

                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddTableData}
                    >
                        添加按钮
                    </Button>
                </div>
            ),
            field: fieldItem.field
        }]
        return items
    }

    private handleAddTableData = () => {
        const { fieldItem } = this.state
        if (this.tableFn) {
            const data = this.tableFn.getFieldValue()
            data[fieldItem.field].push({
                require: false
            })
            this.tableFn.setFieldValue({ ...data })
        }
    }

    private handleOptionsChange = (index: number, field: string, e: ChangeEvent<HTMLInputElement>) => {
        const { optionsItem } = this.state
        if (this.optionsFn) {
            const data = this.optionsFn.getFieldValue()
            data[optionsItem.field][index][field] = e.target.value
            this.optionsFn.setFieldValue({ ...data })
        }
    }

    private handleTableDataChange = (index: number, field: string, e: ChangeEvent<HTMLInputElement>) => {
        const { fieldItem } = this.state
        if (this.tableFn) {
            const data = this.tableFn.getFieldValue()
            data[fieldItem.field][index][field] = e.target.value
            this.tableFn.setFieldValue({ ...data })
        }
    }

    private handleTableDataClose = (index: number) => {
        const { fieldItem } = this.state
        if (this.tableFn) {
            const data = this.tableFn.getFieldValue()
            data[fieldItem.field].splice(index, 1)
            this.tableFn.setFieldValue({ ...data })
        }
    }

    private handelTableDataSelectChange = (index: number, field: string, val: any) => {
        const { fieldItem } = this.state
        if (this.tableFn) {
            const data = this.tableFn.getFieldValue()
            data[fieldItem.field][index][field] = val
            this.tableFn.setFieldValue({ ...data })
        }
    }

    private getItems = (fn: IFormFun) => {
        const { pageType, tableEdit } = this.state
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
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>数据地址</FromLabel>,
            props: {
                placeholder: '请输入初始化数据地址'
            },
            visible: pageType === 'table',
            field: 'initUrl'
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
            component: 'Label',
            label: <FromLabel>标题栏按钮</FromLabel>,
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
                                        onChange={this.handleFieldsChange.bind(this, index, 'barActions', 'url')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">文本内容</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入文本内容"
                                        onChange={this.handleFieldsChange.bind(this, index, 'barActions', 'label')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        value={i.type}
                                        options={this.tableBarOptions}
                                        onChange={this.handelFileldSelectChange.bind(this, index, 'barActions', 'type')}
                                    />
                                    <Button mold="primary" disabled={i.type !== 'add'} onClick={this.handleAddVisible.bind(this, index, 'barActions', i.data)}>设置添加数据</Button>
                                </div>

                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleFieldClose.bind(this, index, 'barActions')} />
                            </FieldBox>

                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddBarActions}
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
                                        onChange={this.handleFieldsChange.bind(this, index, 'tableParams', 'field')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">文本内容</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入表单文本"
                                        onChange={this.handleFieldsChange.bind(this, index, 'tableParams', 'label')}
                                    />
                                </div>
                                {
                                    i.type === 'status' && (
                                        <div className="flex" style={{ marginTop: getUnit(5) }}>
                                            <FieldLabel className="flex_center">状态转换</FieldLabel>
                                            <Input
                                                className="flex_1"
                                                value={i.convert}
                                                placeholder="例: 1=>成功;2=>失败:red;"
                                                onChange={this.handleFieldsChange.bind(this, index, 'tableParams', 'convert')}
                                            />
                                        </div>
                                    )
                                }
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        value={i.type}
                                        options={this.tableFileOptions}
                                        onChange={this.handelFileldSelectChange.bind(this, index, 'tableParams', 'type')}
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
                                                        placeholder={v.type === 'status' ? '例：1=>使用:green;2=>禁用:red;' : '请输入功能名称'}
                                                        onChange={this.handleActionFieldChange.bind(this, index, k, 'label')}
                                                    />
                                                </div>
                                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                                    <FieldLabel className="flex_center">{v.type === 'link' ? '跳转地址' : '请求地址'}</FieldLabel>
                                                    <Input
                                                        className="flex_1"
                                                        value={v.url}
                                                        placeholder={v.type === 'status' ? 'status/ok?a=b;status/no;' : '请输入请求地址'}
                                                        onChange={this.handleActionFieldChange.bind(this, index, k, 'url')}
                                                    />
                                                </div>
                                                {
                                                    v.type === 'status' && (
                                                        <div className="flex" style={{ marginTop: getUnit(5) }}>
                                                            <FieldLabel className="flex_center">对应字段名</FieldLabel>
                                                            <Input
                                                                className="flex_1"
                                                                value={v.field}
                                                                placeholder="请输入字段名"
                                                                onChange={this.handleActionFieldChange.bind(this, index, k, 'field')}
                                                            />
                                                        </div>
                                                    )
                                                }
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
                                        onChange={this.handleFileldTableLabelChange.bind(this, index, 'field')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">列表文字</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入列表文字"
                                        onChange={this.handleFileldTableLabelChange.bind(this, index, 'label')}
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
                                    {
                                        i.type === 'Select' && (
                                            <Button
                                                mold="primary"
                                                onClick={this.handleAddOptions.bind(this, index, 'tableEdits', i.options)}
                                            >
                                                添加选项
                                            </Button>
                                        )
                                    }
                                </div>
                                {i.type === 'AsyncSelect' && (
                                    <div className="flex" style={{ marginTop: getUnit(5) }}>
                                        <FieldLabel className="flex_center">请求地址</FieldLabel>
                                        <Input
                                            className="flex_1"
                                            value={i.url}
                                            placeholder="请输入请求地址"
                                            onChange={this.handleFileldTableLabelChange.bind(this, index, 'url')}
                                        />
                                    </div>
                                )}
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
            visible: tableEdit,
            field: 'tableEdits'
        },]
        return items
    }

    private handleAddOptions = (index: number, field: string, data?: any[]) => {
        this.setState({
            optionsVisible: true,
            optionsItem: {
                field,
                index,
                data: data || [{}]
            }
        })
    }

    private handleVisibleOk = () => {
        const { fieldItem } = this.state
        if (this.tableFn && this.fn) {
            const data = this.tableFn.getFieldValue()
            data[fieldItem.field] = data[fieldItem.field].filter((i: any) => {
                if (!isNil(i.label) && !isNil(i.type) && !isNil(i.field)) {
                    return true
                } else {
                    return false
                }
            })
            const pageData = this.fn.getFieldValue()
            pageData[fieldItem.field][fieldItem.index].data = data[fieldItem.field]
            this.fn.setFieldValue({ ...pageData })
            this.setState({
                visible: false
            })
        }
    }

    private handleOptionsVisibleOk = () => {
        const { optionsItem } = this.state
        if (this.optionsFn && this.fn) {
            const data = this.optionsFn.getFieldValue()
            data[optionsItem.field] = data[optionsItem.field].filter((i: any) => {
                if (!isNil(i.label) && !isNil(i.value)) {
                    return true
                } else {
                    return false
                }
            })
            const pageData = this.fn.getFieldValue()
            pageData[optionsItem.field][optionsItem.index].options = data[optionsItem.field]
            this.fn.setFieldValue({ ...pageData })
            this.setState({
                optionsVisible: false
            })
        }
    }

    private handleVisibelClose = () => {
        this.setState({
            visible: false
        })
        this.tableFn && this.tableFn.cleanFieldValue()
    }

    private handleOptionsVisibleClose = () => {
        this.setState({
            optionsVisible: false
        })
        this.optionsFn && this.optionsFn.cleanFieldValue()
    }

    private handleTypeChange = (val: IPageType) => {
        this.setState({
            pageType: val
        })
    }

    private handleAddVisible = (index: number, field: string, data?: any[]) => {
        this.setState({
            visible: true,
            fieldItem: {
                field,
                index,
                data: data || [{ require: true }]
            }
        })
    }

    private handleAddBarActions = () => {
        if (this.fn) {
            const { barActions } = this.fn.getFieldValue()
            barActions.push({
                label: '',
                url: '',
                type: ''
            })
            this.fn.setFieldValue({
                barActions: [...barActions]
            })
        }
    }

    private handleActionFieldChange = (index: number, k: number, field: string, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const { tableParams } = this.fn.getFieldValue()
            tableParams[index].actions[k][field] = e.target.value
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

    private handelFileldSelectChange = (index: number, field: string, k: string, val: string | number) => {
        if (this.fn) {
            const data = this.fn.getFieldValue()
            data[field][index][k] = val
            if (field === 'tableParams') {
                if (val === 'actions') {
                    data.tableParams[index].actions = [{
                        lable: '',
                        type: '',
                        url: ''
                    }]
                } else {
                    data.tableParams[index].actions = []
                }
            }
            this.fn.setFieldValue({ ...data })
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

    private handleFileldTableLabelChange = (index: number, field: string, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const { tableEdits } = this.fn.getFieldValue()
            tableEdits[index][field] = e.target.value
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

    private handleFieldsChange = (index: number, field: string, k: string, e: ChangeEvent<HTMLInputElement>) => {
        if (this.fn) {
            const data: any = this.fn.getFieldValue()
            data[field][index][k] = e.target.value
            this.fn.setFieldValue({ ...data })
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
                convert: ''
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

    private handleUpdatePage = async () => {
        const { dispatch } = this.props
        try {
            if (this.fn) {
                const data = this.fn.getFieldValue()
                dispatch({ type: SET_SPINLOADING_DATA, data: true })
                await http('adminPage/update', data)
                dispatch({ type: SET_SPINLOADING_DATA, data: false })
                message.success('更新成功')
            }
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

    private handleAddPage = async () => {
        const { dispatch } = this.props
        try {
            if (this.fn) {
                const data = this.fn.getFieldValue()
                dispatch({ type: SET_SPINLOADING_DATA, data: true })
                await http('adminPage/create', data)
                dispatch({ type: SET_SPINLOADING_DATA, data: false })
                this.fn.cleanFieldValue()
                message.success('创建成功')
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