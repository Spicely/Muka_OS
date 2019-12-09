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
import { Color, NavBarThemeData, getRatioUnit } from 'src/components/lib/utils'
import { SET_JURISDICTION_DATA, GET_JURISDICTION } from 'src/store/action'
import { IJurisdictionOptions } from 'src/store/reducers/jurisdictionOptions'

const { TreeNode } = Tree

const FromLabel = styled.div`
     width: ${getRatioUnit(50)};
    text-align: justify;
    text-align-last: justify;
`

interface IProps extends DispatchProp {
    jurisdiction: any[]
    jurisdictionOptions: IJurisdictionOptions[]
    routers: IRouters[]
    jurisd: IJurisd[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
    treeVal: string[]
    parentVal: string[]
}

class Jurisdiction extends Component<IProps, IState> {
    public state: IState = {
        classifyVisible: false,
        dialogName: '',
        treeVal: [],
        parentVal: []
    }

    private fn: IFormFun | null = null

    private title = getTitle('/jurisdiction')

    private columns: ITableColumns[] = [{
        title: '权限名',
        dataIndex: 'name',
        key: 'name',
        width: '5rem'
    }, {
        title: '拥有权限',
        dataIndex: 'jurisdiction',
        key: 'jurisdiction',
        render: (data: { name: string, id: string }[]) => {
            return data.map((i) => {
                return <Tag key={i.id} style={{ marginBottom: getRatioUnit(8) }} color="#7edc55" >{i.name}</Tag>
            })
        }
    }, {
        title: '操作',
        width: '5rem',
        dataIndex: 'actions',
        key: 'actions',
        render: (val: any, data: any, index: number) => {
            const { jurisd } = this.props
            return (
                <div>
                    {find(jurisd, { type: 8 }) ? <Label onClick={this.handleEdit.bind(this, data, index)}>修改</Label> : null}
                </div>
            )
        }
    }]

    public render(): JSX.Element {
        const { jurisdiction, jurisd } = this.props
        const { classifyVisible, dialogName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={find(jurisd, { type: 7 }) ? <Button mold="primary" onClick={this.setClassifyVisble}>创建权限</Button> : null}
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
                    style={{ width: '36rem' }}
                >
                    <Form getItems={this.getItems} />
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
            label: <FromLabel>权限名</FromLabel>,
            props: {
                placeholder: '请输入权限名'
            },
            field: 'name'
        }, {
            component: 'CheckBox',
            label: <FromLabel>权限设置</FromLabel>,
            props: {
                options: jurisdictionOptions,
            },
            field: 'jurisdiction'
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
                            routers.map((i) => {
                                return (
                                    <TreeNode key={i.id} title={i.name} disabled={!i.status}>
                                        {
                                            i.children && i.children.map((z: any) => {
                                                return (
                                                    <TreeNode key={z.id} title={z.name} disabled={!i.status}>
                                                        {
                                                            z.children && z.children.map((v: IRouters) => {
                                                                return (
                                                                    <TreeNode key={v.id} title={v.name} disabled={!v.status} />
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
                const { treeVal, parentVal } = this.state
                const jurisd = this.fn.getFieldValue()
                let url = 'jurisdiction/classifyCreate'
                if (jurisd.id) {
                    url = 'jurisdiction/classifyUpdate'
                }
                const data = await http(url, {
                    ...jurisd,
                    routers: union(treeVal, parentVal)
                })
                const { dispatch } = this.props
                dispatch({ type: SET_JURISDICTION_DATA, data: data.data })
                message.success(data.msg)
                this.setState({
                    classifyVisible: false
                })
                this.fn.cleanFieldValue()
            }

        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private handleEdit = (data: IJurisdiction, index: number) => {
        const { routers } = this.props
        const options: string[] = data.jurisdiction.map((i: any) => i.id)
        const parentVal: string[] = []
        routers.map((i) => {
            if (i.children) {
                parentVal.push(i.id)
                i.children.map((v) => {
                    if (v.children) { parentVal.push(v.id) }
                })
            }
        })

        const treeVal = pullAll(data.routers, parentVal)
        this.setState({
            classifyVisible: true,
            treeVal,
            parentVal,
            dialogName: '修改权限'
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue({
                    id: data.id,
                    name: data.name,
                    jurisdiction: options
                })
            }, 10)
        })
    }

    private handleClassifyClose = () => {
        this.setState({
            classifyVisible: false,
            treeVal: []
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private setClassifyVisble = () => {
        this.setState({
            classifyVisible: true,
            dialogName: '创建权限'
        })
    }
}

export default connect(
    ({ routers, jurisd, jurisdiction, jurisdictionOptions }: IInitState) => ({
        routers,
        jurisd,
        jurisdictionOptions,
        jurisdiction
    })
)(Jurisdiction)