import React, { Component } from 'react'
import { Tooltip } from 'antd'
import styled, { css } from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, NavBar, Icon } from 'components'
import http, { httpUtils, getTitle } from 'src/utils/axios'
import echarts, { ECharts } from 'echarts'
import { connect } from 'react-redux'
import { IRouter } from 'src/store/reducers/router'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IIcons } from 'src/store/reducers/icons'
import { IInitState } from 'src/store/state'
import { IconThemeData, NavBarThemeData, Color, ThemeData } from 'src/components/lib/utils'
import { GlobalView } from 'src/utils/node'
import baseIcon from '../../assets/base_icon.png'

interface IProps  {
    lastIds: string[]
    router: IRouter[]
    jurisd: IJurisd[]
    icons: IIcons[]
}

interface IState {
    classifyVisible: boolean
    dialogName: string
    lastIds: string[]
    parents: { label: string, value: string }[]
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

const HomeItems = styled.div`
    cursor: pointer;
    ${() => css`width:calc(33.3333% - ${10 * ThemeData.ratio + ThemeData.unit});`};
    padding: ${() => 7 * ThemeData.ratio + ThemeData.unit} ${() => 14 * ThemeData.ratio + ThemeData.unit};
    display: inline-block;
    vertical-align: top;
    background: #f7f7f7;
    margin-right: ${() => 10 * ThemeData.ratio + ThemeData.unit};
    margin-top: ${() => 10 * ThemeData.ratio + ThemeData.unit};
`
const HomeItemsTitle = styled.div`
    padding-top:  ${() => 7 * ThemeData.ratio + ThemeData.unit};
    font-size:  ${() => 16 * ThemeData.ratio + ThemeData.unit};
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
`

interface IHomeItemsIconProps {
    ex: number
}
const HomeItemsIcon = styled.div<IHomeItemsIconProps>`
    height: ${() => 60 * ThemeData.ratio + ThemeData.unit};
    width: ${() => 60 * ThemeData.ratio + ThemeData.unit};
    margin-right: ${() => 14 * ThemeData.ratio + ThemeData.unit};
    background-image: url(${baseIcon});

    ${({ ex }) => {
        if (ex === 1) return css`background-position: 0 ${-60 * ThemeData.ratio + ThemeData.unit};`
        if (ex === 2) return css`background-position: ${-70 * ThemeData.ratio + ThemeData.unit} ${-60 * ThemeData.ratio + ThemeData.unit};`
        if (ex === 3) return css`background-position: ${-140 * ThemeData.ratio + ThemeData.unit} ${-60 * ThemeData.ratio + ThemeData.unit};`
        if (ex === 4) return css`background-position: ${-210 * ThemeData.ratio + ThemeData.unit} ${-60 * ThemeData.ratio + ThemeData.unit};`
        if (ex === 5) return css`background-position: ${-280 * ThemeData.ratio + ThemeData.unit} ${-60 * ThemeData.ratio + ThemeData.unit};`
        if (ex === 6) return css`background-position: ${-350 * ThemeData.ratio + ThemeData.unit} ${-60 * ThemeData.ratio + ThemeData.unit};`
    }}
`
const HomeItemsLabel = styled.div`
    margin-top: ${() => 6 * ThemeData.ratio + ThemeData.unit};
    font-size: ${() => 12 * ThemeData.ratio + ThemeData.unit};
    color: #999;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
`

const HomeActivity = styled.li`
    width: 20%;
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

class Index extends Component<IProps, IState> {

    private chart?: ECharts

    private title = getTitle('/')

    public render(): JSX.Element {
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
                        right={<span style={{ color: '#999' }}>系统版本:v9.1[20190811]</span>}
                        theme={navBarTheme}
                    />
                    <HomeListSurvey className="flex" not>
                        <li className="flex_1">
                            <b>今日有效订单数<Tooltip title="已付款且未被取消的订单"><Icon icon="ios-help-circle" theme={iconTheme} /></Tooltip></b>
                            <HomeListNumber className="flex_center">0</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：0</HomeListSmall>
                        </li>
                        <li className="flex_1">
                            <b>今日无效订单数<Tooltip title="已取消的订单"><Icon icon="ios-help-circle" theme={iconTheme} /></Tooltip></b>
                            <HomeListNumber className="flex_center">0</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：0</HomeListSmall>
                        </li>
                        <li className="flex_1">
                            <b>今日支付金额（元）<Tooltip title="有效订单实际支付金额"><Icon icon="ios-help-circle" theme={iconTheme} /></Tooltip></b>
                            <HomeListNumber className="flex_center">0</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：0</HomeListSmall>
                        </li>
                        <li className="flex_1">
                            <b>今日退款金额（元）<Tooltip title="退款成功订单金额"><Icon icon="ios-help-circle" theme={iconTheme} /></Tooltip></b>
                            <HomeListNumber className="flex_center">0</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：0</HomeListSmall>
                        </li>
                        <li className="flex_1">
                            <b>有效订单金额（元）<Tooltip title="已完成订单平台净收入（扣除平台优惠补贴和分销员佣金）"><Icon icon="ios-help-circle" theme={iconTheme} /></Tooltip></b>
                            <HomeListNumber className="flex_center">0</HomeListNumber>
                            <HomeListSmall className="flex_center">昨日：0</HomeListSmall>
                        </li>
                    </HomeListSurvey>
                </HomeListBox>
                <HomeMarTop className="flex">
                    <HomeListBox className="flex_1" el>
                        <NavBar
                            left={<HomeListTitle>待处理项</HomeListTitle>}
                            theme={navBarTheme}
                        />
                        <HomeListSurvey className="flex">
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" wat>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>超时未接单</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" wat>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>超时未抢单</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" wat>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>维权订单</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" wat>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>商家审核</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" wat>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>商家提现</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" wat>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>分销提现</HomeListSmall>
                            </li>
                        </HomeListSurvey>
                    </HomeListBox>
                    <HomeListBox className="flex_1" er>
                        <NavBar
                            left={<HomeListTitle>数据统计</HomeListTitle>}
                            theme={navBarTheme}
                        />
                        <HomeListSurvey className="flex">
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" tol>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>今日新增会员</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" tol>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>今日新增商家</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" tol>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>会员总数</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" tol>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>商家总数</HomeListSmall>
                            </li>
                            <li className="flex_1">
                                <HomeListNumber className="flex_center" tol>0</HomeListNumber>
                                <HomeListSmall className="flex_center" tel>商品总数</HomeListSmall>
                            </li>
                        </HomeListSurvey>
                    </HomeListBox>
                </HomeMarTop>
                <HomeMarTop className="flex">
                    <HomeListBox className="flex_1" el>
                        <NavBar
                            left={<HomeListTitle>待处理项</HomeListTitle>}
                            theme={navBarTheme}
                        />
                        <HomePad>
                            <HomeItems>
                                <div className="flex">
                                    <HomeItemsIcon ex={1} />
                                    <div>
                                        <HomeItemsTitle>订单处理</HomeItemsTitle>
                                        <HomeItemsLabel>快速处理当日订单</HomeItemsLabel>
                                    </div>
                                </div>
                            </HomeItems>
                            <HomeItems>
                                <div className="flex">
                                    <HomeItemsIcon ex={2} />
                                    <div>
                                        <HomeItemsTitle>订单处理</HomeItemsTitle>
                                        <HomeItemsLabel>快速处理当日订单</HomeItemsLabel>
                                    </div>
                                </div>
                            </HomeItems>
                            <HomeItems>
                                <div className="flex">
                                    <HomeItemsIcon ex={3} />
                                    <div>
                                        <HomeItemsTitle>订单处理</HomeItemsTitle>
                                        <HomeItemsLabel>快速处理当日订单</HomeItemsLabel>
                                    </div>
                                </div>
                            </HomeItems>
                            <HomeItems>
                                <div className="flex">
                                    <HomeItemsIcon ex={4} />
                                    <div>
                                        <HomeItemsTitle>订单处理</HomeItemsTitle>
                                        <HomeItemsLabel>快速处理当日订单</HomeItemsLabel>
                                    </div>
                                </div>
                            </HomeItems>
                            <HomeItems>
                                <div className="flex">
                                    <HomeItemsIcon ex={5} />
                                    <div>
                                        <HomeItemsTitle>订单处理</HomeItemsTitle>
                                        <HomeItemsLabel>快速处理当日订单</HomeItemsLabel>
                                    </div>
                                </div>
                            </HomeItems>
                            <HomeItems>
                                <div className="flex">
                                    <HomeItemsIcon ex={6} />
                                    <div>
                                        <HomeItemsTitle>订单处理</HomeItemsTitle>
                                        <HomeItemsLabel>快速处理当日订单</HomeItemsLabel>
                                    </div>
                                </div>
                            </HomeItems>
                        </HomePad>
                    </HomeListBox>
                    <HomeListBox className="flex_1" er>
                        <NavBar
                            left={<HomeListTitle>近7日交易趋势</HomeListTitle>}
                            theme={navBarTheme}
                        />
                        <div id="main" style={{ width: '100%', height: '12.4rem' }} />
                    </HomeListBox>
                </HomeMarTop>
                <HomeMarTop>
                    <HomeListBox>
                        <NavBar
                            left={<HomeListTitle>待处理项</HomeListTitle>}
                            theme={navBarTheme}
                            divider={false}
                        />
                        <HomePad as="ul" className="flex" pd>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">优惠券</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">定向发券，精准营销</HomeActivityLabel>
                            </HomeActivity>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">优惠活动</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">限时优惠，促进消费</HomeActivityLabel>
                            </HomeActivity>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">会员积分</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">小积分大作用，提示用户忠诚度</HomeActivityLabel>
                            </HomeActivity>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">会员储值</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">用户沉淀，持续消费</HomeActivityLabel>
                            </HomeActivity>
                            <HomeActivity>
                                <HomeActivityTitle className="flex_center">三级分销</HomeActivityTitle>
                                <HomeActivityLabel className="flex_center">用户变销售，订单涨涨涨</HomeActivityLabel>
                            </HomeActivity>
                        </HomePad>
                    </HomeListBox>
                </HomeMarTop>
            </GlobalView>
        )
    }

    public componentDidMount() {
        const main: any = document.getElementById('main')
        if (main) {
            this.chart = echarts.init(main)
            this.chart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['11-01', '11-02', '11-03', '11-04', '11-05', '11-06', '11-07']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [0, 0, 0, 0, 0, 0, 0],
                    type: 'line'
                }]
            })
            window.addEventListener('resize', this.handleResize)
        }
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    private handleResize = () => {
        this.chart && this.chart.resize()
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