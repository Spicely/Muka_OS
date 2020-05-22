import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { isFunction } from 'lodash'
import { connect, Provider, DispatchProp } from 'react-redux'
import styled from 'styled-components'
import { Button, ThemeProvider, Upload, Dialog, TabBar, MobileLayout, Image, Empty, Form, Icon } from 'components'
import { IActionsProps } from '../saga'
import { IInitState, MukaOS } from 'src/store/state'
import { IImages } from 'src/store/reducers/images'
import { IDialogProps } from 'src/components/lib/Dialog'
import { store } from 'src/store'
import { SET_IMAGE_MODAL_VISIBLE, SET_IMAGES_DATA, SET_SELECT_MODAL_VISIBLE } from 'src/store/action'
import { DialogThemeData, TabBarThemeData, getRatioUnit, getUnit, IconThemeData } from 'src/components/lib/utils'
import { IUploadFileListProps } from 'src/components/lib/Upload/dragger'
import { theme } from 'src/App'
import http, { httpUtils, imgUrl, baseUrl } from './axios'
import { IFormFun, IFormItem } from 'src/components/lib/Form'

const dialogTheme = new DialogThemeData({
    height: 'auto'
})

const ImageBox = styled.div`
    height: ${getUnit(200)};
    width:${getUnit(200)};
    background: #dedede;
    margin-right: ${getUnit(10)};
    overflow: hidden;
    display: inline-block;
`

export interface IConnectProps {
    dispatch: (actions: IActionsProps) => void
}

interface IImageModalProps {
    onSelect?: (data: MukaOS.IImageParams) => void
    multiple?: boolean
}

interface IProps extends IDialogProps {
    images: IImages
    imageModalVisible: boolean
}

interface IState {
    activeNum: number
}

class ImageModal extends PureComponent<IProps & IImageModalProps & DispatchProp, IState> {

    public static defaultProps: IImageModalProps = {
        multiple: false
    }

    private type: 'private' | 'public' = 'public'

    public state: IState = {
        activeNum: 0,
    }

    public render(): JSX.Element {
        const { images, imageModalVisible } = this.props
        const { activeNum } = this.state
        return (
            <Dialog
                visible={imageModalVisible}
                title="图片"
                onClose={this.handleClose}
                onFirstShow={this.handleFirstLoading}
                theme={new DialogThemeData({
                    width: '80%',
                    height: '80%'
                })}
                footer={
                    <div>
                        <Button mold="primary" onClick={this.handleUpload}>上传图片</Button>
                    </div>
                }
            >
                <TabBar
                    theme={new TabBarThemeData({ height: '100%' })}
                    onChange={this.handleTabChange}
                    selected={activeNum}
                >
                    <TabBar.Item title="共享库">
                        <div style={{ color: 'red' }}>sss</div>
                    </TabBar.Item>
                    <TabBar.Item title="私人图库">
                        <MobileLayout>
                            {
                                images.private.map((i, index: number) => {
                                    return (
                                        <ImageBox key={index} onClick={this.handleImage.bind(this, i)}>
                                            <div className="flex_center" style={{ height: '100%' }}>
                                                <Image src={imgUrl + i.preview} style={{ width: '100%' }} />
                                            </div>
                                        </ImageBox>
                                    )
                                })
                            }
                            {
                                !images.private.length ? <div className="flex_center" style={{ height: '100%' }}><Empty /></div> : null
                            }
                        </MobileLayout>
                    </TabBar.Item>
                </TabBar>
            </Dialog>
        )
    }

    private handleImage = (img: MukaOS.IImageParams) => {
        const { onSelect, multiple, dispatch } = this.props
        if (isFunction(onSelect) && !multiple) {
            onSelect(img)
            dispatch({ type: SET_IMAGE_MODAL_VISIBLE, data: false })
        }
    }

    private handleFirstLoading = async () => {
        try {
            const { images } = this.props
            const { data } = await http('/admin/image/find', {
                type: this.type,
                number: 20,
                time: images[this.type].length ? images[this.type][0]['createdAt'] : Date.now(),
                query: images[this.type].length ? '$gt' : '$lte'
            })
            images[this.type] = data.concat(images[this.type])
            store.dispatch({ type: SET_IMAGES_DATA, data: { ...images } })
        } catch (e) {
            httpUtils.verify(e)
        }
    }

