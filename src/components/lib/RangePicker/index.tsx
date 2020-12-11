
import React, { Component, Fragment } from 'react'
import { DatePicker } from 'antd'
import { omit } from 'lodash'
import styled from 'styled-components'
import { Moment } from 'moment'
import { Consumer } from '../ThemeProvider'
import { getUnit, RangePickerThemeData } from '../utils'
import { PickerGlobalStyle } from '../DatePicker'

const { RangePicker } = DatePicker

export interface IRangePicker {
    className?: string
    defaultValue?: Moment
    defaultPickerValue?: Moment
    disabledTime?: (time: any) => void
    format?: string | string[]
    renderExtraFooter?: (mode: any) => React.ReactNode
    theme?: RangePickerThemeData
    [value: string]: any
}

interface IStyleProps {
    rangePickerTheme: RangePickerThemeData
}

const Picker = styled(RangePicker) <IStyleProps>`
    height: ${({ rangePickerTheme }) => getUnit(rangePickerTheme.height)};
    position: relative;
    width: 100%; 
    ${({ rangePickerTheme, theme }) => {
        return rangePickerTheme.borderRadius || theme.borderRadius
    }}
    &:hover {
        border-color: ${({ rangePickerTheme, theme }) => (rangePickerTheme.hoverColor || theme.primarySwatch).toString()};
    }
    .ant-picker-active-bar{
        background: ${({ rangePickerTheme, theme }) => (rangePickerTheme.hoverColor || theme.primarySwatch).toString()};
    }
    &.ant-picker-focused {
        border-color: ${({ rangePickerTheme, theme }) => (rangePickerTheme.hoverColor || theme.primarySwatch).toString()};
        box-shadow: initial;
    }
`

export default class LRangePicker extends Component<IRangePicker, any> {
    public render(): JSX.Element {
        const { theme } = this.props
        const props = omit(this.props, ['theme', 'placeholder'])
        return (
            <Consumer>
                {
                    (init) => (
                        <Fragment>
                            <PickerGlobalStyle datePickerTheme={theme || init.theme.rangePickerTheme} />
                            <Picker
                                {...props}
                                rangePickerTheme={theme || init.theme.rangePickerTheme}
                            />
                        </Fragment>
                    )
                }
            </Consumer>
        )
    }
}
