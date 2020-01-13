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
import { Color, NavBarThemeData, getUnit } from 'src/components/lib/utils'
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
    routers: IRouters[]
}

interface IState {
    visible: boolean
    dialogName: string
    treeVal: string[]
    parentVal: string[]
}

class Jurisdiction extends Component<IProps, IState> {
    public state: IState = {
        visible: false,
        dialogName: '',
        treeVal: [],
        parentVal: []
    }

    private fn: IFormFun | null = null

    private userId = ''

    private title = getTitle('/system/jurisd')

    private columns: ITableColumns<any>[] = [{
        title: '权限名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '拥有权限',
        dataIndex: 'jurisd',
        key: 'jurisd',
        render: (data: { name: string, id: string }[]) => {
            return data.map((i) => {
                return <Tag key={i.id} style={{ marginBottom: getUnit(8) }} color="#7edc55" >{i.name}</Tag>
            })
        }
    }, {
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
        const { visible, dialogName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={<Button mold="primary" onClick={this.setClassifyVisble}>添加权限</Button>}
                />
                <Table
                    columns={this.columns}
                    dataSource={jurisdiction}
                    rowKey={(data: any) => data.id}
                />
                <Dialog
                    visible={visible}
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
        const { jurisdictionOptions, routers } = this.props
        const { treeVal } = this.state
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
            component: 'CheckBox',
            label: <FromLabel>权限</FromLabel>,
            props: {
                options: jurisdictionOptions
            },
            field: 'jurisd'
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
                                    <TreeNode key={i.id} title={i.name} >
                                        {
                                            i.children && i.children.map((z: any) => {
                                                return (
                                                    <TreeNode key={z.id} title={z.name} >
                                                        {
                                                            z.children && z.children.map((v: any) => {
                                                                return (
                                                                    <TreeNode key={v.id} title={v.name} />
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
            field: 'routers'
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
                const { treeVal, parentVal } = this.state
                const jurisd = this.fn.getFieldValue()
                let url = 'jurisdClassify/create'
                if (jurisd.id) {
                    url = 'jurisdClassify/update'
                }
                const data = await http(url, {
                    ...jurisd,
                    routers: union(treeVal, parentVal)
                })
                const { dispatch } = this.props
                dispatch({ type: SET_JURISDICTION_DATA, data: data.data })
                message.success(data.msg)
                this.setState({
                    visible: false
                })
                this.fn.cleanFieldValue()
            }

        } catch (data) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleEdit = async (data: IJurisdiction, index: number) => {
        const { routers } = this.props
        const treeVal: string[] = []
        routers.forEach((i: any) => {
            if (i.children) {
                i.children.forEach((v: any) => {
                    if (data.routers.includes(v.id)) {
                        treeVal.push(v.id)
                    }
                    if (v.children) { treeVal.push(v.id) }
                })
            }
        })
        this.setState({
            visible: true,
            treeVal
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    ...data,
                    jurisd: data.jurisd.map(i => i.id)
                })
            }, 10)
        })
    }

    private handleClassifyClose = () => {
        this.setState({
            visible: false,
            treeVal: []
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private setClassifyVisble = () => {
        this.setState({
            visible: true,
            dialogName: '添加角色'
        })
    }
}

export default connect(
    ({ jurisd, jurisdiction, jurisdictionOptions, routers }: IInitState) => ({
        jurisd,
        jurisdictionOptions,
        jurisdiction,
        routers,
    })
)(Jurisdiction)