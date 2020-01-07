import React, { Component } from 'react'
import { Tooltip, message } from 'antd'
import styled, { css } from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, NavBar, Icon, Button, Dialog, Form, Table } from 'components'
import http, { getTitle } from 'src/utils/axios'
import echarts, { ECharts } from 'echarts'
import { connect } from 'react-redux'
import { IRouter } from 'src/store/reducers/router'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IIcons } from 'src/store/reducers/icons'
import { IInitState } from 'src/store/state'
import { NavBarThemeData, Color, getUnit, DialogThemeData } from 'src/components/lib/utils'
import { GlobalView } from 'src/utils/node'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'

interface IProps {
    lastIds: string[]
    router: IRouter[]
    jurisd: IJurisd[]
    icons: IIcons[]
}

interface IState {
    visible: boolean
    data: any[]
}

const FormLabel = styled.div`
    width: ${getUnit(90)};
`
const dialogTheme = new DialogThemeData({
    width: 800,
    height: '80%'
})

class Index extends Component<IProps, IState> {

    private fn?: IFormFun

    private title = getTitle('/merchant')

    public state: IState = {
        visible: false,
        data: []
    }

    private columns: ITableColumns[] = [{
        title: '真实姓名',
        key: 'true_name',
        dataIndex: 'true_name'
    }]

    public render(): JSX.Element {
        const { visible, data } = this.state
        return (
            <GlobalView notColor>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={
                        <Button mold="primary" onClick={this.handleAddShop}>添加商户</Button>
                    }
                />
                <Table
                    columns={this.columns}
                    dataSource={data}
                />
                <Dialog
                    visible={visible}
                    title="添加商户"
                    onClose={this.handleVisibleClose}
                    theme={dialogTheme}
                    async
                    onOk={this.handleOk}
                >
                    <div className="flex_center">
                        <div style={{ padding: getUnit(10), width: getUnit(600) }}>
                            <Form getItems={this.getItems} />
                        </div>
                    </div>
                </Dialog>
            </GlobalView>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private getData = async () => {
        try {
            const data = await http('merchant-manage', {}, { method: 'GET' })
            this.setState({
                data
            })
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleVisibleClose = () => {
        this.setState({
            visible: false
        })
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            props: {
                value: '0'
            },
            field: 'pid'
        }, {
            component: 'LUpload',
            label: <FormLabel>营业执照</FormLabel>,
            props: {
                maxLength: 1,
                baseUrl: 'http://192.168.1.6/common/upload',
                method: 'POST',
                name: 'file'
            },
            field: 'business'
        }, {
            component: 'Input',
            label: <FormLabel>使用者密码</FormLabel>,
            props: {
                type: 'password',
                placeholder: '请输入使用者密码'
            },
            field: 'password'
        }, {
            component: 'Input',
            label: <FormLabel>真实姓名</FormLabel>,
            props: {
                placeholder: '请输入真实姓名'
            },
            field: 'true_name'
        }, {
            component: 'Input',
            label: <FormLabel>使用者手机</FormLabel>,
            props: {
                placeholder: '请输入使用者手机',
                type: 'number'
            },
            field: 'mobile'
        }, {
            component: 'Input',
            label: <FormLabel>身份证</FormLabel>,
            props: {
                placeholder: '请输入身份证',
            },
            field: 'id_card'
        }, {
            component: 'Input',
            label: <FormLabel>法人名称</FormLabel>,
            props: {
                placeholder: '请输入法人名称',
            },
            field: 'legal_person_name'
        }, {
            component: 'Input',
            label: <FormLabel>支付宝账号</FormLabel>,
            props: {
                placeholder: '请输入支付宝账号',
            },
            field: 'alipay_account'
        }, {
            component: 'Input',
            label: <FormLabel>保证金</FormLabel>,
            props: {
                placeholder: '请输入保证金',
                type: 'number'
            },
            field: 'bond'
        }, {
            component: 'Input',
            label: <FormLabel>利息</FormLabel>,
            props: {
                placeholder: '请输入利息',
                type: 'number'
            },
            field: 'interest'
        }, {
            component: 'Input',
            label: <FormLabel>随机数</FormLabel>,
            props: {
                placeholder: '请输入随机数',
                type: 'number'
            },
            field: 'random_num'
        }]
        return items
    }

    private handleOk = async () => {
        try {
            if (this.fn) {
                const value = this.fn.getFieldValue()
                if (!value.business) {
                    message.error('请上传营业执照')
                    return
                }
                if (!value.password) {
                    message.error('请输入使用者密码')
                    return
                }
                if (!value.true_name) {
                    message.error('请输入真实姓名')
                    return
                }
                if (!value.mobile) {
                    message.error('请输入使用者手机')
                    return
                }
                if (!value.id_card) {
                    message.error('请输入身份证')
                    return
                }
                if (!value.legal_person_name) {
                    message.error('请输入法人名称')
                    return
                }
                if (!value.alipay_account) {
                    message.error('请输入支付宝账号')
                    return
                }
                if (!value.bond) {
                    message.error('请输入保证金')
                    return
                }
                if (!value.interest) {
                    message.error('请输入利息')
                    return
                }
                if (!value.random_num) {
                    message.error('请输入随机数')
                    return
                }
                await http('merchant-manage/create', { ...value })
                message.success('添加商户成功')
                this.setState({
                    visible: false
                })
            }
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleAddShop = () => {
        this.setState({
            visible: true
        })
    }

}

export default connect(
    ({ routers, router, jurisd, icons }: IInitState) => ({
        routers,
        router,
        jurisd,
        icons
    })
)(Index)