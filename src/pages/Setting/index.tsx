import React, { Component } from 'react'
import { message } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, Button, Form } from 'components'
import http, { getTitle } from 'src/utils/axios'
import { NavBarThemeData, Color, getUnit } from 'src/components/lib/utils'
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
    width: ${getUnit(90)};
`

export default class Index extends Component<IProps, IState> {

    private fn?: IFormFun

    private title = getTitle('/system/config')

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
                    right={
                        <Button mold="primary" async onClick={this.handleOk}>更新</Button>
                    }
                />
                <Form getItems={this.getItems} style={{ width: getUnit(560) }} />
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
                await http('system-ali', { value: JSON.stringify(value) })
                message.success('更新成功')
            }
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

}