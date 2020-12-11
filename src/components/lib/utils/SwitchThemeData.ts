import Color from './Color'

interface ISwitchThemeDataProps {
    color?: Color
    height?: number | string
}

export default class SwitchThemeData {
    constructor(data?: ISwitchThemeDataProps) {
        if (data) {
            if (data.height) this.height = data.height
            if (data.color) this.color = data.color
        }
    }

    public height: number | string = 30

    public color?: Color

}