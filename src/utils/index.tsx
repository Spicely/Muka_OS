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
import { DialogThemeData, TabBarThemeData, getRatioUnit, getUnit, IconThemeData, UploadThemeData } from 'src/components/lib/utils'
import { IUploadFileListProps } from 'src/components/lib/Upload/dragger'
import { theme } from 'src/App'
import http, { httpUtils, imgUrl } from './axios'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { GlobalForm } from './node'
import { IFile } from 'src/components/lib/Upload'
export { goodsModal } from './goods'
export { shopModal } from './shop'

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
    crop: boolean
    cropSize?: {
        width: number,
        height: number,
    }
}

interface IProps extends IDialogProps {
    images: IImages
    imageModalVisible: boolean
}

interface IState {
    activeNum: number
    baseUrl: string
}

const uploadTheme = new UploadThemeData({
    itemWidth: 200,
    itemHeight: 200
})

class ImageModal extends PureComponent<IProps & IImageModalProps & DispatchProp, IState> {

    public static defaultProps: IImageModalProps = {
        multiple: false,
        crop: false,
    }

    private type: 'private' | 'public' = 'public'

    public state: IState = {
        activeNum: 0,
        baseUrl: '',
    }

    public render(): JSX.Element {
        const { images, imageModalVisible, crop, cropSize } = this.props
        const { activeNum, baseUrl } = this.state
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
                footer={null}
            >
                <TabBar
                    theme={new TabBarThemeData({ height: '100%' })}
                    onChange={this.handleTabChange}
                    selected={activeNum}
                >
                    <TabBar.Item title="私人图库">
                        <MobileLayout>
                            <Upload
                                crop={crop}
                                withCredentials
                                hasClear={false}
                                action={baseUrl + '/upload/stream'}
                                name="file"
                                params={{ type: 1 }}
                                theme={uploadTheme}
                                fileList={images.private.map((i) => {
                                    return {
                                        url: i.file_link
                                    }
                                })}
                                onItemClick={this.handleItemClick.bind(this, 'private')}
                                // onUploadSuccess={uploadSuccess}
                                // onUploadError={uploadError}
                                cropProps={{
                                    cropShape: 'rect',
                                    cropSize,
                                    showGrid: true,
                                }}
                            />
                            {/* {
                                images.private.map((i, index: number) => {
                                    return (
                                        <ImageBox key={index} onClick={this.handleImage.bind(this, i)}>
                                            <div className="flex_center" style={{ height: '100%' }}>
                                                <Image src={imgUrl + i.preview} style={{ width: '100%' }} />
                                            </div>
                                        </ImageBox>
                                    )
                                })
                            } */}
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

    private handleItemClick = (type: 'private', file: IFile, index: number) => {
        const { onSelect, dispatch, images } = this.props
        if (isFunction(onSelect)) {
            switch (type) {
                default: onSelect(images.private[index])
            }
            dispatch({ type: SET_IMAGE_MODAL_VISIBLE, data: false })
        }
    }

    private handleFirstLoading = async () => {
        try {
            const { images } = this.props
            const { data } = await http('/set/admin/diy/upload-file', {}, {
                method: 'GET',
            })
            const res = await http('/common/pic-host', {}, { method: 'GET' })
            images.private = data.data.map((i: MukaOS.IImageParams) => {
                i.file_link = res.data + '/' + i.file_link
                return i
            })
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

const renderTypes = ['Input', 'Select', 'Upload', 'Image', 'Images', 'AsyncSelect']

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
                    <Upload
                        crop
                        // action={baseUrl + '/upload/stream'}
                        name="file"
                        withCredentials
                        params={{ type: 1 }}
                        // onUploadSuccess={uploadSuccess}
                        // onUploadError={uploadError}
                        cropProps={{
                            cropShape: 'rect',
                            cropSize: {
                                width: 1440,
                                height: 423,
                            },
                            showGrid: true,
                        }}
                    />
                    {/* <Upload.Dragger
                        action={baseUrl + '/upload/stream'}
                        name="file"
                        withCredentials
                        data={{ type: 1 }}
                        maxLength={1}
                        onUploadSuccess={uploadSuccess}
                        onUploadError={uploadError}
                    /> */}
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

export const editOptions = [{
    label: '文本',
    value: 'Label'
}, {
    label: '文本框',
    value: 'Input'
}, {
    label: '文本域',
    value: 'Textarea'
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
    value: 'Image'
}, {
    label: '图片列表',
    value: 'Images'
}, {
    label: '单选',
    value: 'RadioGroup'
}, {
    label: '分割线',
    value: 'Divider'
}, {
    label: '文件',
    value: 'Upload'
}, {
    label: '富文本',
    value: 'Editor'
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

export type ISelectType = 'barAction' | 'tableAction' | 'options'

interface ISelectTypeProps {
    selectModalVisible: boolean
    type: ISelectType
    data: any[]
    success: (data: any[]) => void
}

interface ISelectTypeState {
    visible: boolean
    hasContrast: boolean
}

class SelectTypeModal extends PureComponent<ISelectTypeProps, ISelectTypeState> {

    constructor(props: ISelectTypeProps) {
        super(props)
        this.state.visible = props.selectModalVisible
    }

    private funs: IFormFun[] = []

    private fn?: IFormFun

    public state: ISelectTypeState = {
        visible: false,
        hasContrast: true,
    }

    public static getDerivedStateFromProps(nextProps: ISelectTypeProps, state: ISelectTypeState) {
        if (nextProps.selectModalVisible !== state.visible) {
            if (nextProps.selectModalVisible != state.visible) {
                if (state.hasContrast) {
                    return {
                        visible: nextProps.selectModalVisible
                    }
                } else {
                    return {
                        hasContrast: true
                    }
                }
            }
            return null
        }
        return null
    }

    private getParamItems = (index: number, fn: IFormFun) => {
        const { type } = this.props
        this.funs[index] = fn
        switch (type) {
            case 'barAction': {
                const items: IFormItem[] = [{
                    component: 'Select',
                    props: {
                        options: editOptions,
                    },
                    label: <FieldLabel className="flex_center">显示类型</FieldLabel>,
                    extend: (val: any) => {
                        if (val.type === 'Select') {
                            return (
                                <Button mold="primary" onClick={this.handleShowDialog.bind(this, 'options', val.options, index, 'options')}>设置添加数据</Button>
                            )
                        } else {
                            return <div />
                        }
                    },
                    field: 'type'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入字段',
                    },
                    label: <FieldLabel className="flex_center">字段</FieldLabel>,
                    field: 'field'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入文本内容',
                    },
                    label: <FieldLabel className="flex_center">文本内容</FieldLabel>,
                    field: 'label'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入别名',
                    },
                    label: <FieldLabel className="flex_center">别名</FieldLabel>,
                    visible: (val: any) => (val.type === 'Image' || val.type === 'Images'),
                    field: 'alias'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入图片数量(不限制不填)',
                    },
                    label: <FieldLabel className="flex_center">图片数量</FieldLabel>,
                    visible: (val: any) => val.type === 'Images',
                    field: 'number'
                }, {
                    component: 'RadioGroup',
                    className: 'form_item',
                    props: {
                        options: [{
                            label: '是',
                            value: true
                        }, {
                            label: '否',
                            value: false
                        }],
                        value: false
                    },
                    visible: (val: any) => (val.type === 'Image' || val.type === 'Images'),
                    label: <FieldLabel className="flex_center">裁切</FieldLabel>,
                    field: 'crop'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入宽度',
                    },
                    visible: (val: any) => val.crop,
                    label: <FieldLabel className="flex_center">宽度</FieldLabel>,
                    field: 'width'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入高度',
                    },
                    visible: (val: any) => val.crop,
                    label: <FieldLabel className="flex_center">高度</FieldLabel>,
                    field: 'height'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入请求地址',
                    },
                    visible: (val: any) => val.type === 'AsyncSelect',
                    label: <FieldLabel className="flex_center">请求地址</FieldLabel>,
                    field: 'url'
                }, {
                    component: 'RadioGroup',
                    className: 'form_item',
                    props: {
                        options: [{
                            label: '多个',
                            value: true
                        }, {
                            label: '单个',
                            value: false
                        }],
                        value: false
                    },
                    visible: (val: any) => val.type === 'AsyncSelect',
                    label: <FieldLabel className="flex_center">多选</FieldLabel>,
                    field: 'multiple'
                }, {
                    component: 'RadioGroup',
                    className: 'form_item',
                    props: {
                        options: [{
                            label: '必填',
                            value: true
                        }, {
                            label: '选填',
                            value: false
                        }],
                        value: false
                    },
                    visible: (value: any) => renderTypes.includes(value.type),
                    label: <FieldLabel className="flex_center">必填</FieldLabel>,
                    field: 'require'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入文本框提示（使用默认则不填写）',
                    },
                    visible: (val: any) => val.type === 'Input',
                    label: <FieldLabel className="flex_center">文本框提示</FieldLabel>,
                    field: 'url'
                }, {
                    component: 'NULL',
                    props: {
                        value: []
                    },
                    visible: (val: any) => val.type === 'Select',
                    field: 'options',
                }]
                return items
            }
            case 'tableAction': {
                const items: IFormItem[] = [{
                    component: 'Select',
                    props: {
                        options: tableActionOptions,
                    },
                    extend: (val: any) => {
                        if (val.type === 'edit') {
                            return (
                                <Button mold="primary" onClick={this.handleShowDialog.bind(this, 'barAction', val.data, index, 'data')}>设置编辑数据</Button>
                            )
                        } else {
                            return <div />
                        }
                    },
                    label: <FieldLabel className="flex_center">功能类型</FieldLabel>,
                    field: 'type'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入字段名',
                    },
                    visible: (val: any) => val.type === 'status',
                    label: <FieldLabel className="flex_center">对应字段名</FieldLabel>,
                    field: 'field'
                }, {
                    component: 'NULL',
                    props: {
                        value: []
                    },
                    visible: (val: any) => val.type === 'edit',
                    field: 'data',
                }, {
                    component: 'Input',
                    props: (val: any) => {
                        if (val.type === 'status') {
                            return {
                                placeholder: '例：1=>使用:green;2=>禁用:red;',
                            }
                        } else {
                            return {
                                placeholder: '请输入功能名称',
                            }
                        }
                    },
                    label: <FieldLabel className="flex_center">功能名</FieldLabel>,
                    field: 'label'
                }, {
                    component: 'Input',
                    props: (val: any) => {
                        if (val.type === 'link') {
                            return {
                                placeholder: '请输入跳转地址',
                            }
                        } else {
                            return {
                                placeholder: '请输入请求地址',
                            }
                        }
                    },
                    label: (val: any) => (<FieldLabel className="flex_center">{val.type === 'link' ? '跳转地址' : '请求地址'}</FieldLabel>),
                    field: 'url'
                }, {
                    component: 'RadioGroup',
                    className: 'form_item',
                    props: {
                        options: [{
                            label: '是',
                            value: true
                        }, {
                            label: '否',
                            value: false
                        }],
                        value: false
                    },
                    visible: (val: any) => val.type === 'status',
                    label: <FieldLabel className="flex_center">其他条件</FieldLabel>,
                    field: 'other'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '例：1=>使用:green;2=>禁用:red;',
                    },
                    visible: (val: any) => val.other,
                    label: <FieldLabel className="flex_center">前置条件</FieldLabel>,
                    field: 'factor'
                }]
                return items
            }
            case 'options': {
                const items: IFormItem[] = [{
                    component: 'Input',
                    props: {
                        placeholder: '请输入选项文字',
                    },
                    label: <FieldLabel className="flex_center">选项文字</FieldLabel>,
                    field: 'label'
                }, {
                    component: 'Input',
                    props: {
                        placeholder: '请输入选项值',
                    },
                    label: <FieldLabel className="flex_center">选项值</FieldLabel>,
                    field: 'value'
                }]
                return items
            }
            default: return []
        }
    }

    private getItems = (fn: IFormFun) => {
        const { data } = this.props
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'Label',
            props: {
                value: data.length ? data : [{}]
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

    public componentDidUpdate() {
        setTimeout(() => {
            const { data } = this.props
            this.funs.forEach((i, index: number) => {
                i.setFieldValue(data[index] || {})
            })
        }, 10)
    }

    private handleShowDialog(type: ISelectType, val: any[], index: number, key: string) {
        selectTypeValueModal(type, val, (data: any) => {
            const params = this.funs[index].getFieldValue()
            switch (key) {
                case 'options': params.options = data; break;
                case 'data': params.data = data; break;
                default: params.actions = data
            }
            this.funs[index].setFieldValue(params)
        }, key)
    }

    private handleFieldClose = (index: number) => {
        if (this.fn) {
            const { data } = this.fn.getFieldValue()
            data.splice(index, 1)
            this.fn.setFieldValue(data)
        }
    }

    private handleFieldAdd = () => {
        if (this.fn) {
            const { data } = this.fn.getFieldValue()
            data.push({})
            this.fn.setFieldValue(data)
        }
    }

    private handleSuccess = () => {
        const { success } = this.props
        const data = this.funs.map((i) => {
            const v = i.getFieldValue()
            if (v.value === 'true') {
                v.value = true
            } else if (v.value === 'false') {
                v.value = false
            } else if (!isNaN(Number(v.value))) {
                v.value = Number(v.value)
            }
            return v
        })
        success(data)
        this.setState({
            visible: false,
            hasContrast: false
        })
    }

    public componentDidMount() {
        setTimeout(() => {
            const { data } = this.props
            this.funs.forEach((i, index: number) => {
                i.setFieldValue(data[index] || {})
            })
        }, 10)
    }

    public render(): JSX.Element {
        const { visible } = this.state
        return (
            <Dialog
                visible={visible}
                onClose={this.handleClose}
                theme={dialogTheme}
                footer={
                    <div>
                        <Button mold="primary" style={{ marginRight: getUnit(15) }} onClick={this.handleFieldAdd}>添加数据</Button>
                        <Button mold="primary" onClick={this.handleSuccess}>完成</Button>
                    </div>
                }
            >
                <GlobalForm >
                    <Form getItems={this.getItems} />
                </GlobalForm>
            </Dialog>
        )
    }

    private handleClose = () => {
        this.setState({
            visible: false,
            hasContrast: false
        })
        this.funs = []
    }
}

export const selectTypeValueModal = (type: ISelectType, data: any[], success: (data: any) => void, key?: string) => {
    let dom = document.querySelector(`.select_type_modal_${key || 'default'}`)
    if (!dom) {
        dom = document.createElement('div')
        dom.className = `select_type_modal_${key || 'default'}`
        document.body.appendChild(dom)
    }
    render((
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SelectTypeModal type={type} data={data || []} selectModalVisible={true} success={success} key={key || 'default'} />
            </ThemeProvider>
        </Provider>
    ),
        dom
    )
}