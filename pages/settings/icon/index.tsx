import { Component, ChangeEvent } from 'react'
import { Tooltip, Radio, message } from 'antd'
import { connect } from 'react-redux'
import { setCookie } from 'nookies'
import PageHead from 'layouts/PageHead'
import PageLayout from 'layouts/PageLayout'
import { NavBar, Label, Table, ITableColumns, IValue, Dialog, LForm, ILFormItem, ILFormFun, Icon, Image, BoxLine } from 'components'
import { RadioChangeEvent } from 'antd/lib/radio'
import http, { baseUrl, imgUrl, IRresItems, IinitProps, IRresItem } from 'utils/axios'
import CopyToClipboard from 'react-copy-to-clipboard'
import { IRouterProps, SET_ROUTER } from 'store/action/router'
import { SET_ICONS, mapStateToProps, mapDispatchToProps, IIcons } from 'store/action/icons'
import { icons_items } from './index.less'


interface IProps extends IRouterProps {
    icons: IIcons[]
    setIcons: (data: IIcons[]) => void
}
interface IState {
    visible: boolean
    tabVal: string
}

class SettingsIcon extends Component<IProps, IState> {

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
        const icons: IRresItems = await http('icons/find', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        ctx.store.dispatch({ type: SET_ICONS, data: icons.data })
        return {}
    }
    public state: IState = {
        visible: false,
        tabVal: 'items'
    }

    private index?: number

    private columns: ITableColumns[] = [{
        title: '图标', dataIndex: 'icon', key: 'icon',
        render: (val: string, data: IValue) => {
            if (data.type === 'icon') {
                return <Icon icon={data.name} key={data.id.toString()} />
            } else {
                return <Image src={imgUrl + data.name} style={{ height: '1rem' }} key={data.id.toString()} />
            }
        }
    }, {
        title: '类型', dataIndex: 'type', key: 'type'
    }, {
        title: '名称/地址', dataIndex: 'name', key: 'name',
        render: (val: string) => (
            <CopyToClipboard text={val} key={val} onCopy={this.showMsgCopy}>
                <Label>{val}</Label>
            </CopyToClipboard>
        )
    }, {
        title: '操作',
        key: 'actions',
        render: (val: any, data: IValue, index: number) => {
            return (
                <div className="flex_center">
                    <div className="flex">
                        <Label onClick={this.handleUpdate.bind(this, data, index)}>更新</Label>
                        <Label color="red" onClick={this.handleDestroy.bind(this, data, index)}>删除</Label>
                    </div>
                </div>
            )
        }
    }]

    private exFun?: ILFormFun

    private showMsgCopy = () => {
        message.success('已复制到剪切板')
    }

    private getItems = (exFun: ILFormFun): ILFormItem[] => {
        this.exFun = exFun
        const item: ILFormItem[] = [{
            field: 'id',
            component: 'NULL'
        }, {
            component: 'RadioGroup',
            props: {
                label: '类型选择:',
                value: 'icon',
                options: [
                    { label: 'Icon', value: 'icon' },
                    { label: 'Image', value: 'image' },
                ],
                onChange: (e: ChangeEvent<HTMLButtonElement>) => {
                    this.setFieldVisible({ type: e.target.value })
                }
            },
            field: 'type'
        }, {
            component: 'LUpload',
            props: {
                label: '图片上传：',
                action: '/os/file/upload',
                baseUrl,
                data: {
                    pathName: 'os/icons'
                },
                maxLength: 1,
            },
            render: false,
            field: 'url'
        }, {
            component: 'Input',
            props: {
                placeholder: '请输入iconName'
            },
            field: 'name'
        }]
        return item
    }

