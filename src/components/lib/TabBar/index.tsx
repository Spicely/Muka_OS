import React, { Component, Children, CSSProperties, cloneElement, createContext } from 'react'
import styled, { css } from 'styled-components'
import { isNil, isFunction } from 'lodash'
import { Consumer as ThemeConsumer } from '../ThemeProvider'
import { TabBarThemeData, getUnit, transition, getClassName, getRatioUnit, Color } from '../utils'

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

interface ITabBarItemViewProps {
    type?: IType
}

const TabBarItemView = styled.div<ITabBarItemViewProps>`
    ${({ type, theme }) => {
        if (type === 'horizontal') return css`width: 100%;`
        else return css`width: ${getRatioUnit(50)}; ${TabBarItemBox} { width: ${getRatioUnit(50)}; height: ${getRatioUnit(50)};&:hover { background: ${Color.setOpacity(theme.primarySwatch, 0.2).toString()}}}`
    }}
    overflow: auto;
    -webkit-overflow-scrolling: touch;
`

const TabBarItemTabView = styled.div`
    overflow: hidden;
`

const TabBarItemScrollView = styled.div`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
`

interface ITabBarItemProps {
    title?: string | JSX.Element
    className?: string
    icon?: JSX.Element
    selectedIcon?: JSX.Element
    tooltipTitle?: string | JSX.Element
    placement?: any //TooltipPlacement
}

interface ITabBarItem {
    tabBarTheme: TabBarThemeData
}

const TabBarItemBox = styled.div<ITabBarItem>`
    ${({ tabBarTheme }) => css`${tabBarTheme.itemPadding.toString()}`};
    cursor: pointer;
    ${transition(0.5)};
    &:hover {
        color: ${({ tabBarTheme, theme }) => tabBarTheme.itemHoverColor || theme.primarySwatch};
    }
`

const TabBarIcon = styled.div`
    
`

export class TabBarItem extends Component<ITabBarItemProps, any> {

    public render(): JSX.Element {
        const { title, icon, className } = this.props
        return (
            <Consumer>
                {
                    (value) => (
                        <TabBarItemBox
                            className={getClassName(className, 'flex flex_center')}
                            tabBarTheme={value.theme}
                            onClick={this.handleTabItem}
                        >
                            {
                                icon ? (
                                    <TabBarIcon className="flex_center">
                                        {icon}
                                    </TabBarIcon>
                                ) : null
                            }
                            {title}
                        </TabBarItemBox>
                    )
                }
            </Consumer>
        )
    }

    private handleTabItem = () => {
        console.log(1111)
    }
}

export default class TabBar extends Component<ITabBarProps, any> {

    public static defaultProps: ITabBarProps = {
        mode: 'tab',
        type: 'horizontal'
    }

    public static Item = TabBarItem

    public render(): JSX.Element {
        const { mode, type, theme, style, children } = this.props
        const tabBars: JSX.Element[] = []
        const tabViews: JSX.Element[] = []
        Children.forEach(children, (child: any, index) => {
            if (child && child.type === TabBarItem) {
                tabBars.push(cloneElement(child, { key: index, field: index }))
                tabViews.push(<TabBarItemScrollView key={index}>{child.props.children}</TabBarItemScrollView>)
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
                                {mode === 'tab' ? (<TabBarItemView type={type} className={type === 'vertical' ? 'flex_column' : 'flex'}>{tabBars}</TabBarItemView>) : null}
                                <TabBarItemTabView className="flex_1 flex">{tabViews}</TabBarItemTabView>
                                {mode === 'menu' ? (<TabBarItemView type={type} className={type === 'vertical' ? 'flex_column' : 'flex'}>{tabBars}</TabBarItemView>) : null}
                            </TabBarView>
                        </Provider>
                    )
                }
            </ThemeConsumer>
        )
    }

}