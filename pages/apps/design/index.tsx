import { Component, Fragment } from 'react'
import { Button, Dialog, Empty, Label, LabelHeader, Icon, Image, Input, NavBar, TabBar, Select} from 'components'
import Link from 'next/link'
import PageHead from 'layouts/PageHead'
import PageLayout from 'layouts/PageLayout'
import http, { IinitProps, IRresItems, initErrorToView } from 'utils/axios'
import { nav_bar } from 'layouts/PageLayout/index.less'
import { app_view, app_view_tab_item, app_view_diy, app_view_dialog } from '../index.less'

const { Search } = Input

interface IState {
    visible: boolean
}

interface ITabListsItem {
    name: string
    id: string
}

interface IProps {
    tabLists: ITabListsItem[]
}

export default class Design extends Component<IProps, IState> {

    public static async getInitialProps(ctx: IinitProps) {
        const tabLists: IRresItems = await http('apps/findPageClassify', {}, {
            headers: { cookie: ctx.req && ctx.req.headers.cookie },
        })
        if (tabLists.status === 203 && ctx.res) {
            return initErrorToView(ctx)
        }
        return {
            tabLists: tabLists.data
        }
    }

    public state: IState = {
        visible: false
    }

    public render(): JSX.Element {
        const { visible } = this.state
        const { tabLists } = this.props
        return (
            <PageHead title="小程序-页面设计">
                <PageLayout
                    defaultSelected="/apps"
                    defaultExtendSelected="/apps/design"
                >
                    <NavBar
                        className={nav_bar}
                        divider={false}
                        left={
                            <LabelHeader title={<span>当前位置: <Label>页面设计</Label></span>} line="vertical" />
                        }
                    />
                    <div className={app_view}>
                        <div className="flex">
                            <div className="flex_1">
                                <Button mold="primary" style={{ width: '90px' }} onClick={this.handleSetDialog.bind(this, true)}>
                                    <Icon icon="md-add" color="#fff" fontSize="14px" style={{ position: 'relative', bottom: '2px', verticalAlign: 'middle' }} />立即创建
                                </Button>
                            </div>
                            <Select isSearchable options={tabLists.map((item, index) => {
                                return {
                                    value: index,
                                    label: item.name
                                }
                            })} /><Search enterButton="搜索" />
                        </div>
                        <TabBar tabItemClassName={app_view_tab_item} tabBarClassName="mk_divider">
                            {
                                [{
                                    name: '全部页面',
                                    id: ''
                                }, ...tabLists].map((item) => {
                                    return (
                                        <TabBar.Item label={item.name} key={item.id}>
                                            <Empty />
                                        </TabBar.Item>
                                    )
                                })
                            }
                        </TabBar>
                        <Dialog
                            title="选择类型"
                            className={app_view_dialog}
                            visible={visible}
                            onClose={this.handleSetDialog}
                            footer={<Fragment />}
                        >
                            <div style={{ padding: '20px 0' }}>
                                {
                                    tabLists.map((i) => {
                                        return (
                                            <div className={app_view_diy} key={i.id}>
                                                <p>{i.name}</p>
                                                <Link href={`/apps/design/editor?classifyId=${i.id}`}>
                                                    <Button>立即创建</Button>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                                <div className={app_view_diy} />
                            </div>
                        </Dialog>
                    </div>
                </PageLayout>
            </PageHead>
        )
    }

    private handleSetDialog = (value: boolean) => {
        this.setState({
            visible: value
        })
    }
}