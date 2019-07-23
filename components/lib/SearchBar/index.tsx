import React, { Component, CSSProperties } from 'react'
import { omit } from 'muka'
import { iconType } from '../Icon'
import Input, { IInputProps } from '../Input'
import NavBar from '../NavBar'
import { getClassName } from '../utils'

interface ISearchBarRightIcon {
    type: 'icon'
    url: iconType
    link?: string
    color?: string
    onClick?: () => boolean
}

interface ISearchBarRightImage {
    type: 'image'
    url: string
    link?: string
    onClick?: () => boolean
}

export interface ISearchBarProps extends IInputProps {
    className?: string
    style?: CSSProperties
    left?: string | JSX.Element | null
    right?: string | JSX.Element | null | (ISearchBarRightIcon | ISearchBarRightImage)[]
    divider?: boolean
    onPress?: (e?: React.MouseEvent<HTMLDivElement>) => void
    fixed?: boolean
    onRightClick?: () => void
}

const prefixClass = 'search_bar'

export default class SearchBar extends Component<ISearchBarProps, any> {

    public static defaultProps = {
        divider: true,
        right: '搜索'
    }

    public render(): JSX.Element {
        const { className, divider, left, right, fixed, onRightClick, style } = this.props


        return (
            <NavBar
                className={getClassName(`${prefixClass}`, className)}
                left={left}
                style={style}
                divider={divider}
                title={this.getSearchNode()}
                right={right}
                fixed={fixed}
                onRightClick={onRightClick}
            />
        )
    }

    private getSearchNode(): JSX.Element {
        const otherProps = omit(this.props, ['className', 'left', 'right', 'options', 'divider', 'fixed', 'onRightClick'])
        return (
            <div className={getClassName(`${prefixClass}_search`)}>
                <Input className={getClassName(`${prefixClass}_search__int`)} {...otherProps} />
            </div>
        )
    }
}
