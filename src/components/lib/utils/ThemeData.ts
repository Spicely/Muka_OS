import { isNil } from 'lodash'
import Color from './Color'
import ButtonThemeData from './ButtonThemeData'
import CarouselThemeData from './CarouselThemeData'
import IconThemeData from './IconThemeData'
import InputThemeData from './InputThemeData'
import MenuThemeData from './MenuThemeData'
import RadioThemeData from './RadioThemeData'
import TabBarThemeData from './TabBarThemeData'
import NavBarThemeData from './NavBarThemeData'
import DialogThemeData from './DialogThemeData'
import TagThemeData from './TagThemeData'
import AlertThemeData from './AlertThemeData'
import ColorsThemeData from './ColorsThemeData'
import UploadThemeData from './UploadThemeData'

export type IUnit = 'px' | 'rem'

interface IThemeDataProps {
    primarySwatch?: Color
    errorColor?: Color
    successColor?: Color
    warningColor?: Color
    dividerColor?: Color
    fontColor?: Color
    buttonTheme?: ButtonThemeData
    iconTheme?: IconThemeData
    borderRadius?: number
    dialogColor?: number
    fontSize?: number
    menuGroupHeight?: number
    inputTheme?: InputThemeData
    menuTheme?: MenuThemeData
    radioTheme?: RadioThemeData
    tabBarTheme?: TabBarThemeData
    alertTheme?: AlertThemeData
    carouselTheme?: CarouselThemeData
    colorsTheme?: ColorsThemeData
    uploadTheme?: UploadThemeData
}

export default class ThemeData {

    constructor(data?: IThemeDataProps) {
        if (data) {
            if (data.primarySwatch) this.primarySwatch = data.primarySwatch
            if (data.buttonTheme) this.buttonTheme = data.buttonTheme
            if (data.iconTheme) this.iconTheme = data.iconTheme
            if (!isNil(data.borderRadius)) this.borderRadius = data.borderRadius
            if (!isNil(data.fontSize)) this.fontSize = data.fontSize
            if (data.errorColor) this.errorColor = data.errorColor
            if (data.dividerColor) this.dividerColor = data.dividerColor
            if (data.menuGroupHeight) this.menuGroupHeight = data.menuGroupHeight
            if (data.fontColor) this.fontColor = data.fontColor
            if (data.inputTheme) this.inputTheme = data.inputTheme
            if (data.menuTheme) this.menuTheme = data.menuTheme
            if (data.radioTheme) this.radioTheme = data.radioTheme
            if (data.tabBarTheme) this.tabBarTheme = data.tabBarTheme
            if (data.alertTheme) this.alertTheme = data.alertTheme
            if (data.carouselTheme) this.carouselTheme = data.carouselTheme
            if (data.successColor) this.successColor = data.successColor
            if (data.warningColor) this.warningColor = data.warningColor
            if (data.colorsTheme) this.colorsTheme = data.colorsTheme
            if(data.uploadTheme) this.uploadTheme = data.uploadTheme
        }
    }

    public static unit: IUnit = 'rem'

    public static ratio: number = 0.05

    public primarySwatch: Color = Color.fromRGBO(6, 147, 227, 1)

    public errorColor: Color = Color.fromRGBO(250, 0, 0, 1)

    public successColor: Color = Color.fromRGB(82, 196, 26)

    public warningColor: Color = Color.fromRGB(250, 173, 20)

    public dividerColor: Color = Color.fromRGB(230, 230, 230)

    public fontColor: Color = Color.fromRGB(0, 0, 0)

    public fontSize: number = 12

    public dialogTheme: DialogThemeData = new DialogThemeData()

    public buttonTheme: ButtonThemeData = new ButtonThemeData()

    public inputTheme: InputThemeData = new InputThemeData()

    public iconTheme: IconThemeData = new IconThemeData()

    public tabBarTheme: TabBarThemeData = new TabBarThemeData()

    public menuTheme: MenuThemeData = new MenuThemeData()

    public radioTheme: RadioThemeData = new RadioThemeData()

    public navBarTheme: NavBarThemeData = new NavBarThemeData()

    public carouselTheme: CarouselThemeData = new CarouselThemeData()

    public tagTheme: TagThemeData = new TagThemeData()

    public alertTheme: AlertThemeData = new AlertThemeData()

    public colorsTheme: ColorsThemeData = new ColorsThemeData()

    public uploadTheme: UploadThemeData = new UploadThemeData()

    public menuGroupHeight: number = 45

    public unit: IUnit = 'rem'

    public ratio: number = 0.05

    public borderRadius: number = 0
}