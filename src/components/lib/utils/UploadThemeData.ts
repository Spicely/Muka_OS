import { isNil } from 'lodash'
import Color from './Color'
import Border, { BorderStyle } from './Border'

interface IUploadThemeDataProps {
    uploadColor?: Color
    borderRadius?: number | string
    width?: number | string
    border?: Border
    height?: number | string
}

export default class UploadThemeData {
    constructor(data?: IUploadThemeDataProps) {
        if (data) {
            if (data.uploadColor) this.uploadColor = data.uploadColor
            if (!isNil(data.borderRadius)) this.borderRadius = data.borderRadius
            if (!isNil(data.width)) this.width = data.width
            if (!isNil(data.height)) this.height = data.height
            if (data.border) this.border = data.border
        }
    }

    public uploadColor?: Color

    public borderRadius?: number | string

    public width?: number | string

    public height: number | string = 172

    public border: Border = Border.all({
        width: 1,
        style: BorderStyle.dashed,
        color: Color.fromRGB(217, 217, 217)
    })
}