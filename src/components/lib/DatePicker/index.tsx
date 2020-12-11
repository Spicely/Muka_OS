
import React, { Component, Fragment } from 'react'
import { DatePicker } from 'antd'
import { Consumer } from '../ThemeProvider'
import { Color, getUnit, transition } from '../utils'
import { Moment } from 'moment'
import styled, { createGlobalStyle } from 'styled-components'
import DatePickerThemeData from '../utils/DateThemeData'

export interface ILDatePicker {
    className?: string
    defaultValue?: Moment
    defaultPickerValue?: Moment
    disabledTime?: (time: any) => void
    format?: string | string[]
    renderExtraFooter?: (mode: any) => React.ReactNode
    [value: string]: any
}

interface IStyleProps {
    datePickerTheme: DatePickerThemeData
}

const EDatePicker = styled(DatePicker) <IStyleProps>`
    height: ${({ datePickerTheme, theme }: any) => getUnit(datePickerTheme.height || theme.datePickerTheme.height)};
    position: relative;
    width: 100%;
    ${({ datePickerTheme, theme }: any) => datePickerTheme.borderRadius || theme.borderRadius};
    &.ant-picker-focused {
        border-color: ${({ datePickerTheme, theme }: any) => (datePickerTheme.hoverColor || theme.primarySwatch).toString()};
        box-shadow: 0 0 0 2px ${({ datePickerTheme, theme }: any) => Color.setOpacity(datePickerTheme.hoverColor || theme.primarySwatch, 0.2).toString()};
    }
    &:hover {
         border-color: ${({ datePickerTheme, theme }: any) => (datePickerTheme.hoverColor || theme.primarySwatch).toString()};
    }
    &:active {
         border-color: ${({ datePickerTheme, theme }: any) => (datePickerTheme.hoverColor || theme.primarySwatch).toString()};
    }
`

export const PickerGlobalStyle = createGlobalStyle<IStyleProps>`
    .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
        ${({ datePickerTheme, theme }: any) => {
        return datePickerTheme.borderRadius || theme.borderRadius
    }}
        border-color: ${({ datePickerTheme, theme }: any) => (datePickerTheme.hoverColor || theme.primarySwatch).toString()};
    }

    .ant-picker-cell-inner {
        ${({ datePickerTheme, theme }: any) => {
        return datePickerTheme.borderRadius || theme.borderRadius
    }}
    }

    .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
        background: ${({ datePickerTheme, theme }: any) => (datePickerTheme.hoverColor || theme.primarySwatch).toString()};
    }

    .ant-picker-cell-in-view.ant-picker-cell-in-range::before {
        background: ${({ datePickerTheme, theme }: any) => Color.setOpacity((datePickerTheme.hoverColor || theme.primarySwatch), 0.3).toString()};
    }

    .ant-picker-time-panel-column > li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner {
        background: ${({ datePickerTheme, theme }: any) => Color.setOpacity((datePickerTheme.hoverColor || theme.primarySwatch), 0.3).toString()};
    }

    .ant-btn-primary {
        font-size: ${({ theme }: any) => getUnit(theme.fontSize)};
        background: ${({ datePickerTheme, theme }: any) => (datePickerTheme.hoverColor || theme.primarySwatch).toString()};
        ${({ datePickerTheme, theme }: any) => {
        return datePickerTheme.borderRadius || theme.borderRadius
    }}
        border-color: ${({ datePickerTheme, theme }: any) => (datePickerTheme.hoverColor || theme.primarySwatch).toString()};
        :hover {
            background:  ${({ datePickerTheme, theme }: any) => Color.setOpacity((datePickerTheme.hoverColor || theme.primarySwatch), 0.6).toString()};
            ${({ datePickerTheme, theme }: any) => {
        return datePickerTheme.borderRadius || theme.borderRadius
    }}
            border-color: ${({ datePickerTheme, theme }: any) => Color.setOpacity((datePickerTheme.hoverColor || theme.primarySwatch), 0.6).toString()};
        }
    }
    .ant-picker-today-btn {
        color: ${({ datePickerTheme, theme }: any) => (datePickerTheme.color || theme.primarySwatch).toString()};
    }
`

export default class LDatePicker extends Component<ILDatePicker, any> {
    public render(): JSX.Element {
        const props: any = this.props
        return (
            <Consumer>
                {
                    (init) => (
                        <Fragment>
                            <PickerGlobalStyle datePickerTheme={props.theme || init.theme.datePickerTheme} />
                            <EDatePicker
                                {...props}
                                datePickerTheme={props.theme || init.theme.datePickerTheme}
                            />
                        </Fragment>
                    )
                }
            </Consumer>
        )
    }
}
