import React, { Component } from 'react'
import { message, Tooltip } from 'antd'
import { find } from 'lodash'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { Button, Dialog, LabelHeader, Form, BoxLine, Icon, Image } from 'components'
import http, { imgUrl, baseUrl, httpUtils, getTitle } from 'src/utils/axios'
import { IIcons } from 'src/store/reducers/icons'
import { IJurisd } from 'src/store/reducers/jurisd'
import { connect, DispatchProp } from 'react-redux'
import { IInitState } from 'src/store/state'
import CopyToClipboard from 'react-copy-to-clipboard'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { NavBarThemeData, Color, getRatioUnit } from 'src/components/lib/utils'
import { GlobalView } from 'src/utils/node'
import { SET_ICONS_DATA } from 'src/store/action'

interface IProps extends DispatchProp {
    icons: IIcons[]
    lastIds: string[]
    jurisd: IJurisd[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
    lastIds: string[]
    parents: { label: string, value: string }[]
}

const IconItems = styled.div`
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        box-shadow: 0 0 ${getRatioUnit(10)} #ccc;
    }
`

class RouterIcons extends Component<IProps, IState> {

    public state: IState = {
        classifyVisible: false,
        lastIds: [],
        dialogName: '',
        parents: []
    }

    private fn: IFormFun | null = null

    private title = getTitle('/routers/icons')

    public render(): JSX.Element {
        const { icons, jurisd } = this.props
        const { classifyVisible, dialogName } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={find(jurisd, { type: 13 }) ? <Button mold="primary" onClick={this.setClassifyVisble}>添加图标</Button> : null}
                />
                <BoxLine>
                    {icons.map((data) => {
                        if (data.type === 'icon') {
                            const name: any = data.name
                            return (
                                <CopyToClipboard text={data.name} key={data.id} onCopy={this.showMsgCopy}>
                                    <Tooltip placement="left" title={data.name} >
                                        <IconItems className="flex_center" >
                                            <Icon icon={name} />
                                        </IconItems>
                                    </Tooltip>
                                </CopyToClipboard>
                            )
                        } else {
                            return (
                                <IconItems className="flex_center" style={{ width: '100%', height: '100%' }} key={data.id}>
                                    <Image src={imgUrl + data.name} style={{ height: '1.5rem' }} />
                                </IconItems>
                            )
                        }
                    })}
                </BoxLine>
                <Dialog
                    visible={classifyVisible}
                    title={dialogName}
                    onOk={this.handleUpdateOrCreate}
                    async
                    onClose={this.handleClassifyClose}
                >
                    <Form getItems={this.getItems} />
                </Dialog>
            </GlobalView>
        )
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            field: 'id',
            component: 'NULL'
        }, {
            component: 'RadioGroup',
            label: '类型选择',
            props: {
                value: 'icon',
                options: [
                    { label: '字体图标', value: 'icon' },
                    { label: '图片', value: 'image' },
                ],
                onChange: (value: string) => {
                    this.setFieldVisible(value)
                }
            },
            field: 'type'
        }, {
            component: 'ImagePicker',
            label: '图片上传',
            props: {
                action: '/os/file/upload',
                baseUrl,
                data: {
                    pathName: 'os/icons'
                },
                crop: true,
                cropProps: {
                    cropShape: 'rect',
                    cropSize: {
                        width: 120,
                        height: 120
                    }
                },
                maxLength: 1,
            },
            visible: false,
            field: 'url'
        }, {
            component: 'Input',
            label: '图标名称',
            props: {
                placeholder: '请输入iconName'
            },
            field: 'name'
        }]
        return items
    }

    private setFieldVisible = (type: string) => {
        if (type === 'icon') {
            this.fn && this.fn.showFieldElement(['name'])
            this.fn && this.fn.hideFieldElement(['url'])
        } else {
            this.fn && this.fn.showFieldElement(['url'])
            this.fn && this.fn.hideFieldElement(['name'])
        }
    }

    private handleUpdateOrCreate = async () => {
        try {
            if (this.fn) {
                const router = this.fn.getFieldValue()
                if (router.type === 'icon' && !router.name) {
                    message.error('请输入图标名称')
                    return
                }
                if (router.type === 'image' && !router.url.length) {
                    message.error('请选择图片')
                    return
                }
                let data
                if (router.type === 'icon') {
                    data = await http('icons/create', {
                        type: router.type,
                        name: router.name
                    })
                } else {
                    const fromData = new FormData()
                    fromData.append('type', router.type)
                    fromData.append('name', router.url[0]['file'])
                    data = await http('icons/img', fromData)
                }
                const { icons, dispatch } = this.props
                icons.unshift(data.data)
                dispatch({ type: SET_ICONS_DATA, icons })
                message.success(data.msg)
                this.fn.cleanFieldValue()
                this.setState({
                    classifyVisible: false
                })
            }

        } catch (data) {
            httpUtils.verify(data)
        }
    }

    private showMsgCopy = () => {
        message.success('已复制到剪切板')
    }

    private handleClassifyClose = () => {
        this.setState({
            classifyVisible: false,
        })
        this.fn && this.fn.cleanFieldValue()
    }

    private setClassifyVisble = () => {
        this.setState({
            classifyVisible: true,
            dialogName: '添加图标'
        })
    }
}

export default connect(
    ({ icons, jurisd }: IInitState) => ({
        icons,
        jurisd
    })
)(RouterIcons)