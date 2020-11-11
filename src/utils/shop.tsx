import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { isFunction } from 'lodash'
import { connect, Provider, DispatchProp } from 'react-redux'
import styled from 'styled-components'
import { ThemeProvider, Dialog, Image, Table, Button } from 'components'
import { IActionsProps } from '../saga'
import { IInitState } from 'src/store/state'
import { IImages } from 'src/store/reducers/images'
import { IDialogProps } from 'src/components/lib/Dialog'
import { store } from 'src/store'
import { SET_GOODS_MODAL_VISIBLE } from 'src/store/action'
import { DialogThemeData, getUnit } from 'src/components/lib/utils'
import { theme } from 'src/App'
import http, { httpUtils } from './axios'
import { ITableColumns } from 'src/components/lib/Table'

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
    onSelect?: (data: any[]) => void
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

    private selectedRows: any[] = [];

    private columns: ITableColumns<any>[] = [{
        title: '商品ID',
        dataIndex: 'id',
        key: 'id',
        width: '4rem',

    }, {
        title: '商品图片',
        dataIndex: 'cover_pic',
        key: 'cover_pic',
        width: '4rem',
        render: (value: string) => {
            return <Image src={value} style={{ height: `${getUnit(50)}` }} />
        }
    }, {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
    }]

    public render(): JSX.Element {
        const { goodsModalVisible } = this.props
        const { data } = this.state

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
                footer={
                    <Button mold="primary" onClick={this.handleItem}>确认</Button>
                }
            >
                <Table
                    dataSource={data}
                    columns={this.columns}
                    rowKey={(data) => data.id}
                    rowSelection={{
                        onChange: this.handleSelectChange,
                    }}
                />
            </Dialog>
        )
    }

    private handleSelectChange = (selectedRowKeys: any[], selectedRows: any[]) => {
        this.selectedRows = selectedRows
    }

    private handleItem = () => {
        const { onSelect, dispatch } = this.props
        if (isFunction(onSelect)) {
            onSelect(this.selectedRows)
            dispatch({ type: SET_GOODS_MODAL_VISIBLE, data: false })
        }
    }

    private handleFirstLoading = async () => {
        try {
            const { data } = this.state
            const res = await http(`http://192.168.1.103:8800/set/admin/marketing-integral-goods?status=0&category_id=&name=`, {}, {
                method: 'GET',
            })
            this.setState({ data: res.data.data })
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