import React, { createContext, Component } from 'react'
import { IEmptyProps } from '../Empty'
import { defaultUrl, rightUrl } from './base64'

export interface IConfigProviderProps {
    emptyProps?: IEmptyProps
}

export const RIGHTULR = rightUrl

const defaultValue: IConfigProviderProps = {
    emptyProps: {
        description: '暂无数据',
        image: defaultUrl,
        center: true,
    }
}

export const { Consumer, Provider } = createContext(defaultValue)

export default class ConfigProviderProps extends Component<IConfigProviderProps, any> {
    public render(): JSX.Element {
        const { children, emptyProps } = this.props
        return (
            <Provider
                value={{
                    emptyProps: {
                        ...defaultValue.emptyProps,
                        ...emptyProps
                    }
                }}
            >
                {children}
            </Provider>
        )
    }
}
