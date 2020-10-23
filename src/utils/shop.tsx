import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { isFunction } from 'lodash'
import { connect, Provider, DispatchProp } from 'react-redux'
import styled from 'styled-components'
import { ThemeProvider, Dialog, TabBar, Image, Empty } from 'components'
import { IActionsProps } from '../saga'
import { IInitState, MukaOS } from 'src/store/state'
import { IImages } from 'src/store/reducers/images'
import { IDialogProps } from 'src/components/lib/Dialog'
import { store } from 'src/store'
import { SET_GOODS_MODAL_VISIBLE } from 'src/store/action'
import { DialogThemeData, TabBarThemeData, getUnit } from 'src/components/lib/utils'
import { theme } from 'src/App'
import http, { httpUtils } from './axios'
import { IFile } from 'src/components/lib/Upload'

export interface IConnectProps {
    dispatch: (actions: IActionsProps) => void
}

const ListItem = styled.div`
    width: ${getUnit(100)};
    height: ${getUnit(100)};
    display: inline-block;
    cursor: pointer;
    margin: ${getUnit(10)} ${getUnit(10)} 0 0;
`

interface IGoodsModalProps {
    onSelect?: (type: any, data: MukaOS.IImageParams) => void
}

interface IProps extends IDialogProps {
    images: IImages
    goodsModalVisible: boolean
}

interface IState {
    baseUrl: string
    data: any[]
}

class ShopModal extends PureComponent<IProps & IGoodsModalProps & DispatchProp, IState> {

    public state: IState = {
        baseUrl: '',
        data: [],
    }

    public render(): JSX.Element {
        const { goodsModalVisible } = this.props
        const {  data } = this.state

        return (
            <Dialog
                visible={goodsModalVisible}
                title="选择商品"
                onClose={this.handleClose}
                onFirstShow={this.handleFirstLoading}
                theme={new DialogThemeData({
                    width: '80%',
                    height: '80%'
                })}
                footer={null}
            >
                {
                    data.map((i: any, index: number) => {
                        return (
                            <ListItem key={index} onClick={this.handleItem.bind(this, 1, i)}>
                                <Image src={i.pic} />
                            </ListItem>
                        )
                    })
                }
                {data.length === 0 ? <Empty /> : null}
            </Dialog>
        )
    }

    private handleItem = (type: any, data: any) => {
        const { onSelect, dispatch } = this.props
        if (isFunction(onSelect)) {
            onSelect(type, data)
            dispatch({ type: SET_GOODS_MODAL_VISIBLE, data: false })
        }
    }

    private handleFirstLoading = async () => {
        try {
            const { data } = this.state
            const res = await http(`http://192.168.1.105:8800/set`, {}, {
                method: 'GET',
            })
            this.setState({ data: [...data] })
        } catch (e) {
            httpUtils.verify(e)
        }
    }

    private handleClose = () => {
        store.dispatch({ type: SET_GOODS_MODAL_VISIBLE, data: false })
    }
}
const ConnectImageModal = connect(
    ({ images, goodsModalVisible }: IInitState) => ({
        images,
        goodsModalVisible
    })
)(ShopModal)

export const shopModal = (options?: IGoodsModalProps) => {
    let dom = document.querySelector('.shop_modal')
    if (!dom) {
        dom = document.createElement('div')
        dom.className = 'shop_modal'
        document.body.appendChild(dom)
    }
    store.dispatch({ type: SET_GOODS_MODAL_VISIBLE, data: true })
    render(<Provider store={store}><ThemeProvider theme={theme}><ConnectImageModal {...options} /></ThemeProvider></Provider>, dom)
}