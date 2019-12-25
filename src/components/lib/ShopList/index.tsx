import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../Card'

interface IShopListDataProps {
    imgUrl?: string
}

interface IProps {
    data: IShopListDataProps[]
    columnNum?: number
}

const ShopListView = styled.div``

export default class ShopList extends Component<IProps, any> {

    public static defaultProps: IProps = {
        data: [],
        columnNum: 2
    }

    public render(): JSX.Element {
        const { data } = this.props
        return (
            <ShopListView>
                {
                    data.map((i, index) => {
                        return (
                            <Card
                                source={i.imgUrl}
                                key={index}
                            >

                            </Card>
                        )
                    })
                }
            </ShopListView>
        )
    }

}