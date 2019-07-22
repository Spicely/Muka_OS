import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'
import { isFunction } from 'muka'
import { getClassName, prefix } from '../utils'
import Button from '../Button'
import NavBar from '../NavBar'
import Icon from '../Icon'

export interface IDialogProps {
    className?: string
    title?: string | JSX.Element
    visible?: boolean
    animateInClass?: string
    animateOutClass?: string
    footer?: JSX.Element
    onClose?: (val: boolean) => void
    onOk?: () => void
}

interface IState {
    visible: boolean
    animate: boolean
}

const prefixClass = 'dialog'

let globalNode: Element | null

export default class Dialog extends Component<IDialogProps, IState> {

    public static defaultProps: IDialogProps = {
        animateInClass: 'slipUp',
        animateOutClass: 'slipBottom'
    }

    constructor(props: IDialogProps) {
        super(props)
        if (props.visible) {
            this.state.animate = props.visible
            this.state.visible = props.visible
        }

        if (typeof document !== 'undefined') {
            globalNode = document.querySelector(`.${getClassName('mask_box')}`)
            if (globalNode) {
                this.node = globalNode
            } else {
                const dom = document.createElement('div')
                dom.className = getClassName('mask_box')
                const body = document.querySelector('body')
                if (body) {
                    body.appendChild(dom)
                }
                this.node = dom
                globalNode = dom
            }
        }
    }

    public state: IState = {
        visible: false,
        animate: false
    }

    private node: Element | null = null

    private animateNode: Element | null = null

    private timer: any

    public componentWillReceiveProps(nextProps: IDialogProps) {
        const { visible } = this.state
        if (visible !== nextProps.visible) {
            const obj: any = {
                animate: nextProps.visible || false,
            }
            if (nextProps.visible) {
                obj.visible = nextProps.visible
            }
            this.setState(obj)
        }
    }

    public componentDidMount() {
        if (this.animateNode) {
            this.animateNode.addEventListener('animationend', this.handelAnimate, false)
        }
    }

    public componentWillUnmount() {
        if (this.animateNode) {
            this.animateNode.removeEventListener('animationend', this.handelAnimate, false)
        }
        if (this.timer) {
            clearTimeout(this.timer)
        }
    }

    public render(): JSX.Element {
        const { className, title, children, footer, animateInClass, animateOutClass } = this.props
        const { visible, animate } = this.state
        if (this.node) {
            return createPortal(
                <div className={getClassName(`${prefixClass} flex_center ${animate ? 'fadeIn' : 'fadeOut'}`)} style={{ display: visible ? '' : 'none' }}>
                    <div className={getClassName(`${prefixClass}_content flex_column ${animate ? animateInClass : animateOutClass}`, className)} ref={(e) => this.animateNode = e}>
                        <NavBar
                            left={
                                <div className="navbar_label">{title}</div>
                            }
                            className={getClassName(`${prefixClass}_content__navbar`)}
                            right={<Icon icon="ios-close" style={{ cursor: 'pointer' }} onClick={this.handleClose} />}
                        />
                        <div className={getClassName(`${prefixClass}_content__box flex_1`)}>
                            {children}
                        </div>
                        <NavBar
                            className={getClassName(`${prefixClass}_content__navbar ${prefix}divider_top`)}
                            divider={false}
                            left=" "
                            right={
                                <div className="flex">
                                    {
                                        footer ? footer :
                                            (
                                                <Fragment>
                                                    <Button onClick={this.handleClose} style={{ marginRight: '10px' }}>取消</Button>
                                                    <Button mold="primary" onClick={this.handelOk}>确定</Button>
                                                </Fragment>
                                            )
                                    }
                                </div>
                            }
                        />
                    </div>
                </div>,
                this.node
            )
        }
        return <Fragment />
    }

    private handelAnimate = () => {
        const { animate } = this.state
        if (!animate) {
            this.timer = setTimeout(() => {
                clearTimeout(this.timer)
                this.setState({
                    visible: false
                })
            }, 200)
        }
    }

    private handleClose = () => {
        const { onClose } = this.props
        this.setState({
            animate: false
        }, () => {
            if (isFunction(onClose)) {
                onClose(false)
            }
        })

    }

    private handelOk = () => {
        const { onOk } = this.props
        this.setState({
            animate: false
        }, () => {
            if (isFunction(onOk)) {
                onOk()
            }
        })
    }
}
