import Color from './Color'
import BorderRadius from './BorderRadius'

interface IDatePickerThemeDataProps {
    color?: Color
    borderRadius?: BorderRadius
    height?: number | string
    hoverColor?: Color
}

export default class DatePickerThemeData {
    constructor(data?: IDatePickerThemeDataProps) {
        if (data) {
            if (data.height) this.height = data.height
            if (data.color) this.color = data.color
            if (data.borderRadius) this.borderRadius = data.borderRadius
            if (data.hoverColor) this.hoverColor = data.hoverColor
        }
    }

    public height: number | string = 30

    public color?: Color

    public borderRadius?: BorderRadius

    public hoverColor?: Color

}