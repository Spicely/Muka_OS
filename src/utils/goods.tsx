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
    activeNum: number
    baseUrl: string
    data: any[]
}

class GoodsModal extends PureComponent<IProps & IGoodsModalProps & DispatchProp, IState> {

    public state: IState = {
        activeNum: 0,
        baseUrl: '',
        data: [[], [], [], [], []],
    }

    public render(): JSX.Element {
        const { goodsModalVisible } = this.props
        const { activeNum, data } = this.state

        return (
            <Dialog
                visible={goodsModalVisible}
                title="路由跳转"
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
                    <TabBar.Item title="积分商城">
                        {
                            data[0].map((i: any, index: number) => {
                                return (
                                    <ListItem key={index} onClick={this.handleItem.bind(this, 1, i)}>
                                        <Image src={i.pic} />
                                    </ListItem>
                                )
                            })
                        }
                        {data[0].length === 0 ? <Empty /> : null}
                    </TabBar.Item>
                    <TabBar.Item title="在线充值">
                    </TabBar.Item>
                    <TabBar.Item title="活动">
                    </TabBar.Item>
                    <TabBar.Item title="商户">
                    </TabBar.Item>
                    <TabBar.Item title="优惠券">
                    </TabBar.Item>
                    <TabBar.Item title="客户咨询">
                    </TabBar.Item>
                </TabBar>
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
            const { activeNum, data } = this.state
            let url = ''
            switch (activeNum) {
                default: url = '/admin/marketing-integral-goods'
            }
            const res = await http(`${url}`, {}, {
                method: 'GET',
            })
            data[activeNum] = res.data.data
            this.setState({ data: [...data] })
        } catch (e) {
            httpUtils.verify(e)
        }
    }

    private handleTabChange = (field: number | string) => {
        console.log(field)
        const { data } = this.state
        if (!data[Number(field)].length) {
            this.handleFirstLoading()
        }
        this.setState({
            activeNum: Number(field)
        })
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
)(GoodsModal)

export const goodsModal = (options?: IGoodsModalProps) => {
    let dom = document.querySelector('.goods_modal')
    if (!dom) {
        dom = document.createElement('div')
        dom.className = 'goods_modal'
        document.body.appendChild(dom)
    }
    store.dispatch({ type: SET_GOODS_MODAL_VISIBLE, data: true })
    render(<Provider store={store}><ThemeProvider theme={theme}><ConnectImageModal {...options} /></ThemeProvider></Provider>, dom)
}