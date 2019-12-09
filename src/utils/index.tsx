import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { Dialog, TabBar, TabBarItem } from 'src/components'
import { IActionsProps } from '../saga'
import { IInitState } from 'src/store/state'
import { IImages } from 'src/store/reducers/images'
import { IDialogProps } from 'src/components/lib/Dialog'
import { store } from 'src/store'
import { SET_IMAGE_MODAL_VISIBLE } from 'src/store/action'
import { DialogThemeData } from 'src/components/lib/utils'

export interface IConnectProps {
    dispatch: (actions: IActionsProps) => void
}

interface IImageModalProps {
    onSelect?: () => void
}

interface IProps extends IDialogProps {
    images: IImages[]
    imageModalVisible: boolean
}

class ImageModal extends PureComponent<IProps & IImageModalProps> {


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
                <TabBar>
                    <TabBarItem title="共享库">
                        <div style={{color: 'red'}}>sss</div>
                    </TabBarItem>
                    <TabBarItem title="私人图库">
                        <div style={{color: 'red'}}>sss</div>
                    </TabBarItem>
                </TabBar>
            </Dialog>
        )
    }

    private handleFirstLoading = () => {
        console.log(11)
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
    render(<Provider store={store}><ConnectImageModal /></Provider>, dom)
}