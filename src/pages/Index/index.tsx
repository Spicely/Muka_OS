import React, { Component } from 'react'
import { Tooltip } from 'antd'
import styled, { css } from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, NavBar } from 'components'
import http, { httpUtils, getTitle } from 'src/utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IRouter } from 'src/store/reducers/router'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IIcons } from 'src/store/reducers/icons'
import { IInitState } from 'src/store/state'
import { IconThemeData, NavBarThemeData, Color, ThemeData } from 'src/components/lib/utils'
import { GlobalView } from 'src/utils/node'
import baseIcon from '../../assets/base_icon.png'
import { SET_SPINLOADING_DATA } from 'src/store/action'

interface IProps {
    lastIds: string[]
    router: IRouter[]
    jurisd: IJurisd[]
    icons: IIcons[]
}



interface IState {
    data: {
        loanAll: number
        smsAll: number
        todayLoan: number
        todaySms: number
        todayUser: number
        userAll: number
        yesterLoan: number
        yesterSms: number
        yesterUser: number
        infoAll: number
        yesterInfo: number
        todayInfo: number
        title: string
    }
}

const iconTheme = new IconThemeData({
    size: 16
})

const navBarTheme = new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })

interface IStylePrpos {
    el?: boolean
    er?: boolean
}

const HomeListBox = styled.div<IStylePrpos>`
    padding: 0 ${() => 20 * ThemeData.ratio + ThemeData.unit};
    border: ${() => 1 * ThemeData.ratio + ThemeData.unit} solid #f0f0f0;
    border-radius: ${({ theme }) => theme.borderRadius * ThemeData.ratio + ThemeData.unit};
    background-color: #fff;
    ${({ el, er }) => {
        if (el) return css` margin-right: ${5 * ThemeData.ratio + ThemeData.unit};`
        if (er) return css` margin-left: ${5 * ThemeData.ratio + ThemeData.unit};`
    }}
`
interface IHomeListSurveyProps {
    not?: boolean
}

const HomeListSurvey = styled.ul<IHomeListSurveyProps>`
    li {
        text-align: center;
        padding: ${({ not }) => (not ? 20 : 0) * ThemeData.ratio + ThemeData.unit} 0 ${() => 20 * ThemeData.ratio + ThemeData.unit} 0;
    }
`

const HomeListTitle = styled.div`
    font-size: ${() => 14 * ThemeData.ratio + ThemeData.unit};
    color: #333;
    font-weight: bold;
`
interface IHomeListSmallProps {
    tel?: boolean
}
const HomeListSmall = styled.div<IHomeListSmallProps>`
    font-size: ${() => 13 * ThemeData.ratio + ThemeData.unit};
    ${({ tel }) => {
        if (tel) return css`color:#666;`
        else return css`color: #999;`
    }}
    
`
interface IHomeListNumberProps {
    wat?: boolean
    tol?: boolean
}
const HomeListNumber = styled.div<IHomeListNumberProps>`
    margin-top: ${() => 20 * ThemeData.ratio + ThemeData.unit};
    margin-bottom: ${() => 15 * ThemeData.ratio + ThemeData.unit};
    font-size: ${() => 30 * ThemeData.ratio + ThemeData.unit};
    ${({ wat, tol }) => {
        if (wat) return css`color:#26b594;`
        if (tol) return css`color:#666;`
        else return css`color: #fe5722;`
    }}
   
`

const HomeMarTop = styled.div`
    margin-top: ${() => 20 * ThemeData.ratio + ThemeData.unit};
`

interface IHomePadProps {
    pd?: boolean
}

const HomePad = styled.div<IHomePadProps>`
    ${({ pd }) => {
        if (pd) return css`padding: ${0 * ThemeData.ratio + ThemeData.unit} 0 ${20 * ThemeData.ratio + ThemeData.unit} 0;`
        else return css`padding: ${40 * ThemeData.ratio + ThemeData.unit} 0;`
    }}
`

const HomeActivity = styled.li`
    width: 25%;
    cursor: pointer;
    margin-right:  ${() => 10 * ThemeData.ratio + ThemeData.unit};
    height:  ${() => 130 * ThemeData.ratio + ThemeData.unit};
    &:last-child {
        margin-right: 0;
    }

    &:nth-child(1) {
        background-color: #fe7577;
    }

    &:nth-child(2) {
        background-color: #f8b055;
    }

    &:nth-child(3) {
        background-color: #3eacd8;
    }

    &:nth-child(4) {
        background-color: #42cd41;
    }

    &:nth-child(5) {
        background-color: #b08fd5;
    }
