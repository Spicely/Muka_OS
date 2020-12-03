import React, { Component } from 'react'
import { message } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, Form } from 'components'
import http from 'src/utils/axios'
import { NavBarThemeData, Color, getUnit, TabBarThemeData, } from 'src/components/lib/utils'
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
                    title={<LabelHeader title="首页设置" line="vertical" />}
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
            component: 'Editor',
            label: <FormLabel>左侧信息</FormLabel>,
            props: {
                placeholder: '请输入左侧信息'
            },
            field: 'ossAccessKeyID'
        }, {
            component: 'Editor',
            label: <FormLabel>右侧信息</FormLabel>,
            props: {
                placeholder: '请输入右侧信息'
            },
            field: 'ossAccessKeySecret'
        },{
            component: 'Input',
            label: <FormLabel>版权信息</FormLabel>,
            props: {
                placeholder: '请输入版权信息'
            },
            field: 'ossServer'
        }, {
            component: 'Button',
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