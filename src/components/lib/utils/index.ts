import ThemeData from './ThemeData'
import { isNumber } from 'lodash'
export { default as Color } from './Color'
export { default as Padding } from './Padding'
export { default as ThemeData } from './ThemeData'
export { default as AlertThemeData } from './AlertThemeData'
export { default as IconThemeData } from './IconThemeData'
export { default as InputThemeData } from './InputThemeData'
export { default as ButtonThemeData } from './ButtonThemeData'
export { default as MenuThemeData } from './MenuThemeData'
export { default as RadioThemeData } from './RadioThemeData'
export { default as TabBarThemeData } from './TabBarThemeData'
export { default as NavBarThemeData } from './NavBarThemeData'
export { default as DialogThemeData } from './DialogThemeData'
export { default as TagThemeData } from './TagThemeData'

export const prefix: string = 'mk_'

/**
 * @param {string} name 类名会和prefix结合
 * @param {string} extendClass  扩展类名-字符串拼接
 */
export function getClassName(name: string = '', extendClass?: string) {
    return `${name || ''}${extendClass ? ' ' + extendClass : ''}`
}

export interface IValue {
    [name: string]: any
}

export interface IStyledProps {
    theme: ThemeData
}


export const transition = function (time: number, tag?: string): string {
    return `transition: ${tag || 'all'} ${time}s`
}

export const getRatioUnit = function (num: number) {
    return num * ThemeData.ratio + ThemeData.unit
}

export const getUnit = function (value?: number | string, themeValue?: number | string) {
    return value ? isNumber(value) ? getRatioUnit(value) : value : isNumber(themeValue) ? getRatioUnit(themeValue) : themeValue
}