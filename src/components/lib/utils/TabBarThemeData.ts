import { isNil } from 'lodash'
import Color from './Color'
import Padding from './Padding'

interface ITabBarThemeDataProps {
    tabBarColor?: Color
    height?: number | string
    width?: number | string
}

export default class TabBarThemeData {
    constructor(data?: ITabBarThemeDataProps) {
        if (data) {
            if (data.tabBarColor) this.tabBarColor = data.tabBarColor
            if (!isNil(data.height)) this.height = data.height
            if (!isNil(data.width)) this.width = data.width
        }
    }

    public tabBarColor: Color = Color.fromRGB(255, 255, 255)

    public height: number | string = 400

    public width: number | string = '100%'

    public itemPadding: Padding = Padding.symmetric({ horizontal: 10, vertical: 6 })
}