    private handleUpload = () => {
        uploadModal()
    }

    private handleTabChange = (field: number | string) => {
        if (field === 0) {
            this.type = 'public'
        } else {
            this.type = 'private'
        }
        const { images } = this.props
        // if (!images[this.type].length) {
        this.handleFirstLoading()
        // }
        this.setState({
            activeNum: Number(field)
        })
    }

    private handleClose = () => {
        store.dispatch({ type: SET_IMAGE_MODAL_VISIBLE, data: false })
    }
}
const ConnectImageModal = connect(
    ({ images, imageModalVisible }: IInitState) => ({
        images,
        imageModalVisible
    })
)(ImageModal)

export const imageModal = (options?: IImageModalProps) => {
    let dom = document.querySelector('.image_modal')
    if (!dom) {
        dom = document.createElement('div')
        dom.className = 'image_modal'
        document.body.appendChild(dom)
    }
    const data = store.getState()
    // console.log(options)
    store.dispatch({ type: SET_IMAGE_MODAL_VISIBLE, data: true })
    render(<Provider store={store}><ThemeProvider theme={theme}><ConnectImageModal {...options} /></ThemeProvider></Provider>, dom)
}

const UploadBox = styled.div`
    padding: ${getRatioUnit(10)};
`

interface ImageUploadProps extends IUploadModalProps {
    visible: boolean
}

interface ImageUploadState {
    visible: boolean
}

class ImageUpload extends PureComponent<ImageUploadProps, ImageUploadState> {
    constructor(props: ImageUploadProps) {
        super(props)
        this.state.visible = props.visible
    }

    public state = {
        visible: false
    }

    public render(): JSX.Element {
        const { uploadSuccess, uploadError } = this.props
        const { visible } = this.state
        return (
            <Dialog
                visible={visible}
                title="图片上传"
                onClose={this.handleClose}
                theme={new DialogThemeData({
                    width: 600,
                    height: 400
                })}
            >
                <UploadBox>
                    <Upload.Dragger
                        action={baseUrl + '/upload'}
                        name="file"
                        withCredentials
                        data={{ type: 1 }}
                        maxLength={1}
                        onUploadSuccess={uploadSuccess}
                        onUploadError={uploadError}
                    />
                </UploadBox>
            </Dialog>
        )
    }

    public UNSAFE_componentWillReceiveProps(nextProps: ImageUploadProps) {
        const { visible } = this.state
        if (nextProps.visible !== visible) {
            this.setState({
                visible: nextProps.visible
            })
        }
    }

    private handleClose = () => {
        this.setState({
            visible: false
        })
    }
}

interface IUploadModalProps {
    uploadSuccess?: (val: IUploadFileListProps, data: any, files: IUploadFileListProps[]) => void
    uploadError?: (val: IUploadFileListProps, data: any, files: IUploadFileListProps[]) => void
}

export const uploadModal = (options?: IUploadModalProps) => {
    let dom = document.querySelector('.upload_modal')
    if (!dom) {
        dom = document.createElement('div')
        dom.className = 'upload_modal'
        document.body.appendChild(dom)
    }
    render((
        <ThemeProvider theme={theme}>
            <ImageUpload
                visible={true}
                {...options}
            />
        </ThemeProvider>
    ),
        dom
    )
}
 
export const iconTheme = new IconThemeData({
    size: 16
})

export const FieldBox = styled.div`
    padding:  ${getUnit(5)} ${getUnit(10)};
    border: ${getUnit(1)} solid rgb(232,232,232);
    position: relative;
`

export const FiledClose = styled(Icon)`
    position: absolute;
    right: ${getUnit(10)};
    background: rgba(0,0,0,0.2);
    border-radius: 50%;
    right: ${getUnit(-4)};
    top: ${getUnit(-4)};
    cursor: pointer;
    :hover {
        background: rgba(0, 0, 0, 0.4);
    }
`

export const FieldLabel = styled.div`
    border: ${getUnit(1)} solid rgb(232,232,232);
    width: ${getUnit(80)};
    height: ${getUnit(32)};
    border-right: 0;
`

export const tableFieldTypes = [{
    label: '文本',
    value: 'Label'
}, {
    label: '文本框',
    value: 'Input'
}, {
    label: '选项',
    value: 'Select'
}, {
    label: '多选框',
    value: 'CheckBox',
}, {
    label: '异步选项',
    value: 'AsyncSelect'
}, {
    label: '图片',
    value: 'image'
}, {
    label: '单选',
    value: 'RadioGroup'
}]

