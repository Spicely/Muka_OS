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
import { NavBarThemeData, Color, getUnit, DialogThemeData } from 'src/components/lib/utils'
import { SET_SPINLOADING_DATA } from 'src/store/action'
import { message } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import { selectTypeValueModal, FieldBox, iconTheme, FiledClose, tableFileOptions, FieldLabel, ISelectType, editOptions } from 'src/utils'

interface IProps extends DispatchProp {
    region: MukaOS.Region[]
}

export type IPageType = 'table' | 'tabBar' | 'edit'

export type IFieldActionType = 'edit' | 'status' | 'link' | 'href'

interface IFieldActions {
    label: string
    type: IFieldActionType
    url: string
    field: string
    data?: IFieldTableEdits[]
}

export interface IBarActions {
    type: string
    label: string
    url: string
    actions: IFieldTableEdits[]
}

export interface IFieldParams {
    type: string | number
    label: string
    field: string
    actions: IFieldActions[]
    convert: string
    data?: any[]
}


export interface IFieldTableEdits {
    type: string
    label: string
    field: string
    url?: string
    require: boolean
    options?: { label: string, value: any }[]
    placeholder?: string
}

interface IState {
    pageType: IPageType
    visible: boolean
    tableEdit: boolean
    actionVisible: boolean
    optionsVisible: boolean
    fieldItem: { field: string, data: any[], index: number }
    optionsItem: { data: any[], index: number }
    actionsItem: { field: string, data: any[], index: number, key: number }
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: right;
`

const dialogTheme = new DialogThemeData({
    height: 'auto'
})

class AdminPage extends Component<IProps & RouteComponentProps<{ id?: string }>, IState> {

    public state: IState = {
        pageType: 'table',
        visible: false,
        optionsVisible: false,
        actionVisible: false,
        tableEdit: false,
        fieldItem: {
            field: '',
            data: [],
            index: 0,
        },
        actionsItem: {
            field: '',
            data: [],
            index: 0,
            key: 0,
        },
        optionsItem: {
            index: 0,
            data: [],
        }
    }

    private fn: IFormFun | null = null

    private tableFn: IFormFun | null = null

    private optionsFn: IFormFun | null = null

    private actionsFn: IFormFun | null = null

    private title = getTitle('/page')

    private barActionsFN: IFormFun[] = []

    private tableParamsFN: IFormFun[] = []

    private editParamsFN: IFormFun[] = []

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
            const { data } = await http('/admin/admin_page/findOne', { id })
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
            switch (data.pageType) {
                case 'table': {
                    setTimeout(() => {
                        this.barActionsFN.forEach((i, index: number) => {
                            i.setFieldValue(data.barActions[index])
                        })
                        this.tableParamsFN.forEach((i, index: number) => {
                            i.setFieldValue(data.tableParams[index])
                        })
                    }, 10)
                }; break;
                case 'edit': {
                    setTimeout(() => {
                        this.barActionsFN.forEach((i, index: number) => {
                            i.setFieldValue(data.barActions[index])
                        })
                        this.editParamsFN.forEach((i, index: number) => {
                            i.setFieldValue(data.editParams[index])
                        })
                    }, 10)
                }; break;
            }

            this.setState({
                tableEdit: status,
                pageType: data.pageType
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

    public render(): JSX.Element {
        const { visible, optionsVisible, actionVisible } = this.state
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
                                (getJurisd(10) && <Button mold="primary" onClick={this.handleAddOrUpdatePage}>更新页面</Button>) :
                                (getJurisd(11) && <Button mold="primary" onClick={this.handleAddOrUpdatePage}>新增页面</Button>)
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
                    visible={actionVisible}
                    title="操作数据设置"
                    onClose={this.handleActionsVisibleClose}
                    onOk={this.handleActionsVisibleOk}
                    theme={dialogTheme}
                >
                    <Form getItems={this.getActionsItems} />
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

    private getActionsItems = (fn: IFormFun) => {
        const { actionsItem } = this.state
        this.actionsFn = fn
        const items: IFormItem[] = [{
            component: 'Label',
            props: {
                value: actionsItem.data
            },
            render: (val: any[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>
                                <div className="flex">
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        value={i.type}
                                        options={editOptions}
                                        onChange={this.handelActionsFieldSelectChange.bind(this, index, 'type')}
                                    />
                                    {
                                        (i.type === 'Select' || i.type === 'RadioGroup') && (
                                            <Button
                                                mold="primary"
                                                onClick={this.handleAddOptions.bind(this, index, i.options)}
                                            >
                                                添加选项
                                            </Button>
                                        )
                                    }
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">字段名</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.field}
                                        placeholder="请输入列表字段名"
                                        onChange={this.handleActionsFieldChange.bind(this, index, 'field')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">列表文字</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入列表文字"
                                        onChange={this.handleActionsFieldChange.bind(this, index, 'label')}
                                    />
                                </div>
                                {
                                    i.type === 'Input' && (
                                        <div className="flex" style={{ marginTop: getUnit(5) }}>
                                            <FieldLabel className="flex_center">文本框提示</FieldLabel>
                                            <Input
                                                className="flex_1"
                                                value={i.placeholder}
                                                placeholder="请输入文本框提示（使用默认则不填写）"
                                                onChange={this.handleActionsFieldChange.bind(this, index, 'placeholder')}
                                            />
                                        </div>
                                    )
                                }
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
                                            onChange={this.handelActionsFieldSelectChange.bind(this, index, 'require')}
                                        />
                                    </div>
                                </div>
                                {i.type === 'AsyncSelect' && (
                                    <div className="flex" style={{ marginTop: getUnit(5) }}>
                                        <FieldLabel className="flex_center">请求地址</FieldLabel>
                                        <Input
                                            className="flex_1"
                                            value={i.url}
                                            placeholder="请输入请求地址"
                                            onChange={this.handleActionsFieldChange.bind(this, index, 'url')}
                                        />
                                    </div>
                                )}
                                <FiledClose
                                    icon="ios-close"
                                    theme={iconTheme}
                                    onClick={this.handleActionItemClose.bind(this, index)}
                                />
                            </FieldBox>
                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddActionItem}
                    >
                        添加数据
                    </Button>
                </div>
            ),
            field: actionsItem.field
        }]
        return items
    }

    private getOptionsItems = (fn: IFormFun) => {
        const { optionsItem, actionsItem } = this.state
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
                                    <FieldLabel className="flex_center">选项文字</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入选项文字"
                                        onChange={this.handleOptionsChange.bind(this, index, 'label')}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">选项值</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.value}
                                        placeholder="请输入选项值"
                                        onChange={this.handleOptionsChange.bind(this, index, 'value')}
                                    />
                                </div>
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleOptionsClose.bind(this, index)} />
                            </FieldBox>
                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddOptionsItem}
                    >
                        添加选项
                    </Button>
                </div>
            ),
            field: actionsItem.field
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
                                    <FieldLabel className="flex_center">显示类型</FieldLabel>
                                    <Select
                                        className="flex_1"
                                        value={i.type}
                                        options={editOptions}
                                        onChange={this.handelTableDataSelectChange.bind(this, index, 'type')}
                                    />
                                    {
                                        (i.type === 'Select' || i.type === 'RadioGroup') && (
                                            <Button
                                                mold="primary"
                                                onClick={this.handleFieldAddOptions.bind(this, 'tabSelects', index, i.options)}
                                            >
                                                添加选项
                                            </Button>
                                        )
                                    }
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
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
                                {i.type === 'AsyncSelect' && (
                                    <div className="flex" style={{ marginTop: getUnit(5) }}>
                                        <FieldLabel className="flex_center">请求地址</FieldLabel>
                                        <Input
                                            className="flex_1"
                                            value={i.url}
                                            placeholder="请输入请求地址"
                                            onChange={this.handleTableDataChange.bind(this, index, 'url')}
                                        />
                                    </div>
                                )}
                                {
                                    i.type === 'Input' && (
                                        <div className="flex" style={{ marginTop: getUnit(5) }}>
                                            <FieldLabel className="flex_center">文本框提示</FieldLabel>
                                            <Input
                                                className="flex_1"
                                                value={i.placeholder}
                                                placeholder="请输入文本框提示（使用默认则不填写）"
                                                onChange={this.handleTableDataChange.bind(this, index, 'placeholder')}
                                            />
                                        </div>
                                    )
                                }
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

    private handleAddActionItem = () => {
        const { actionsItem } = this.state
        if (this.actionsFn) {
            const data = this.actionsFn.getFieldValue()
            data[actionsItem.field].push({ require: false })
            this.actionsFn.setFieldValue({ ...data })
        }
    }

    private handleAddOptionsItem = () => {
        const { actionsItem } = this.state
        if (this.optionsFn) {
            const data = this.optionsFn.getFieldValue()
            data[actionsItem.field].push({})
            this.optionsFn.setFieldValue({ ...data })
        }
    }

    private handleOptionsClose = (index: number) => {
        const { actionsItem } = this.state
        if (this.optionsFn) {
            const data = this.optionsFn.getFieldValue()
            data[actionsItem.field].splice(index, 1)
            this.optionsFn.setFieldValue({ ...data })
        }
    }

    private handleActionItemClose = (index: number) => {
        const { actionsItem } = this.state
        if (this.actionsFn) {
            const data = this.actionsFn.getFieldValue()
            data[actionsItem.field].splice(index, 1)
            this.actionsFn.setFieldValue({ ...data })
        }
    }

    private handleOptionsChange = (index: number, field: string, e: ChangeEvent<HTMLInputElement>) => {
        const { actionsItem } = this.state
        if (this.optionsFn) {
            const data = this.optionsFn.getFieldValue()
            data[actionsItem.field][index][field] = e.target.value
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

    private handleActionsFieldChange = (index: number, field: string, e: ChangeEvent<HTMLInputElement>) => {
        const { actionsItem } = this.state
        if (this.actionsFn) {
            const data = this.actionsFn.getFieldValue()
            data[actionsItem.field][index][field] = e.target.value
            this.actionsFn.setFieldValue({ ...data })
        }
    }


    private handelActionsFieldSelectChange = (index: number, field: string, val: any) => {
        const { actionsItem } = this.state
        if (this.actionsFn) {
            const data = this.actionsFn.getFieldValue()
            data[actionsItem.field][index][field] = val
            this.actionsFn.setFieldValue({ ...data })
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

    private handleActionParam = (type: ISelectType, data: any, index: number) => {
        selectTypeValueModal(type, data, (val) => {
            if (this.fn) {
                const { pageType } = this.fn.getFieldValue()
                switch (pageType) {
                    case 'edit': {
                        const fieldValue = this.editParamsFN[index].getFieldValue()
                        fieldValue.actions = val
                        this.editParamsFN[index].setFieldValue(fieldValue)
                    }; break;
                    case 'table': {
                        switch (type) {
                            case 'barAction': {
                                const fieldValue = this.barActionsFN[index].getFieldValue()
                                fieldValue.actions = val
                                this.barActionsFN[index].setFieldValue(fieldValue);
                            }; break;
                            case 'tableAction': {
                                const fieldValue = this.tableParamsFN[index].getFieldValue()
                                fieldValue.actions = val
                                this.tableParamsFN[index].setFieldValue(fieldValue);
                            }
                        }
                    }; break;
                }
            }
        })
    }

    private getBarItems = (index: number, fn: IFormFun) => {
        this.barActionsFN[index] = fn
        const items: IFormItem[] = [{
            component: 'Select',
            props: {
                options: this.tableBarOptions,
            },
            label: <FieldLabel className="flex_center">显示类型</FieldLabel>,
            extend: (value: any) => (
                <Button mold="primary" disabled={value.type !== 'add'} onClick={this.handleActionParam.bind(this, 'barAction', value.actions, index)}>设置添加数据</Button>
            ),
            field: 'type',
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入请求地址',
            },
            label: <FieldLabel className="flex_center">请求地址</FieldLabel>,
            field: 'url',
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入文本内容',
            },
            label: <FieldLabel className="flex_center">文本内容</FieldLabel>,
            field: 'label',
        }, {
            component: 'NULL',
            props: {
                value: []
            },
            field: 'actions',
        }]
        return items
    }

    private getTableParamItems = (index: number, type: IPageType, fn: IFormFun) => {
        if (type === 'table') {
            this.tableParamsFN[index] = fn
        } else {
            this.editParamsFN[index] = fn
        }
        const items: IFormItem[] = [{
            component: 'Select',
            props: {
                options: type === 'edit' ? editOptions : tableFileOptions,
            },
            label: <FieldLabel className="flex_center">显示类型</FieldLabel>,
            extend: (val: any) => {
                switch (val.type) {
                    case 'actions': return (
                        <Button mold="primary" style={{ width: getUnit(120) }} onClick={this.handleActionParam.bind(this, 'tableAction', val.actions, index)}>添加功能</Button>
                    )
                    case 'Select': return (
                        <Button mold="primary" style={{ width: getUnit(120) }} onClick={this.handleActionParam.bind(this, 'options', val.actions, index)}>添加选项</Button>
                    )
                    case 'RadioGroup': return (
                        <Button mold="primary" style={{ width: getUnit(120) }} onClick={this.handleActionParam.bind(this, 'options', val.actions, index)}>添加选项</Button>
                    )
                    default: return <div />
                }
            },
            field: 'type',
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入字段名',
            },
            visible: (value: any) => value.type !== 'Divider',
            label: <FieldLabel className="flex_center">字段名</FieldLabel>,
            field: 'field',
        }, {
            component: 'RadioGroup',
            className: 'form_item',
            props: {
                options: [{
                    label: '实线',
                    value: 'solid'
                }, {
                    label: '虚线',
                    value: 'dashed'
                }],
                value: 'solid'
            },
            visible: (value: any) => value.type === 'Divider',
            label: <FieldLabel className="flex_center">类型</FieldLabel>,
            field: 'borderType',
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入文本内容',
            },
            visible: (value: any) => value.type !== 'Divider',
            label: <FieldLabel className="flex_center">文本内容</FieldLabel>,
            field: 'label',
        }, {
            component: 'Input',
            props: {
                placeholder: '使用默认提示则不填',
            },
            visible: (value: any) => value.type === 'Input',
            label: <FieldLabel className="flex_center">提示信息</FieldLabel>,
            field: 'placeholder',
        }, {
            component: 'Input',
            props: {
                placeholder: '例: 1=>成功;2=>失败:red;',
            },
            visible: (value: any) => value.type === 'status',
            label: <FieldLabel className="flex_center">状态转换</FieldLabel>,
            field: 'convert',
        }, {
            component: 'NULL',
            props: {
                value: []
            },
            field: 'actions'
        }]
        return items
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
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>数据地址</FromLabel>,
            props: {
                placeholder: '请输入初始化数据地址'
            },
            field: 'initUrl'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>更新地址</FromLabel>,
            props: {
                placeholder: '请输入更新数据地址'
            },
            visible: (val) => val.pageType === 'edit',
            field: 'editUrl'
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
                }, {
                    label: '标签设置页面',
                    value: 'tabBar',
                }, {
                    label: '编辑页面',
                    value: 'edit',
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
                                <Form getItems={this.getBarItems.bind(this, index)} labelSpacing={0} />
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
                                <Form getItems={this.getTableParamItems.bind(this, index, 'table')} labelSpacing={0} />
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleFieldClose.bind(this, index, 'tableParams')} />
                            </FieldBox>
                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddField.bind(this, 'tableParams')}
                    >
                        添加字段
                    </Button>
                </div>
            ),
            visible: pageType === 'table',
            field: 'tableParams'
        }, {
            component: 'Label',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>标签数据</FromLabel>,
            props: {
                value: [],
            },
            render: (val: IFieldParams[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>

                                <div className="flex">
                                    <FieldLabel className="flex_center">标签名</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.label}
                                        placeholder="请输入表单字段"
                                        onChange={this.handleFieldsChange.bind(this, index, 'tabSelects', 'label')}
                                    />
                                    <Button mold="primary" onClick={this.handleAddVisible.bind(this, index, 'tabSelects', i.data)}>添加设置数据</Button>
                                </div>
                                <div className="flex" style={{ marginTop: getUnit(5) }}>
                                    <FieldLabel className="flex_center">请求地址</FieldLabel>
                                    <Input
                                        className="flex_1"
                                        value={i.field}
                                        placeholder="请输入请求地址"
                                        onChange={this.handleFieldsChange.bind(this, index, 'tabSelects', 'field')}
                                    />
                                </div>
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleFieldClose.bind(this, index, 'tableParams')} />
                            </FieldBox>
                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddField.bind(this, 'tabSelects')}
                    >
                        添加选项
                    </Button>
                </div>
            ),
            visible: pageType === 'tabBar',
            field: 'tabSelects'
        }, {
            component: 'Label',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>显示数据</FromLabel>,
            props: {
                value: [],
            },
            render: (val: IFieldParams[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>
                                <Form getItems={this.getTableParamItems.bind(this, index, 'edit')} labelSpacing={0} />
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleFieldClose.bind(this, index, 'editParams')} />
                            </FieldBox>
                        ))
                    }
                    <Button
                        mold="primary"
                        style={{ width: getUnit(160) }}
                        onClick={this.handleAddField.bind(this, 'editParams')}
                    >
                        添加选项
                    </Button>
                </div>
            ),
            visible: pageType === 'edit',
            field: 'editParams'
        }]
        return items
    }

    private handleAddOptions = (index: number, data?: any[]) => {
        this.setState({
            optionsVisible: true,
            optionsItem: {
                index,
                data: data || [{}]
            }
        })
    }
    private handleFieldAddOptions = (field: string, index: number, data?: any[]) => {
        this.setState({
            optionsVisible: true,
            actionsItem: {
                field,
                data: [],
                index: -1,
                key: -1
            },
            optionsItem: {
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

    private handleActionsVisibleOk = () => {
        const { actionsItem } = this.state
        if (this.actionsFn && this.fn) {
            const data = this.actionsFn.getFieldValue()
            data[actionsItem.field] = data[actionsItem.field].filter((i: any) => {
                if (i.label && i.field) {
                    return true
                } else {
                    return false
                }
            }).map((i: any) => {
                if (i.value === 'true') {
                    i.value = true
                } else if (i.value === 'false') {
                    i.value = false
                } else if (!isNaN(Number(i.value))) {
                    i.value = Number(i.value)
                }
                return i
            })
            const pageData = this.fn.getFieldValue()
            pageData['tableParams'][actionsItem.index]['actions'][actionsItem.key][actionsItem.field] = data[actionsItem.field]
            this.fn.setFieldValue({ ...pageData })
            this.setState({
                actionVisible: false
            })
        }
    }

    private handleOptionsVisibleOk = () => {
        const { actionsItem, optionsItem } = this.state
        if (this.optionsFn) {
            const data = this.optionsFn.getFieldValue()
            data[actionsItem.field] = data[actionsItem.field].filter((i: any) => {
                if (!isNil(i.label) && !isNil(i.value)) {
                    return true
                } else {
                    return false
                }
            }).map((i: any) => {
                if (i.value === 'true') {
                    i.value = true
                } else if (i.value === 'false') {
                    i.value = false
                } else if (!isNaN(Number(i.value))) {
                    i.value = Number(i.value)
                }
                return i
            })
            if (actionsItem.index === -1) {
                if (this.tableFn) {
                    const pageData = this.tableFn.getFieldValue()
                    console.log(pageData, data[actionsItem.field], optionsItem.index)
                    pageData[actionsItem.field][optionsItem.index].options = data[actionsItem.field]
                    this.tableFn.setFieldValue({ ...pageData })
                }
            } else {
                if (this.actionsFn) {
                    const pageData = this.actionsFn.getFieldValue()
                    pageData[actionsItem.field][optionsItem.index].options = data[actionsItem.field]
                    this.actionsFn.setFieldValue({ ...pageData })
                }
            }

            this.setState({
                optionsVisible: false,
                actionsItem: {
                    field: '',
                    data: [],
                    index: 0,
                    key: 0,
                },
                optionsItem: {
                    data: [],
                    index: 0
                }
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

    private handleActionsVisibleClose = () => {
        this.setState({
            actionVisible: false
        })
        this.actionsFn && this.actionsFn.cleanFieldValue()
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
                data: data ? data.length ? data : [{ require: false }] : [{ require: false }]
            }
        })
    }

    private handleActionsVisible = (index: number, k: number, field: string, data?: any[]) => {
        this.setState({
            actionVisible: true,
            actionsItem: {
                field,
                index,
                key: k,
                data: data ? data.length ? data : [{ require: false }] : [{ require: false }]
            }
        })
    }

    private handleAddBarActions = () => {
        if (this.fn) {
            const { barActions } = this.fn.getFieldValue()
            barActions.push({})
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
            switch (field) {
                case 'barActions': this.barActionsFN.splice(index, 1); break
                case 'tableParams': this.tableParamsFN.splice(index, 1); break
                case 'editParams': this.editParamsFN.splice(index, 1); break
            }
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

    private handleAddField = (field: string) => {
        if (this.fn) {
            const data = this.fn.getFieldValue()
            data[field].push({
                field: '',
                type: '',
                actions: [],
                convert: ''
            })
            this.fn.updateFieldProps({ ...data })
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

    private handleAddOrUpdatePage = async () => {
        const { dispatch } = this.props
        try {
            if (this.fn) {
                const data = this.fn.getFieldValue()
                data.barActions = this.barActionsFN.map((i) => i.getFieldValue())
                if (!data.title) {
                    message.error('请输入标题')
                    return
                }
                if (!data.initUrl && data.pageType !== 'edit') {
                    message.error('请输入页面初始化请求地址')
                    return
                }
                switch (data.pageType) {
                    case 'table': {
                        data.tableParams = this.tableParamsFN.map((i) => i.getFieldValue())
                    }; break;
                    case 'edit': {
                        data.tabSelects = []
                        data.tableParams = []
                        data.editParams = this.editParamsFN.map((i) => i.getFieldValue())
                    }; break;
                    default: {
                        data.editParams = []
                        data.tableParams = []
                    }
                }
                dispatch({ type: SET_SPINLOADING_DATA, data: true })
                if (data.id) {
                    await http('/admin/admin_page/update', data)
                    message.success('更新成功')
                } else {
                    await http('/admin/admin_page/create', data)
                    this.fn.cleanFieldValue()
                    message.success('创建成功')
                }
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