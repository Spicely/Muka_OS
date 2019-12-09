import { isNumber } from 'lodash'
import Color from './Color'
import IconThemeData from './IconThemeData'

interface INavBarThemeDataProps {
    navBarColor?: Color
    height?: number
    iconTheme?: IconThemeData
    color?: Color
}

export default class NavBarThemeData {

    constructor(data?: INavBarThemeDataProps) {
        if (data) {
            if (data.navBarColor) this.navBarColor = data.navBarColor
            if (isNumber(data.height)) this.height = data.height
            if (data.iconTheme) this.iconTheme = data.iconTheme
            if (data.color) this.color = data.color
        }
    }

    public navBarColor?: Color

    public color: Color = Color.fromRGB(0, 0, 0)

    public height: number = 48

    public iconTheme: IconThemeData = new IconThemeData({
        color: Color.fromRGB(255, 255, 255)
    })
}