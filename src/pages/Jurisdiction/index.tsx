import React, { Component } from 'react'
import styled from 'styled-components'
import { find } from 'lodash'
import { message, Tree } from 'antd'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { union, pullAll } from 'lodash'
import { Button, Dialog, LabelHeader, Tag, Form, Table, Label } from 'components'
import http, { httpUtils, getTitle } from 'src/utils/axios'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IRouters } from 'src/store/reducers/routers'
import { IJurisdiction } from 'src/store/reducers/jurisdiction'
import { connect, DispatchProp } from 'react-redux'
import { IInitState } from 'src/store/state'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView } from 'src/utils/node'
import { Color, NavBarThemeData, getUnit, DialogThemeData } from 'src/components/lib/utils'
import { SET_JURISDICTION_DATA, GET_JURISDICTION } from 'src/store/action'
import { IJurisdictionOptions } from 'src/store/reducers/jurisdictionOptions'

const { TreeNode } = Tree

const FromLabel = styled.div`
    width: ${getUnit(50)};
    text-align: justify;
    text-align-last: justify;
`

interface IProps extends DispatchProp {
    jurisdiction: any[]
    jurisdictionOptions: IJurisdictionOptions[]
    jurisd: IJurisd[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
    treeVal: string[]
    parentVal: string[]
    jurisdVisible: boolean
    routers: any[]
}

class Jurisdiction extends Component<IProps, IState> {
    public state: IState = {
        routers: [],
        classifyVisible: false,
        jurisdVisible: false,
        dialogName: '',
        treeVal: [],
        parentVal: []
    }

    private fn: IFormFun | null = null

    private jurisdFn: IFormFun | null = null

    private userId = ''

    private title = getTitle('/system/role')

    private columns: ITableColumns<any>[] = [{
        title: '权限名',
        dataIndex: 'name',
        key: 'name',
    },/* {
        title: '拥有权限',
        dataIndex: 'jurisdiction',
        key: 'jurisdiction',
        render: (data: { name: string, id: string }[]) => {
            return data.map((i) => {
                return <Tag key={i.id} style={{ marginBottom: getRatioUnit(8) }} color="#7edc55" >{i.name}</Tag>
            })
        }
    }, */{
        title: '操作',
        width: '5rem',
        dataIndex: 'actions',
        key: 'actions',
        render: (val: any, data: any, index: number) => {
            return (
                <div>
                    <Label onClick={this.handleEdit.bind(this, data, index)}>修改</Label>
                </div>
            )
        }
    }]

    public render(): JSX.Element {
        const { jurisdiction } = this.props
        const { classifyVisible, dialogName, jurisdVisible } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={<Button mold="primary" onClick={this.setClassifyVisble}>添加角色</Button>}
                />
                <Table
                    columns={this.columns}
                    dataSource={jurisdiction}
                    rowKey={(data: any) => data.id}
                />
                <Dialog
                    visible={classifyVisible}
                    title={dialogName}
                    async
                    onOk={this.handleUpdateOrCreate}
                    onClose={this.handleClassifyClose}
                    style={{ width: '30rem' }}
                >
                    <div style={{ padding: getUnit(20) }}>
                        <Form getItems={this.getItems} />
                    </div>
                </Dialog>
                <Dialog
                    visible={jurisdVisible}
                    title="角色修改"
                    async
                    onOk={this.handleUpdate}
                    onClose={this.handleClassifyClose}
                    theme={new DialogThemeData({
                        width: '30rem',
                        height: '70%'
                    })}
                >
                    <div style={{ padding: getUnit(20) }}>
                        <Form getItems={this.getJurisdItems} />
                    </div>
                </Dialog>
            </GlobalView>
        )
    }
    public componentDidMount() {
        this.getData()
    }

