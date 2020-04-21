import React, { Component, Fragment } from 'react'
import { Select as ReactSelect } from 'antd'
import Axios from 'axios'
import { isFunction, isUndefined, isString } from 'lodash'
import { SelectThemeData, getUnit, Color } from '../utils'
import { Consumer } from '../ThemeProvider'
import Empty from '../Empty'
import Icon from '../Icon'
import styled, { createGlobalStyle } from 'styled-components'

interface ISelectOptionsProps {
    value: string | number
    label: string
    disabled?: boolean
    color?: string
}

export interface ISelectProps {
    className?: string
    onChange?: (value: string | number) => void
    placeholder?: string
    isSearchable?: boolean
    isMulti?: boolean
    isDisabled?: boolean
    url: string
    noOptionsMessage?: string | JSX.Element
    theme?: SelectThemeData
    withCredentials?: boolean
}

const prefixClass = 'select'

interface IStyleProps {
    selectTheme: SelectThemeData
}

const SelectIcon = styled(Icon)``

const GlobalSelectDropdown = createGlobalStyle<IStyleProps>`
    .ant-select-dropdown {
        ${({ selectTheme, theme }: any) => selectTheme.borderRadius || theme.borderRadius}
    }
    .ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
        background: ${({ selectTheme, theme }: any) => Color.setOpacity(selectTheme.selectColor || theme.primarySwatch, 0.65).toString()};
    }
    .ant-select-dropdown-menu-item {
        font-size: inherit;
    }
`

const SelectView = styled(ReactSelect) <IStyleProps>`
    height: ${({ selectTheme }) => getUnit(selectTheme.height)};
    background: #fff;
    .ant-select-selection--single {
        height: 100%;
        ${({ selectTheme, theme }) => selectTheme.borderRadius || theme.borderRadius}
    }

    .ant-select-selection:hover {
        border-color: ${({ selectTheme, theme }) => selectTheme.selectColor || theme.primarySwatch};
    }
    
    .ant-select-focused .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active {
        border-color: ${({ selectTheme, theme }) => selectTheme.selectColor || theme.primarySwatch};
        box-shadow: none;
    }
    .ant-select-selection__placeholder {
        color: inherit;
    }
`

interface IState {
    value: any
    options: ISelectOptionsProps[]
    loading: boolean
}

export default class AsyncSelect extends Component<ISelectProps, IState> {
    constructor(props: ISelectProps) {
        super(props)
        // this.state.value = isNil(props.value) ? undefined : props.options.find((i) => i.value === props.value)
    }

    public static defaultProps: ISelectProps = {
        url: '',
        placeholder: '请选择数据',
        isSearchable: false,
        isMulti: false,
        isDisabled: false,
        withCredentials: true,
    }

    public state: IState = {
        value: undefined,
        options: [],
        loading: false,
    }

    public render(): JSX.Element {
        const { className, placeholder, noOptionsMessage, isMulti, isDisabled, theme } = this.props
        const { options, loading, value } = this.state
        return (
            <Consumer>
                {
                    (val) => (
                        <Fragment>
                            <GlobalSelectDropdown selectTheme={theme || val.theme.selectTheme} />
                            <SelectView
                                value={value}
                                className={className}
                                selectTheme={theme || val.theme.selectTheme}
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                loading={loading}
                                placeholder={placeholder}
                                notFoundContent={<Empty description={noOptionsMessage} image={null} />}
                            // suffixIcon={
                            //     <SelectIcon
                            //         icon="ios-arrow-down"
                            //         theme={theme ? theme.iconTheme : val.theme.selectTheme.iconTheme}
                            //     />
                            // }
                            // 

                            >
                                {
                                    options.map((i) => {
                                        return <SelectView.Option value={i.value} key={i.value} disabled={i.disabled}>{i.label}</SelectView.Option>
                                    })
                                }
                            </SelectView>
                        </Fragment>
                    )}
            </Consumer>

        )
    }

    private handleFocus = () => {
        const { url, withCredentials } = this.props
        const { options } = this.state
        if (url && !options.length) {
            this.setState({
                loading: true
            })
            Axios.post(url, {}, {
                timeout: 25000,
                withCredentials,
            }).then(({ data }) => {
                this.setState({
                    loading: false,
                    options: data.data
                })
            })
        }
    }

    private handleChange = (data: any) => {
        const { onChange } = this.props
        this.setState({
            value: data
        })
        if (isFunction(onChange)) {
            onChange(data)
        }
    }
}
