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
import { GET_REGION, SET_REGION_DATA, SET_SPINLOADING_DATA } from 'src/store/action'
import styled from 'styled-components'

const { TreeNode } = Tree

interface IProps extends DispatchProp {
    region: MukaOS.Region[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
    entryKeys: string[]
    disableKeys: string[]
}

const FromLabel = styled.div`
    width: ${getUnit(60)};
    text-align: justify;
    text-align-last: justify;
`

const treeIconTheme = new IconThemeData({
    size: 16
})

class Region extends Component<IProps, IState> {

    public state: IState = {
        classifyVisible: false,
        dialogName: '',
        entryKeys: [],
        disableKeys: [],
    }

    private fn: IFormFun | null = null

    private title = getTitle('/platform/region')

    public componentDidMount() {
        this.getData()
    }

    private getSelectKeys = (hasParent?: boolean) => {
        const { region } = this.props
        const selectKeys: string[] = []
        region.map((i) => {
            if (i.children) {
                if (i.status && hasParent) {
                    selectKeys.push(i.id)
                }
                i.children.forEach((v) => {
                    if (v.status) {
                        selectKeys.push(v.id)
                    }
                })
            } else {
                i.status && selectKeys.push(i.id)
            }
        })
        return selectKeys
    }

    private getData() {
        const { dispatch } = this.props
        dispatch({ type: GET_REGION })
    }

    public render(): JSX.Element {
        const { region } = this.props
        const { classifyVisible, dialogName, entryKeys, disableKeys } = this.state
        const selectKeys: string[] = this.getSelectKeys()
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={
                        <Fragment>
                            {getJurisd(7) && <Button mold="primary" onClick={this.setClassifyVisble}>添加省份</Button>}
                            {getJurisd(8) && <Button mold="primary" async disabled={!disableKeys.length && !entryKeys.length} style={{ marginLeft: getUnit(10) }} onClick={this.handleUpdate}>更新</Button>}
                        </Fragment>
                    }
                />
                    <Tree
                        checkable
                        showIcon
                        selectable={false}
                        defaultExpandAll
                        defaultCheckedKeys={selectKeys}
                        // switcherIcon={() => <AIcon type="down" />}
                        switcherIcon={<Icon icon="ios-arrow-down" theme={treeIconTheme} />}
                        onCheck={this.handleCheck}
                    >
                        {
                            region.map((i) => {
                                return (
                                    <TreeNode
                                        title={i.name}
                                        key={i.id}
                                    >
                                        {
                                            i.children && i.children.map((v) => (
                                                <TreeNode
                                                    title={v.name}
                                                    key={v.id}
                                                />
                                            ))
                                        }

                                    </TreeNode>
                                )
                            })
                        }

                    </Tree>
                <Dialog
                    visible={classifyVisible}
                    title={dialogName}
                    onOk={this.handleCreate}
                    async
                    onClose={this.handleClassifyClose}
                >
                    <Form getItems={this.getItems} style={{ padding: getUnit(10) }} />
                </Dialog>
            </GlobalView>
        )
    }

    private handleCheck = (checkedKeys: any) => {
        const selectKeys: string[] = this.getSelectKeys(true)
        const entryKeys = difference(checkedKeys, selectKeys)
        const disableKeys = difference(selectKeys, checkedKeys)
        this.setState({
            entryKeys,
            disableKeys
        })
    }

    private getItems = (fn: IFormFun) => {
        const { region } = this.props
        const parents = region.map((i) => {
            return {
                value: i.id,
                label: i.name
            }
        })
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel><span style={{ color: 'red' }}>*</span>名称</FromLabel>,
            props: {
                placeholder: '请输入 省/地区 名称(输入已经存在的名称会导致创建失败)'
            },
            field: 'name'
        }, {
            component: 'Input',
            label: <FromLabel>权重</FromLabel>,
            props: {
                placeholder: '数值越高显示越前',
                value: 0,
                type: 'number'
            },
            field: 'sort'
        }, {
            component: 'Select',
            label: <FromLabel>父级</FromLabel>,
            props: {
                placeholder: '请选择省',
                options: parents
            },
            field: 'parent'
        }]
        return items
    }


    private handleCreate = async () => {
        try {
            if (this.fn) {
                const router = this.fn.getFieldValue()
                if (!router.name) {
                    message.error('请输入 省/地区 名称')
                    return
                }
                const data = await http('region/create', {
                    ...router
                })
                const { dispatch } = this.props
                dispatch({ type: SET_REGION_DATA, data: data.data })
                message.success(data.msg)
                this.fn.cleanFieldValue()
                this.setState({
                    classifyVisible: false
                })
            }

        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleUpdate = async () => {
        try {
            const { disableKeys, entryKeys } = this.state
            const { dispatch } = this.props
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('region/update', {
                employ: entryKeys,
                stopUsing: disableKeys
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            dispatch({ type: SET_REGION_DATA, data: data.data })
            this.setState({
                entryKeys: [],
                disableKeys: [],
            })
            message.success(data.msg)
        } catch (data) {
            const { dispatch } = this.props
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(data)
        }
    }

    private handleClassifyClose = () => {
        this.setState({
            classifyVisible: false,
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private setClassifyVisble = () => {
        this.setState({
            classifyVisible: true,
            dialogName: '新增省/地区'
        })
    }
}

export default connect(
    ({ region }: IInitState) => ({
        region
    })
)(Region)