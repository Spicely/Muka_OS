import React, { Component } from 'react'
import { message } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, Button, Form } from 'components'
import http, { imgUrl } from 'src/utils/axios'
import { NavBarThemeData, Color, getUnit, UploadThemeData, ButtonThemeData } from 'src/components/lib/utils'
import { GlobalView } from 'src/utils/node'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { IConfig } from 'src/store/reducers'
import { connect, DispatchProp } from 'react-redux'
import { IInitState, MukaOS } from 'src/store/state'
import { SET_USERINFO_DATA } from 'src/store/action'

interface IProps extends DispatchProp {
    config: IConfig
    userInfo: MukaOS.UserInfo
}

interface IState {
}

const waitBtnTheme = new ButtonThemeData({
    buttonColor: Color.fromRGB(82, 196, 26),
})

const FormLabel = styled.div`
    width: ${getUnit(60)};
`

class ShopInfo extends Component<IProps, IState> {

    private fn?: IFormFun

    public state: IState = {
    }

    public render(): JSX.Element {
        const { userInfo } = this.props
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title="商家信息设置" line="vertical" />}
                    right={
                        userInfo.business?.status == 3 ? (
                            <Button mold="primary" theme={waitBtnTheme}>等待审核</Button>
                        ) : <Button mold="primary" async onClick={this.handleSave}>更新</Button>
                    }
                />
                <Form getItems={this.getItems} style={{ width: getUnit(560) }} />
            </GlobalView>
        )
    }

    public componentDidMount() {
        const { userInfo } = this.props
        this.fn?.setFieldValue({
            name: userInfo.business?.name,
            logo: userInfo.business?.logo?.url ? imgUrl + userInfo.business?.logo?.url : undefined,
            backdrop: userInfo.business?.backdrop?.url ? imgUrl + userInfo.business?.backdrop?.url : undefined,
            introduce: userInfo.business?.introduce,
        })
    }

    private getItems = (fn: IFormFun) => {
        const { userInfo } = this.props
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'Input',
            label: <FormLabel>商家名称</FormLabel>,
            props: {
                placeholder: '请输入商家名称',
                disabled: userInfo.business?.status == 2 ? true : false
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
                disabled: userInfo.business?.status == 2 ? true : false
            },
            field: 'logo',
        }, {
            component: 'Upload',
            label: <FormLabel>背景图标</FormLabel>,
            props: {
                maxLength: 1,
                crop: true,
                fileTypes: ['.jpeg', '.jpg', '.png'],
                theme: new UploadThemeData({
                    itemWidth: 360,
                    itemHeight: 180,
                }),
                cropProps: {
                    cropSize: {
                        width: 720,
                        height: 360,
                    },
                },
                disabled: userInfo.business?.status == 2 ? true : false
            },
            field: 'backdrop',
        }, {
            component: 'Textarea',
            label: <FormLabel>商家介绍</FormLabel>,
            props: {
                placeholder: '请输入商家介绍',
                maxLength: 120,
                showMaxLength: true,
                disabled: userInfo.business?.status == 2 ? true : false
            },
            field: 'introduce'
        }]
        return items
    }

    private handleSave = async () => {
        try {
            if (this.fn) {
                const { dispatch } = this.props
                const value = this.fn.getFieldValue()
                const formData = new FormData()
                Object.keys(value).forEach((i) => {
                    if (i == 'logo' || i == 'backdrop') {
                        value[i][0] && formData.append(i, value[i][0].file)
                    } else {
                        formData.append(i, value[i])
                    }
                })
                const data = await http('/admin/business/info', formData, { method: 'PUT' })
                dispatch({ type: SET_USERINFO_DATA, data: data })
                this.fn?.setFieldValue({
                    name: data.business?.name,
                    logo: imgUrl + data.business.logo.url,
                    backdrop: imgUrl + data.business.backdrop.url,
                    introduce: data.business?.introduce,
                })
                message.success('更新成功')
            }
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }
}

export default connect(
    ({ userInfo }: IInitState) => ({
        userInfo
    })
)(ShopInfo)
