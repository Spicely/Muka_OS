import React, { Component, CSSProperties } from 'react'
import { isNumber, isNull } from 'muka'
import { getClassName, prefix } from '../utils'
import Icon from '../Icon'

export interface INavBarProps {
    className?: string
    leftClassName?: string
    titleClassName?: string
    rightClassName?: string
    titleCenter?: boolean
    style?: CSSProperties
    left?: string | JSX.Element | null
    title?: string | JSX.Element
    right?: string | JSX.Element | null
    fixed?: boolean
    endVal?: number
    divider?: boolean
    animate?: boolean
    goBack?: () => void
    onRightClick?: () => void
}

export default class NavBar extends Component<INavBarProps, any> {

    public static defaultProps: INavBarProps = {
        divider: true
    }

    public render(): JSX.Element {
        const { className, left, divider, title, right, fixed, goBack, leftClassName, titleCenter, titleClassName, rightClassName, style, onRightClick } = this.props
        return (
            <div
                className={`${getClassName(`nav_bar ${divider ? prefix + 'divider' : ''} flex_justify${fixed ? ' fixed' : ''}`, className)}`}
                style={style}
            >
                <div className="flex">
                    {
                        !isNull(left) && (
                            <div className={getClassName('nav_bar_left flex_justify', leftClassName)} onClick={goBack}>
                                {left ? left : <Icon icon="ios-arrow-back" />}
                            </div>
                        )
                    }
                    <div className={getClassName(`nav_bar_title flex_1 ${titleCenter ? 'flex_center' : 'flex_justify'}`, titleClassName)}> {title}</div>
                    {
                        !isNull(right) && (
                            <div className={getClassName('nav_bar_right flex_justify', rightClassName)} onClick={onRightClick}> {right} </div>
                        )
                    }
                </div>
            </div>
        )
    }

    public componentDidMount() {
        const { fixed, animate } = this.props
        if (fixed && animate) {
            window.addEventListener('scroll', this.handleScroll)
        }
    }

    private handleScroll = () => {
        const { endVal } = this.props
        const top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
        if (isNumber(endVal)) {
            console.log(top)
        }
    }
}
