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
    selected?: number
    tabViewClassName?: string
    tabViewBarClassName?: string
    itemBarClassName?: string
    itemClassName?: string
}

interface IDefaultValue {
    theme: TabBarThemeData
    selected?: number | string
    itemChange?: (field: number | undefined) => void
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

interface ITabBarItemScrollViewProps {
    tabBarTheme: TabBarThemeData
}

const TabBarItemScrollView = styled.div<ITabBarItemScrollViewProps>`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    overflow: auto;
    ${({ tabBarTheme }) => tabBarTheme.tabViewPadding.toString()};
    ${transition(0.5)}
`

interface ITabBarItemProps {
    title?: string | JSX.Element
    className?: string
    icon?: JSX.Element
    selectedIcon?: JSX.Element
    field?: number
    tooltipTitle?: string | JSX.Element
    placement?: any //TooltipPlacement
}

interface ITabBarItem {
    tabBarTheme: TabBarThemeData
    selected: boolean
}

const TabBarItemBox = styled.div<ITabBarItem>`
    ${({ tabBarTheme }) => css`${tabBarTheme.itemPadding.toString()}`};
    ${({ selected, tabBarTheme, theme }) => {
        if (selected) return css`background: ${tabBarTheme.itemSelectColor || theme.primarySwatch};`
    }}
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
        const { title, icon, className, field } = this.props

        return (
            <ThemeConsumer>
                {
                    (value) => (
                        <Consumer>
                            {
                                (val) => (
                                    <TabBarItemBox
                                        className={getClassName(className, 'flex flex_center')}
                                        tabBarTheme={val.theme || value.theme.tabBarTheme}
                                        onClick={val.itemChange ? val.itemChange.bind(this, field) : undefined}
                                        selected={field === val.selected}
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
            </ThemeConsumer>
        )
    }
}

interface ITabBarState {
    selected?: number
    height: number
    width: number
}

export default class TabBar extends Component<ITabBarProps, ITabBarState> {

    constructor(props: ITabBarProps) {
        super(props)
        this.state.selected = props.selected
    }

    public static defaultProps: ITabBarProps = {
        mode: 'tab',
        type: 'horizontal'
    }

    public static Item = TabBarItem

    public state: ITabBarState = {
        selected: undefined,
        width: 0,
        height: 0
    }

    private node: HTMLDivElement | null = null

    public render(): JSX.Element {
        const { mode, type, theme, style, children, tabViewClassName, tabViewBarClassName, itemBarClassName, itemClassName } = this.props
        const { selected, height, width } = this.state
        const tabBars: JSX.Element[] = []
        const tabViews: JSX.Element[] = []
        Children.forEach(children, (child: any, index) => {
            if (child && child.type === TabBarItem) {
                tabBars.push(cloneElement(child, { key: index, field: index, className: itemClassName }))
                tabViews.push(child.props.children)
            }
        })
        return (
            <ThemeConsumer>
                {
                    (value) => (
                        <Provider
                            value={{
                                theme: theme || value.theme.tabBarTheme,
                                selected,
                                itemChange: this.handleTabItemChange
                            }}
                        >
                            <TabBarView
                                mode={mode}
                                className={mode === 'tab' ? type === 'horizontal' ? 'flex_column' : 'flex' : 'flex_column'}
                                tabBarTheme={theme || value.theme.tabBarTheme}
                                style={style}
                                ref={(e) => this.node = e}
                            >
                                {mode === 'tab' ? (
                                    <TabBarItemView
                                        type={type}
                                        className={getClassName(type === 'vertical' ? 'flex_column' : 'flex', itemBarClassName)}
                                    >
                                        {tabBars}
                                    </TabBarItemView>
                                ) : null}
                                <TabBarItemTabView
                                    className={getClassName(`flex_1 ${type === 'vertical' ? 'flex_column' : 'flex'}`, tabViewBarClassName)}
                                >
                                    {
                                        tabViews.map((i, index) => (
                                            <TabBarItemScrollView
                                                className={tabViewClassName}
                                                tabBarTheme={theme || value.theme.tabBarTheme}
                                                style={{
                                                    transform: `translate3d(${selected && type === 'horizontal' ? getRatioUnit(selected * -width) : 0}, ${selected && type === 'vertical' ? getRatioUnit(selected * -height) : 0}, 0)`
                                                }}
                                                key={index}
                                            >
                                                {i}
                                            </TabBarItemScrollView>
                                        ))
                                    }
                                </TabBarItemTabView>
                                {mode === 'menu' ? (
                                    <TabBarItemView
                                        type={type}
                                        className={getClassName(type === 'vertical' ? 'flex_column' : 'flex', itemBarClassName)}
                                    >
                                        {tabBars}
                                    </TabBarItemView>
                                ) : null}
                            </TabBarView>
                        </Provider>
                    )
                }
            </ThemeConsumer>
        )
    }

    public componentDidMount() {
        const info = this.getRootNodeInfo()
        this.setState({
            height: info.height,
            width: info.width
        })
    }

    public UNSAFE_componentWillReceiveProps(nextProps: ITabBarProps) {
        const { selected } = this.state
        if (!isNil(nextProps.selected) && nextProps.selected !== selected) {
            this.setState({
                selected: nextProps.selected
            })
        }
    }

    private getRootNodeInfo = () => {
        let width = 0
        let height = 0
        if (this.node) {
            const node = this.node.getBoundingClientRect()
            width = node.width
            height = node.height
        }
        return {
            width,
            height
        }
    }

    private handleTabItemChange = (field?: number) => {
        if (!isNil(field)) {
            const info = this.getRootNodeInfo()
            this.setState({
                selected: field,
                width: info.width,
                height: info.height
            })
        }
    }

}