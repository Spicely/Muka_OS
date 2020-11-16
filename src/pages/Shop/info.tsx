import React, { Component } from 'react'
import { message } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, Button, Form, TabBar } from 'components'
import http from 'src/utils/axios'
import { NavBarThemeData, Color, getUnit, TabBarThemeData, ButtonThemeData } from 'src/components/lib/utils'
import { GlobalView } from 'src/utils/node'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { IConfig } from 'src/store/reducers'

interface IProps {
    config: IConfig
}

interface IState {
}

const FormLabel = styled.div`
    width: ${getUnit(60)};
`

const tabBarTheme = new TabBarThemeData({
    height: '100%'
})

export default class ShopInfo extends Component<IProps, IState> {

    private fn?: IFormFun

    private payFn?: IFormFun

    public state: IState = {
    }

    public render(): JSX.Element {
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title="商家信息设置" line="vertical" />}
                />
                <Form getItems={this.getItems} style={{ width: getUnit(560) }} />
            </GlobalView>
        )
    }

    public componentDidMount() {
        // this.getData()
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
            label: <FormLabel>商家名称</FormLabel>,
            props: {
                placeholder: '请输入商家名称'
            },
            field: 'name'
        }, {
            component: 'Upload',
            label: <FormLabel>商家图标</FormLabel>,
            props: {
                maxLength: 1,
                crop: true,
                cropProps: {
                    cropSize: {
                        width: 300,
                        height: 300,
                    },
                },
            },
            field: 'logo'
        }, {
            component: 'Editor',
            label: <FormLabel>商家介绍</FormLabel>,
            props: {
                placeholder: '请输入商家介绍'
            },
            field: 'introduce'
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