export const tableActionOptions = [{
    label: '编辑',
    value: 'edit',
}, {
    label: '删除',
    value: 'del',
}, {
    label: '路由',
    value: 'link',
}, {
    label: '状态',
    value: 'status',
}]

export const tableFileOptions = [{
    label: '文本',
    value: 'text',
}, {
    label: '图片',
    value: 'img',
}, {
    label: '时间',
    value: 'date',
}, {
    label: '状态',
    value: 'status',
}, {
    label: '操作',
    value: 'actions',
}]

export type ISelectType = 'tableItems'

interface ISelectTypeProps {
    selectModalVisible: boolean
    type: ISelectType
    data: any[]
}

interface ISelectTypeState {
    visible: boolean
}

class SelectTypeModal extends PureComponent<ISelectTypeProps, ISelectTypeState> {

    private getParamItems = (index: number) => {
        const { type } = this.props
        switch(type){
            case 'tableItems': {
                const items: IFormItem[] = [{
                    component: 'Select',
                    props: {
                        options: tableFieldTypes,
                    },
                    label: <FieldLabel className="flex_center">显示类型</FieldLabel>,
                    extend: (value: any) => (
                        <Button mold="primary" disabled={false} >设置添加数据</Button>
                    ),
                    field: 'type'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入字段',
                    },
                    label: <FieldLabel className="flex_center">字段</FieldLabel>,
                    field: 'field'
                },{
                    component: 'Input',
                    props: {
                        placeholder: '请输入文本内容',
                    },
                    label: <FieldLabel className="flex_center">文本内容</FieldLabel>,
                    field: 'label'
                }, {
                    component: 'AsyncSelect',
                    props: {
                        placeholder: '请输入请求地址',
                    },
                    visible: (val: any) => val.type === 'AsyncSelect',
                    label: <FieldLabel className="flex_center">请求地址</FieldLabel>,
                    field: 'url'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入文本框提示',
                    },
                    visible: (val: any) => val.type === 'Input',
                    label: <FieldLabel className="flex_center">文本框提示</FieldLabel>,
                    field: 'url'
                }]
                return items
            }
            default: return []
        }
    }

    private getItems = (fn: IFormFun) => {
        const { data } = this.props
        const items: IFormItem[] = [{
            component: 'Label',
            props: {
                value: [1,2]
            },
            render: (val: any[]) => (
                <div style={{ marginTop: val.length ? getUnit(8) : 0 }}>
                    {
                        val.map((i, index: number) => (
                            <FieldBox key={index} style={{ marginBottom: getUnit(10) }}>
                                <Form getItems={this.getParamItems.bind(this, index)} labelSpacing={0} />
                                <FiledClose icon="ios-close" theme={iconTheme} onClick={this.handleFieldClose.bind(this, index)} />
                            </FieldBox>
                        ))
                    }
                </div>
            ),
            field: 'data'
        }]
        return items
    }

    private handleFieldClose = (index: number) => {

    }

    public render(): JSX.Element {
        const { selectModalVisible } = this.props
        return (
            <Dialog
                visible={selectModalVisible}
                onClose={this.handleClose}
                theme={dialogTheme}
                footer={
                    <div>
                        <Button mold="primary">完成</Button>
                    </div>
                }
            >
                <Form getItems={this.getItems} />
            </Dialog>
        )
    }

    private handleClose = () => {
        store.dispatch({ type: SET_SELECT_MODAL_VISIBLE, data: false })
    }
}

const ConnectSelectModal = connect(
    ({ selectModalVisible }: IInitState) => ({
        selectModalVisible
    })
)(SelectTypeModal)


export const selectTypeValueModal = (type: ISelectType, data: any[]) => {
    let dom = document.querySelector('.select_type_modal')
    if (!dom) {
        dom = document.createElement('div')
        dom.className = 'select_type_modal'
        document.body.appendChild(dom)
    }
    store.dispatch({ type: SET_SELECT_MODAL_VISIBLE, data: true })
    render((
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ConnectSelectModal type={type} data={data} />
            </ThemeProvider>
        </Provider>
    ),
        dom
    )
}