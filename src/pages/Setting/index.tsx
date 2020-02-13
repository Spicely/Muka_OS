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
    width: ${getUnit(150)};
`

const tabBarTheme = new TabBarThemeData({
    height: '100%'
})

export default class Setting extends Component<IProps, IState> {

    private fn?: IFormFun

    private payFn?: IFormFun

    private title = getTitle('/system')

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
                    title={<LabelHeader title={this.title} line="vertical" />}
                />
                <TabBar
                    theme={tabBarTheme}
                >
                    <TabBar.Item title="基础设置">
                        <Form getItems={this.getItems} style={{ width: getUnit(560) }} />
                    </TabBar.Item>
                    <TabBar.Item title="支付设置">
                        <Form getItems={this.payItems} style={{ width: getUnit(560) }} />
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
            const data = await http('config/get')
            this.fn && this.fn.setFieldValue(data.data)
            this.payFn && this.payFn.setFieldValue(data.data)
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'Input',
            label: <FormLabel>高德地图秘钥</FormLabel>,
            props: {
                placeholder: '请输入高德地图秘钥'
            },
            field: 'amapKey'
        }, {
            component: 'Input',
            label: <FormLabel>阿里云oss AccessKeyID</FormLabel>,
            props: {
                placeholder: '请输入阿里云oss AccessKeyID'
            },
            field: 'ossAccessKeyID'
        }, {
            component: 'Input',
            label: <FormLabel>阿里云oss AccessKeySecret</FormLabel>,
            props: {
                placeholder: '请输入阿里云oss AccessKeySecret'
            },
            field: 'ossAccessKeySecret'
        }, {
            component: 'Input',
            label: <FormLabel>阿里云oss Bucket</FormLabel>,
            props: {
                placeholder: '请输入阿里云oss Bucket'
            },
            field: 'ossBucket'
        }, {
            component: 'Input',
            label: <FormLabel>阿里云oss 外网地址</FormLabel>,
            props: {
                placeholder: '请输入阿里云oss外网地址'
            },
            field: 'ossServer'
        }, {
            component: 'Input',
            label: <FormLabel>阿里云oss 内网地址</FormLabel>,
            props: {
                placeholder: '请输入阿里云oss外网地址'
            },
            field: 'ossServerInternal'
        }, {
            component: 'Input',
            label: <FormLabel>阿里云oss 自定义地址</FormLabel>,
            props: {
                placeholder: '请输入阿里云oss自定义地址'
            },
            field: 'ossDomaim'
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

    private payItems = (fn: IFormFun) => {
        this.payFn = fn
        const items: IFormItem[] = [{
            component: 'RadioGroup',
            label: <FormLabel>支付宝支付</FormLabel>,
            props: {
                options: [{
                    label: '开',
                    value: true
                }, {
                    label: '关',
                    value: false
                }],
                value: true
            },
            field: 'alipayStatus'
        }, {
            component: 'RadioGroup',
            label: <FormLabel>微信支付</FormLabel>,
            props: {
                options: [{
                    label: '开',
                    value: true
                }, {
                    label: '关',
                    value: false
                }],
                value: true
            },
            field: 'wxStatus'
        }, {
            component: 'Input',
            label: <FormLabel>支付宝APPID</FormLabel>,
            props: {
                placeholder: '请输入支付宝APPID'
            },
            field: 'alipayAppId'
        }, {
            component: 'Input',
            label: <FormLabel>微信APPID</FormLabel>,
            props: {
                placeholder: '微信APPID'
            },
            field: 'wxAppId'
        }, {
            component: 'Button',
            visible: getJurisd(9) || false,
            props: {
                async: true,
                children: '更新',
                onClick: this.handlePayOk,
                mold: 'primary',
            }
        }]
        return items
    }

    private handleOk = async () => {
        try {
            if (this.fn) {
                const value = this.fn.getFieldValue()
                if (!value.name) {
                    message.error('请输入支付宝名称')
                    return
                }
                if (!value.pid) {
                    message.error('请输入应用id')
                    return
                }
                if (!value.private_key) {
                    message.error('请输入商户私钥')
                    return
                }
                if (!value.public_key) {
                    message.error('请输入支付宝公钥')
                    return
                }
                await http('config/update', value)
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
                await http('config/update', value)
                message.success('更新成功')
            }
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

}