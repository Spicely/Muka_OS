import React, { Component, Children, CSSProperties, cloneElement, createContext } from 'react'
import styled, { css } from 'styled-components'
import { isNil, isFunction } from 'lodash'
import { Consumer as ThemeConsumer } from '../ThemeProvider'
import { TabBarThemeData, getUnit, ThemeData } from '../utils'
import TabBarItem from '../TabBarItem'

type IMode = 'tab' | 'menu'

type IType = 'horizontal' | 'vertical'

export interface ITabBarProps {
    mode?: IMode
    type?: IType
    theme?: TabBarThemeData
    style?: CSSProperties
}

interface IDefaultValue {
    theme: TabBarThemeData
}

const defaultValue: IDefaultValue = { theme: new TabBarThemeData() }

export const { Provider, Consumer } = createContext(defaultValue)

interface ITabBarViewProps {
    mode?: IMode
    type?: IType
    tabBarTheme: TabBarThemeData
}

const TabBarView = styled.div<ITabBarViewProps>`
    background: ${({ tabBarTheme }) => tabBarTheme.tabBarColor.toString()};
    ${({ mode, tabBarTheme }) => {
        if (mode === 'tab') return css`width: ${getUnit(tabBarTheme.width)}; height: ${getUnit(tabBarTheme.height)};`
        if (mode === 'menu') return css`width: 100%; height: 100%;`
    }}
`

const TabBarItemView = styled.div``

export default class TabBar extends Component<ITabBarProps, any> {

    public static defaultProps: ITabBarProps = {
        mode: 'tab',
        type: 'horizontal'
    }

    public render(): JSX.Element {
        const { mode, type, theme, style, children } = this.props
        const tabBars: JSX.Element[] = []
        const tabViews: JSX.Element[] = []
        Children.forEach(children, (child: any, index) => {
            if (child && child.type === TabBarItem) {
                tabBars.push(cloneElement(child, { key: index }))
                tabViews.push(cloneElement(child.props.children, { key: index }))
            }
        })
        return (
            <ThemeConsumer>
                {
                    (value) => (
                        <Provider value={{ theme: theme || value.theme.tabBarTheme }}>
                            <TabBarView
                                mode={mode}
                                className={mode === 'tab' ? type === 'horizontal' ? 'flex_column' : 'flex' : 'flex_column'}
                                tabBarTheme={theme || value.theme.tabBarTheme}
                                style={style}
                            >
                                {mode === 'tab' ? (<TabBarItemView className="flex">{tabBars}</TabBarItemView>) : null}
                                {tabViews}
                                {mode === 'menu' ? (<TabBarItemView className="flex">{tabBars}</TabBarItemView>) : null}
                            </TabBarView>
                        </Provider>
                    )
                }
            </ThemeConsumer>
        )
    }

}