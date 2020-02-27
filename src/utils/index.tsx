import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import styled from 'styled-components'
import { ThemeProvider, Upload, Dialog, TabBar, MobileLayout, Image } from 'components'
import { IActionsProps } from '../saga'
import { IInitState } from 'src/store/state'
import { IImages } from 'src/store/reducers/images'
import { IDialogProps } from 'src/components/lib/Dialog'
import { store } from 'src/store'
import { SET_IMAGE_MODAL_VISIBLE, SET_IMAGES_DATA } from 'src/store/action'
import { DialogThemeData, TabBarThemeData, getRatioUnit, getUnit } from 'src/components/lib/utils'
import { IUploadFileListProps } from 'src/components/lib/Upload/dragger'
import { theme } from 'src/App'
import http, { httpUtils, imgUrl } from './axios'

const ImageBox = styled.div`
    height: ${getUnit(200)};
    width:${getUnit(200)};
    background: #dedede;
    overflow: hidden;
    display: inline-block;
`

export interface IConnectProps {
    dispatch: (actions: IActionsProps) => void
}

interface IImageModalProps {
    onSelect?: () => void
}

interface IProps extends IDialogProps {
    images: IImages
    imageModalVisible: boolean
}

class ImageModal extends PureComponent<IProps & IImageModalProps> {

    private type: 'private' | 'public' = 'public'

    public render(): JSX.Element {
        const { images, imageModalVisible } = this.props
        console.log(images)
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
            >
                <TabBar
                    theme={new TabBarThemeData({ height: '100%' })}
                    onChange={this.handleTabChange}
                >
                    <TabBar.Item title="共享库">
                        <div style={{ color: 'red' }}>sss</div>
                    </TabBar.Item>
                    <TabBar.Item title="私人图库">
                        <MobileLayout>
                            {
                                images.private.map((i, index: number) => {
                                    return (
                                        <ImageBox key={index} >
                                            <div className="flex_center" style={{ height: '100%' }}>
                                                <Image src={imgUrl + i.filename} style={{ width: '100%' }} />
                                            </div>
                                        </ImageBox>
                                    )
                                })
                            }
                        </MobileLayout>
                    </TabBar.Item>
                </TabBar>
            </Dialog>
        )
    }

    private handleFirstLoading = async () => {
        try {
            const { images } = this.props
            const { data } = await http('image/find', {
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

    private handleTabChange = (field: number | string) => {
        if (field === 0) {
            this.type = 'public'
        } else {
            this.type = 'private'
        }
        const { images } = this.props
        if (!images[this.type].length) {
            this.handleFirstLoading()
        }
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
    console.log(data)
    store.dispatch({ type: SET_IMAGE_MODAL_VISIBLE, data: true })
    render(<Provider store={store}><ThemeProvider theme={theme}><ConnectImageModal /></ThemeProvider></Provider>, dom)
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
                    height: 300
                })}
            >
                <UploadBox>
                    <Upload.Dragger
                        action="http://192.168.1.6:3007/o/upload"
                        name="file"
                        data={{ module: 'fixed' }}
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
    let dom = document.querySelector('.image_modal')
    if (!dom) {
        dom = document.createElement('div')
        dom.className = 'image_modal'
        document.body.appendChild(dom)
    }
    render((
        <ThemeProvider>
            <ImageUpload
                visible={true}
                {...options}
            />
        </ThemeProvider>
    ),
        dom
    )
}