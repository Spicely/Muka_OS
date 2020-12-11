import * as React from 'react'
import { Switch as ASwicth } from 'antd'
import { SwitchProps } from 'antd/lib/switch'
import styled from 'styled-components'
import SwitchThemeData from '../utils/SwitchThemeData'
import { Consumer } from '../ThemeProvider'
import { Color } from '../utils'
import { omit } from 'lodash'
export interface ISwitchProps extends SwitchProps {
    theme?: SwitchThemeData
}

interface IStyleProps {
    switchTheme: SwitchThemeData
}

const LSwitch = styled(ASwicth) <IStyleProps>`
    &.ant-switch-checked {
        background-color: ${({ switchTheme, theme }: any) => (switchTheme.color || theme.primarySwatch).toString()};
        &:focus {
            box-shadow: 0 0 0 2px ${({ switchTheme, theme }: any) => Color.setOpacity(switchTheme.color || theme.primarySwatch, 0.2).toString()};
        }
    }
`
export default class Switch extends React.Component<ISwitchProps, any> {
    public render(): JSX.Element {
        const { theme } = this.props
        const props = omit(this.props, ['theme'])
        return (
            <Consumer>
                {
                    (init) => (
                        <LSwitch
                            {...props}
                            switchTheme={theme || init.theme.switchTheme}
                        />
                    )
                }
            </Consumer>
        )
    }
}
