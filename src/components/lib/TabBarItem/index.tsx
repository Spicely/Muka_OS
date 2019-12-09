import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Consumer } from '../TabBar'
import { TabBarThemeData, getClassName } from '../utils'

interface ITabBarItemProps {
    title?: string | JSX.Element
    className?: string
    icon?: JSX.Element
    selectedIcon?: JSX.Element
    // tooltipTitle?: string | JSX.Element
    // placement?: TooltipPlacement
}

interface ITabBarItem {
    tabBarTheme: TabBarThemeData
}

const TabBarItemView = styled.div<ITabBarItem>`
    ${({ tabBarTheme }) => css`${tabBarTheme.itemPadding.toString()}`}
`

const TabBarIcon = styled.div`
    
`

export default class TabBarItem extends Component<ITabBarItemProps, any> {

    public render(): JSX.Element {
        const { title, icon, className } = this.props
        return (
            <Consumer>
                {
                    (value) => (
                        <TabBarItemView
                            className={getClassName(className, 'flex')}
                            tabBarTheme={value.theme}
                        >
                            {
                                icon ? (
                                    <TabBarIcon className="flex_center">
                                        {icon}
                                    </TabBarIcon>
                                ) : null
                            }
                            {title}
                        </TabBarItemView>
                    )
                }
            </Consumer>
        )
    }
}