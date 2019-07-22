import { Component, MouseEvent, Fragment } from 'react'
import { Collapse, PageHeader, Tree, notification, Dropdown, Menu } from 'antd'
import { setCookie } from 'nookies'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IInitState } from 'store/state'
import PageHead from 'layouts/PageHead'
import PageLayout from 'layouts/PageLayout'
import http, { IinitProps, IRresItems, IRresItem } from 'utils/axios'
import { SET_ROUTER, IRouter } from 'store/action/router'
import { SET_ICONS } from 'store/action/icons'
import { Label, LabelHeader, Dialog, ILFormFun, ILFormItem, LForm, Icon } from 'components'
import { IJurisdiction, IDispatchToProps, SET_JURISD, actions } from 'store/action/jurisdiction'
import { SET_ALLROUTER } from 'store/action/allRouter'


const { Panel } = Collapse
const { TreeNode } = Tree

interface IState {
    visible: boolean
    edit: boolean
}

interface IProps extends IDispatchToProps {
    router: IRouter[]
    allRouter: IRouter[]
    jurisdiction: IJurisdiction[]
}


class SettingsJurisdiction extends Component<IProps, IState> {
    public static async getInitialProps(ctx: IinitProps) {
        setCookie(ctx, 'hist', ctx.pathname, {
            maxAge: 60 * 2,
            path: '/',
        })
        const router: IRresItem = await http('user/info', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        if (router.status === 203 && ctx.res) {
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res && ctx.res.end()
            return {}
        }
        ctx.store.dispatch({ type: SET_ROUTER, data: router.data.router })
        const allRouter: IRresItems = await http('router/find', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        ctx.store.dispatch({ type: SET_ALLROUTER, data: allRouter.data })
        const icons: IRresItems = await http('icons/find', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        ctx.store.dispatch({ type: SET_ICONS, data: icons.data })
        const jurisdiction: IRresItems = await http('jurisdiction/find', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        ctx.store.dispatch({ type: SET_JURISD, data: jurisdiction.data })
        return {}
    }

    public state = {
        visible: false,
        edit: false
    }

    private editIndex: number = 0

    private exFun?: ILFormFun

    private selectArr: string[] = []

    private selectInitArr: string[] = []

    private getItems = (exFun: ILFormFun): ILFormItem[] => {
        this.exFun = exFun
        const item: ILFormItem[] = [{
            field: 'id',
            component: 'NULL'
        }, {
            component: 'Input',
            props: {
                placeholder: '菜单名(必填)',
                label: '权限名:'
            },
            field: 'name'
        }]
        return item
    }
    public render(): JSX.Element {
        const { jurisdiction, allRouter } = this.props
        console.log(this.props)
        const { visible, edit } = this.state
        const routerParent: string[] = allRouter.map(i => i.id)
        const navBar = (
            <PageHeader
                title={<LabelHeader title="权限设置" line="vertical" />}
                backIcon={false}
                extra={
                    <div className="flex_justify" style={{ height: '35px' }}>
                        <Label onClick={this.handleShowDialog}>添加权限</Label>
                    </div>
                }
            />
        )
        const getExtra = (index: number) => {
            const menu = (
                <Menu onClick={this.settingSelect.bind(this, index)}>
                    <Menu.Item key="name">设置权限名</Menu.Item>
                    <Menu.Item key="router">设置路由</Menu.Item>
                </Menu>
            )
            return (
                <Fragment>
                    {edit && index === this.editIndex ? <Label onClick={this.saveSelect}>完成</Label> : null}
                    <Dropdown overlay={menu}>
                        <Icon icon="md-settings" style={{ position: 'relative', top: '0.2rem' }} fontSize="0.8rem" onClick={this.handleSetting} />
                    </Dropdown>
                </Fragment>

            )
        }
        return (
            <PageHead title="权限管理">
                <PageLayout
                    defaultSelected="/settings/jurisdiction"
                    navBar={navBar}
                >
                    <Collapse
                        expandIconPosition="right"
                    >
                        {
                            jurisdiction.map((i, index: number) => {
                                const defaultCheckedKeys: string[] = []
                                i.router.map(i => {
                                    if (!routerParent.includes(i.id)) {
                                        defaultCheckedKeys.push(i.id)
                                    }
                                })
                                return (
                                    <Panel header={i.name} key={i.id} extra={getExtra(index)}>
                                        <Tree
                                            checkable={true}
                                            showLine
                                            defaultExpandAll={true}
                                            defaultCheckedKeys={defaultCheckedKeys}
                                            onCheck={this.handleSelect}
                                        >
                                            {
                                                allRouter.map((i) => {
                                                    return (
                                                        <TreeNode title={i.label} key={i.id} disabled={!(edit && index === this.editIndex)}>
                                                            {
                                                                i.children && i.children.map((i) => <TreeNode title={i.label} key={i.id} disabled={!(edit && index === this.editIndex)} />)
                                                            }
                                                        </TreeNode>

                                                    )
                                                })
                                            }
                                        </Tree>
                                    </Panel>
                                )
                            })
                        }

                    </Collapse>
                    <Dialog
                        visible={visible}
                        onCancel={this.handlehideDialog}
                        onOk={this.handleAddJurisd}
                    >
                        <LForm getItems={this.getItems} />
                    </Dialog>
                </PageLayout>
            </PageHead>
        )
    }

    private handlehideDialog = () => {
        this.setState({
            visible: false
        })
        this.exFun && this.exFun.cleanFieldValue()
    }

    private handleAddJurisd = async () => {
        if (this.exFun) {
            const data = this.exFun.getFieldValue()
            if (!data.name) {
                notification.error({
                    message: '请输入权限名'
                })
                return
            }
            http('jurisdiction/create', data).then((data: any) => {
                const { setJurisd } = this.props
                notification.success({
                    message: data.msg
                })
                setJurisd(data.data)
                this.exFun && this.exFun.cleanFieldValue()
                this.setState({
                    visible: false
                })
            })
        } else {
            notification.error({
                message: '初始化出错'
            })
        }
    }

    private handleSetting = (event: MouseEvent<HTMLOrSVGElement>) => {
        event.stopPropagation()
    }

    private saveSelect = async (e: MouseEvent<HTMLSpanElement>) => {
        const status = this.selectArr.every((i, index) => i === this.selectInitArr[index])
        e.stopPropagation()
        if (status) {
            this.setState({
                edit: false
            })
        } else {
            const { jurisdiction, setJurisd } = this.props
            const data: IRresItems<IJurisdiction> = await http('jurisdiction/update', {
                id: jurisdiction[this.editIndex].id,
                router: this.selectArr
            })
            this.setState({
                edit: false
            })
            setJurisd(data.data)
        }

    }

    private settingSelect(index: number, { key, domEvent }: any) {
        const { jurisdiction } = this.props
        this.editIndex = index
        domEvent.stopPropagation()
        if (key === 'name') {
            this.setState({
                visible: true
            }, () => {
                setTimeout(() => {
                    this.exFun && this.exFun.setFieldValue({ name: jurisdiction[index].name, id: jurisdiction[index].id })
                }, 10)
            })

        } else if (key === 'router') {
            const arr = jurisdiction[index].router.map((i) => i.id)
            this.selectInitArr = arr
            this.selectArr = arr
            this.setState({
                edit: true
            })
        }
    }

    private handleShowDialog = () => {
        this.setState({
            visible: true
        })
    }

    private handleSelect = (selectedKeys: any, e: any) => {
        this.selectArr = [...selectedKeys, ...e.halfCheckedKeys]
    }
}
export default connect(
    (state: IInitState) => ({
        router: state.router,
        jurisdiction: state.jurisdiction,
        allRouter: state.allRouter
    }),
    (dispatch: any) => bindActionCreators(actions, dispatch)
)(SettingsJurisdiction)