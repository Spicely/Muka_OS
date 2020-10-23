import React, { Component, MouseEvent, CSSProperties } from 'react'
import { isFunction } from 'lodash'
import styled, { css } from 'styled-components'
import { Color, BorderStyle, Border, getRatioUnit } from 'src/components/lib/utils'


interface IEditViewProps {
    edit: boolean
}

const EditView = styled.div<IEditViewProps>`
    position: relative;
    ${({ edit }) => {
        if (edit) return css`${Border.all({ width: 1, style: BorderStyle.solid, color: Color.fromRGB(220, 220, 220) }).toString()}`;
    }};
`

const EditViewBox = styled.div`
    position: absolute;
    z-index: 8;
    right: ${getRatioUnit(20)};
    bottom: 0;
`

const EditViewLabel = styled.div`
    background: rgb(0, 0, 0, 0.4);
    color: #fff;
    margin-right: ${getRatioUnit(7)};
    font-size: ${getRatioUnit(12)};
    padding: ${getRatioUnit(3)} ${getRatioUnit(5)};
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }
`


interface IProps {
    edit: boolean
    onClick: () => void
    onDelete: () => void
    style?: CSSProperties
}

export default class EditComponent extends Component<IProps, any> {
    public render(): JSX.Element {
        const { children, edit, style } = this.props
        return (
            <EditView
                edit={edit}
                onClick={this.handleClick}
                style={style}
            >
                {children}
                {
                    edit && (
                        <EditViewBox className="flex">
                            <EditViewLabel onClick={this.handleDelet}>
                                删除
                            </EditViewLabel>
                        </EditViewBox>
                    )
                }
            </EditView>
        )
    }

    private handleClick = () => {
        const { onClick } = this.props
        if (isFunction(onClick)) {
            onClick()
        }
    }

    private handleDelet = (e: MouseEvent<HTMLDivElement>) => {
        const { onDelete } = this.props
        e.stopPropagation()
        if (isFunction(onDelete)) {
            onDelete()
        }
    }
}