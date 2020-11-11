import React, { Component } from 'react'
import { message } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, Button, Form, TabBar } from 'components'
import http, { getTitle, getJurisd } from 'src/utils/axios'
import { NavBarThemeData, Color, getUnit, TabBarThemeData, ButtonThemeData } from 'src/components/lib/utils'
import { GlobalView } from 'src/utils/node'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { IConfig } from 'src/store/reducers'

interface IProps {
    config: IConfig
}

interface IState {
    data: {
        name: string
        is_open: number
        pid: string
        private_key: string
        public_key: string
    }
}

const FormLabel = styled.div`
    width: ${getUnit(60)};
`

const tabBarTheme = new TabBarThemeData({
    height: '100%'
})

export default class Setting extends Component<IProps, IState> {

    private fn?: IFormFun

    private payFn?: IFormFun

    public state: IState = {
        data: {
            name: '',
            is_open: 1,
            pid: '',
            private_key: '',
            public_key: '',
        }
    }

    public render(): JSX.Element {
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title="系统参数" line="vertical" />}
                />
                <TabBar
                    theme={tabBarTheme}
                >
                    <TabBar.Item title="基础设置">
                        <Form getItems={this.getItems} style={{ width: getUnit(560) }} />
                    </TabBar.Item>
                </TabBar>

            </GlobalView>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private getData = async () => {
        try {
            const data = await http('/admin/config/get')
            this.fn && this.fn.setFieldValue(data)
            this.payFn && this.payFn.setFieldValue(data)
        } catch (msg) {
            message.error(msg)
        }
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'Input',
            label: <FormLabel>短信账号</FormLabel>,
            props: {
                placeholder: '请输入短信账号'
            },
            field: 'smsAccount'
        }, {
            component: 'Input',
            label: <FormLabel>短信密码</FormLabel>,
            props: {
                placeholder: '请输入短信密码'
            },
            field: 'smsKey'
        }, {
            component: 'Input',
            label: <FormLabel>企业ID</FormLabel>,
            props: {
                placeholder: '请输入企业ID'
            },
            field: 'smsId'
        }, {
            component: 'Editor',
            label: <FormLabel>系统公告</FormLabel>,
            props: {
                placeholder: '请输入系统公告'
            },
            field: 'notice'
        }, {
            component: 'Button',
            visible: getJurisd(9) || false,
            props: {
                async: true,
                children: '更新',
                onClick: this.handleOk,
                mold: 'primary',
            },
        }]
        return items
    }

    private handleOk = async () => {
        try {
            if (this.fn) {
                const value = this.fn.getFieldValue()
                await http('/admin/config/update', value)
                message.success('更新成功')
            }
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handlePayOk = async () => {
        try {
            if (this.payFn) {
                const value = this.payFn.getFieldValue()
                await http('/admin/config/update', value)
                message.success('更新成功')
            }
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

}