`

const HomeActivityTitle = styled.div`
    margin-top: ${() => 34 * ThemeData.ratio + ThemeData.unit};
    font-size: ${() => 20 * ThemeData.ratio + ThemeData.unit};
    color: #fff;
`

const HomeActivityLabel = styled.div`
    margin-top: ${() => 15 * ThemeData.ratio + ThemeData.unit};
    font-size: ${() => 14 * ThemeData.ratio + ThemeData.unit};
    color: #fff;
`

class Index extends Component<IProps & DispatchProp, IState> {

    private title = getTitle('/')

    public state: IState = {
        data: {
            loanAll: 0,
            smsAll: 0,
            todayLoan: 0,
            todaySms: 0,
            todayUser: 0,
            userAll: 0,
            yesterLoan: 0,
            yesterSms: 0,
            yesterUser: 0,
            infoAll: 0,
            yesterInfo: 0,
            todayInfo: 0,
            title: '',
        }
    }

    public render(): JSX.Element {
        const { loanAll, smsAll, userAll, todayLoan, todaySms, yesterLoan, yesterSms, yesterUser, todayUser, infoAll, yesterInfo, todayInfo, title } = this.state.data
        return (
            <GlobalView notColor>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                />
                <HomeListBox>
                    <NavBar
                        left={<HomeListTitle>运营概况</HomeListTitle>}
                        // right={<span style={{ color: '#999' }}>系统版本:v9.1[20190811]</span>}
                        theme={navBarTheme}
                    />
                    <HomeListSurvey className="flex" not>
                        <li className="flex_1">
                            <Tooltip title="今日借款订单数"><b>今日借款订单数</b></Tooltip>
                            <HomeListNumber className="flex_center">{todayLoan}</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：{yesterLoan}</HomeListSmall>
                        </li>
                        <li className="flex_1">
                            <Tooltip title="今日资料审核数"><b>今日资料审核数</b></Tooltip>
                            <HomeListNumber className="flex_center">{todayInfo}</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：{yesterInfo}</HomeListSmall>
                        </li>
                        <li className="flex_1">
                            <Tooltip title="今日用户注册数"><b>今日用户注册数</b></Tooltip>
                            <HomeListNumber className="flex_center">{todayUser}</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：{yesterUser}</HomeListSmall>
                        </li>
                        <li className="flex_1">
                            <Tooltip title="今日短信发送量"><b>今日短信发送量</b></Tooltip>
                            <HomeListNumber className="flex_center">{todaySms}</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：{yesterSms}</HomeListSmall>
                        </li>
                    </HomeListSurvey>
                </HomeListBox>
                <HomeMarTop>
                    <HomeListBox>
                        <NavBar
                            left={<HomeListTitle>数据统计</HomeListTitle>}
                            theme={navBarTheme}
                            divider={false}
                        />
                        <HomePad as="ul" className="flex" pd>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">总借款订单数</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">{loanAll}</HomeActivityLabel>
                            </HomeActivity>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">总资料审核数</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">{infoAll}</HomeActivityLabel>
                            </HomeActivity>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">总用户注册数</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">{userAll}</HomeActivityLabel>
                            </HomeActivity>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">总短信发送量</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">{smsAll}</HomeActivityLabel>
                            </HomeActivity>
                        </HomePad>
                    </HomeListBox>
                </HomeMarTop>
                <HomeMarTop>
                    <HomeListBox>
                        <NavBar
                            left={<HomeListTitle>平台公告</HomeListTitle>}
                            theme={navBarTheme}
                            divider={false}
                        />
                        <HomePad as="ul" className="flex" pd >
                            <div style={{ padding: '0 0.7rem' }} dangerouslySetInnerHTML={{ __html: title }}></div>
                        </HomePad>
                    </HomeListBox>
                </HomeMarTop>
            </GlobalView>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private getData = async () => {
        const { dispatch } = this.props
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const { data } = await http('index')
            this.setState({
                data
            })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            httpUtils.verify(e)
        }
    }

}

export default connect(
    ({ routers, router, jurisd, icons }: IInitState) => ({
        routers,
        router,
        jurisd,
        icons
    })
)(Index as any)