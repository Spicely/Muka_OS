import React, { Component } from 'react'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, LabelHeader, Tag, Form, Table, Label, Dialog, Tree } from 'components'
import http, { getTitle } from 'src/utils/axios'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IJurisdiction } from 'src/store/reducers/jurisdiction'
import { connect, DispatchProp } from 'react-redux'
import { IInitState } from 'src/store/state'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'
import { GlobalView } from 'src/utils/node'
import { Color, NavBarThemeData, getUnit, DialogThemeData } from 'src/components/lib/utils'
import { SET_JURISDICTION_DATA, GET_JURISDICTION, SET_SPINLOADING_DATA } from 'src/store/action'
import { IJurisdictionOptions } from 'src/store/reducers/jurisdictionOptions'
import { IRouter } from 'src/store/reducers/router'
import { message } from 'antd'
import { union } from 'lodash'
import routers from 'src/store/reducers/routers'

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
    routers: IRouter[]
}

interface IState {
    visible: boolean
    dialogName: string
    treeVal: string[]
    parentVal: string[]
}

const dialogTheme = new DialogThemeData({
    height: 'auto',
    minHeight: 400
})

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
        dataIndex: 'children',
        key: 'children',
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
                    bordered
                    childrenColumnName="child"
                    rowKey={(data: any) => data.id}
                />
                <Dialog
                    visible={visible}
                    title={dialogName}
                    theme={dialogTheme}
                    async
                    onOk={this.handleUpdateOrCreate}
                    onClose={this.handleClassifyClose}
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

    private async getData() {
        const { dispatch } = this.props
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const data = await http('/admin/authority/find')
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            dispatch({ type: SET_JURISDICTION_DATA, data: data })
        } catch (msg) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.success(msg)
        }
    }

    private getItems = (fn: IFormFun) => {
        const { jurisdictionOptions, routers } = this.props
        const { treeVal, parentVal } = this.state
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
                        expandedKeys={parentVal}
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
        this.setState({
            treeVal,
        })
    }

    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const { treeVal, parentVal } = this.state
                const jurisd = this.fn.getFieldValue()
                console.log(union(treeVal, parentVal))
                const data = await http(jurisd.id ? '/admin/authority/update' : '/admin/authority/create', {
                    ...jurisd,
                    type: 1,
                    children: union(treeVal, parentVal).map((i) => Number(i))
                }, {
                    method: jurisd.id ? 'PUT' : 'POST'
                })
                // const { dispatch } = this.props
                // dispatch({ type: SET_JURISDICTION_DATA, data: data.data })
                // message.success(data.msg)
                // this.setState({
                //     visible: false
                // })
                // this.fn.cleanFieldValue()
            }

        } catch (msg) {
            message.error(msg)
        }
    }

    private handleEdit = async (data: any, index: number) => {
        const { routers } = this.props
        const treeVal: string[] = []
        const parentVal: string[] = []
        routers.forEach((i: any) => {
            parentVal.push(i.id.toString())
            if (i.children) {
                i.children.forEach((v: any) => {
                    if (data.children.find((z: any) => z.id == v.id) != -1) {
                        treeVal.push(v.id.toString());
                    }
                    if (v.children) {
                        parentVal.push(v.id)
                        v.children.forEach((e: any) => {
                            if (data.routers.find((z: any) => z.id == e.id) != -1) {
                                treeVal.push(e.id.toString())
                            }
                        })
                    }
                })
            } else {
                if (data.children?.find((z: any) => z.id == i.id) != -1) {
                    treeVal.push(i.id.toString())
                }
            }
        })
        this.setState({
            visible: true,
            treeVal,
            parentVal
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    ...data,
                    // jurisd: data.jurisd.map(i => i.id)
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