    private getData() {
        const { dispatch } = this.props
        dispatch({ type: GET_JURISDICTION })
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel>角色名</FromLabel>,
            props: {
                placeholder: '请输入角色名'
            },
            field: 'name'
        }, {
            component: 'Textarea',
            label: <FromLabel>描述</FromLabel>,
            props: {
                placeholder: '添加描述信息'
            },
            field: 'description'
        }]
        return items
    }

    private getJurisdItems = (fn: IFormFun) => {
        const { treeVal, routers } = this.state
        this.jurisdFn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'Input',
            label: <FromLabel>角色名</FromLabel>,
            props: {
                placeholder: '请输入角色名'
            },
            field: 'name'
        }, {
            component: 'Textarea',
            label: <FromLabel>描述</FromLabel>,
            props: {
                placeholder: '添加描述信息'
            },
            field: 'description'
        }, {
            component: 'Label',
            label: <FromLabel>路由设置</FromLabel>,
            render: () => (
                <div>
                    <Tree
                        checkable
                        onCheck={this.handleSelectRouter}
                        selectable={false}
                        checkedKeys={treeVal}
                    >
                        {
                            routers.map((i: any) => {
                                return (
                                    <TreeNode key={i.id} title={i.display_name} >
                                        {
                                            i.children && i.children.map((z: any) => {
                                                return (
                                                    <TreeNode key={z.id} title={z.display_name} >
                                                        {
                                                            z.children && z.children.map((v: any) => {
                                                                return (
                                                                    <TreeNode key={v.id} title={v.display_name} />
                                                                )
                                                            })
                                                        }
                                                    </TreeNode>
                                                )
                                            })
                                        }
                                    </TreeNode>
                                )
                            })
                        }
                    </Tree>
                </div>
            ),
            field: 'router'
        }]
        return items
    }

    private handleSelectRouter = (checkedKeys: any, info: any) => {
        const treeVal = [...checkedKeys]
        const parentVal = [...info.halfCheckedKeys]
        this.setState({
            treeVal,
            parentVal
        })
    }

    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                // const { treeVal, parentVal } = this.state
                const jurisd = this.fn.getFieldValue()
                let url = 'system-role/create'
                // if (jurisd.id) {
                //     url = 'jurisdiction/classifyUpdate'
                // }
                await http(url, {
                    ...jurisd,
                    // routers: union(treeVal, parentVal)
                })
                const { dispatch, jurisdiction } = this.props
                jurisdiction.unshift(jurisd)
                dispatch({ type: SET_JURISDICTION_DATA, data: [...jurisdiction] })
                message.success('添加角色成功')
                this.setState({
                    classifyVisible: false
                })
                this.fn.cleanFieldValue()
            }

        } catch (data) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleUpdate = async () => {
        try {
            if (this.jurisdFn) {
                const { treeVal, parentVal } = this.state
                const jurisd = this.jurisdFn.getFieldValue()
                await http(`system-role/${this.userId}`, {
                    ...jurisd,
                    permission_ids: union(treeVal, parentVal).join(',')
                }, { method: 'PUT' })
                message.success('修改角色成功')
                this.setState({
                    jurisdVisible: false
                })
                this.jurisdFn.cleanFieldValue()
            }

        } catch (data) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleEdit = async (data: IJurisdiction, index: number) => {
        try {
            this.userId = data.id
            const res = await http(`system-role/${data.id}`, {}, { method: 'GET' })
            const treeVal: any[] = []
            res.forEach((i: any) => {
                // if (i.is_selected) {
                //     treeVal.push(i.id)
                // }
                if (i.children) {
                    i.children.forEach((v: any) => {
                        if (v.is_selected) {
                            treeVal.push(v.id)
                        }
                    })
                }
            })
            this.setState({
                jurisdVisible: true,
                routers: res,
                treeVal
            }, () => {
                setTimeout(() => {
                    this.jurisdFn && this.jurisdFn.setFieldValue(data)
                }, 10)
            })
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleClassifyClose = () => {
        this.setState({
            classifyVisible: false,
            jurisdVisible: false,
            treeVal: []
        })
        this.fn && this.fn.cleanFieldValue()
        this.jurisdFn && this.jurisdFn.cleanFieldValue()
    }

    private setClassifyVisble = () => {
        this.setState({
            classifyVisible: true,
            dialogName: '添加角色'
        })
    }
}

export default connect(
    ({ jurisd, jurisdiction, jurisdictionOptions }: IInitState) => ({
        jurisd,
        jurisdictionOptions,
        jurisdiction
    })
)(Jurisdiction)