    public render(): JSX.Element {
        const { icons } = this.props
        const { visible, tabVal } = this.state
        return (
            <PageHead title="图标管理">
                <PageLayout defaultSelected="/settings/icon">
                    <NavBar left="图标管理" right={
                        <div className="flex">
                            <Radio.Group value={tabVal} onChange={this.setTabField}>
                                <Radio.Button value="items" >
                                    <Icon icon="ios-keypad" style={{ top: '0.25rem', position: 'relative', right: '0.2rem' }} />
                                    列表
                                </Radio.Button>
                                <Radio.Button value="table">
                                    表单
                                    <Icon icon="ios-menu" style={{ top: '0.3rem', position: 'relative', left: '0.2rem' }} />
                                </Radio.Button>
                            </Radio.Group>
                            <Label onClick={this.handleShowDialog}>添加图标</Label>
                        </div>
                    } />
                    {
                        tabVal === 'items' ? (
                            <BoxLine>
                                {icons.map((data) => {
                                    if (data.type === 'icon') {
                                        const name: any = data.name
                                        return (
                                            <CopyToClipboard text={data.name} key={data.id.toString()} onCopy={this.showMsgCopy}>
                                                <Tooltip placement="left" title={data.name} >
                                                    <div className={`flex_center ${icons_items}`} >
                                                        <Icon icon={name} />
                                                    </div>
                                                </Tooltip>
                                            </CopyToClipboard>
                                        )
                                    } else {
                                        return <Image src={imgUrl + data.name} style={{ height: '1rem' }} key={data.id.toString()} />
                                    }
                                })}
                            </BoxLine>
                        ) : (
                                <Table
                                    key={icons.length.toString()}
                                    columns={this.columns}
                                    dataSource={icons}
                                    bordered
                                    rowKey={record => record.id}
                                />
                            )
                    }

                    <Dialog
                        visible={visible}
                        onCancel={this.handlehideDialog}
                        onOk={this.handleAddIcons}
                    >
                        <LForm getItems={this.getItems} />
                    </Dialog>
                </PageLayout>
            </PageHead>
        )
    }

    private setTabField = (e: RadioChangeEvent) => {
        this.setState({
            tabVal: e.target.value
        })
    }

    private handleShowDialog = () => {
        this.setState({
            visible: true
        })
    }

    private handlehideDialog = () => {
        this.setState({
            visible: false
        })
        this.exFun && this.exFun.cleanFieldValue()
        this.exFun && this.exFun.setFieldValue({ 'type': 'icon' })
        this.setFieldVisible({ type: 'icon' })
    }

    private handleAddIcons = () => {
        if (this.exFun) {
            const data = this.exFun.getFieldValue()
            this.exFun.cleanFieldValue()
            if (data.type === 'image') {
                data.name = data.url
            }
            if (!data.name) {
                message.error('请设置Icon')
                return
            }
            const id: string = data.id
            http('icons/create', {
                id,
                type: data.type,
                name: data.name
            }).then((data: any) => {
                const { icons, setIcons } = this.props
                if (id && this.index !== undefined) {
                    icons[this.index] = data.data
                } else {
                    icons.unshift(data.data)
                }
                this.exFun && this.exFun.cleanFieldValue()
                this.exFun && this.exFun.setFieldValue({ 'type': 'icon' })
                setIcons(icons)
                this.setState({
                    visible: false
                })
            })
        } else {
            message.error('初始化出错')
        }
    }


    private handleUpdate = (data: IValue, index: number) => {
        this.index = index
        this.setState({
            visible: true
        }, () => {
            setTimeout(() => {
                this.setFieldVisible(data)
                this.exFun && this.exFun.setFieldValue({
                    type: data.type,
                    name: data.name,
                    url: data.name,
                    id: data.id
                })
            }, 10)
        })
    }

    private setFieldVisible = (data: IValue) => {
        if (this.exFun) {
            if (data.type === 'icon') {
                this.exFun.showFieldElement(['name'])
                this.exFun.hideFieldElement(['url'])
            } else {
                this.exFun.showFieldElement(['url'])
                this.exFun.hideFieldElement(['name'])
            }
        } else {
            message.error('初始化出错')
        }
    }

    private handleDestroy = (data: IValue, index: number) => {
        http('icons/delete', {
            id: data.id
        }).then((val: any) => {
            const { icons, setIcons } = this.props
            message.success(val.msg)
            icons.splice(index, 1)
            this.updateRouterIcon(data.id)
            setIcons([...icons])
        })
    }

    private updateRouterIcon(id: string) {
        const { router, setRouter } = this.props
        const newRouter = router.map((i) => {
            if (i.icon && i.icon.id === id) {
                i.icon = undefined
            }
            if (i.children) {
                i.children = i.children.map((i) => {
                    if (i.icon && i.icon.id === id) {
                        i.icon = undefined
                    }
                    return i
                })
            }
            return i
        })
        setRouter(newRouter)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsIcon)