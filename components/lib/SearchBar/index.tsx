import React, { Component, CSSProperties } from 'react'
import Router from 'next/router'
import { omit, isArray, isFunction } from 'muka'
import Icon, { iconType } from '../Icon'
import Image from '../Image'
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
        let rightValue: any
        if (isArray(right)) {
            rightValue = right.map((item: ISearchBarRightIcon | ISearchBarRightImage, index: number) => {
                if (item.type === 'icon') {
                    return (
                        <Icon icon={item.url} color={item.color} onClick={this.handleClick.bind(this, item.link, item.onClick)} key={index} />
                    )
                } else if (item.type === "image") {
                    return (
                        <Image src={item.url} onClick={this.handleClick.bind(this, item.link, item.onClick)} key={index} />
                    )
                }
            })
        } else {
            rightValue = right
        }
        return (
            <NavBar
                className={getClassName(`${prefixClass}`, className)}
                left={left}
                style={style}
                divider={divider}
                title={this.getSearchNode()}
                right={rightValue}
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

    private handleClick = (link?: string, onClick?: () => boolean) => {
        let status = true
        if (isFunction(onClick)) {
            status = onClick()
        }
        if (status && link) {
            Router.push(link)
        }
    }
}
