import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Button, Image } from 'components'
import { GlobalView } from 'src/utils/node'
import { getRatioUnit } from 'src/components/lib/utils'

const DivList = styled.div`
    width: ${getRatioUnit(240)};
    border: solid ${getRatioUnit(1)} #eaeaea;
    box-shadow: 0 0 ${getRatioUnit(17)} rgba(0, 0, 0, 0.0);
    margin: 0 ${getRatioUnit(20)} 0 0;
    width: ${getRatioUnit(240)};
    margin-right: ${getRatioUnit(15)};
    flex-shrink: 0;
`
const DivListName = styled.div`
    height: ${getRatioUnit(95)};
    padding: ${getRatioUnit(41)} ${getRatioUnit(30)} 0;
    font-size: ${getRatioUnit(18)};
    line-height: ${getRatioUnit(54)};
    color: #000;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const DivQrcode = styled.div`
    height: ${getRatioUnit(114)};
    width: ${getRatioUnit(114)};
    background: #f4f4f4;
    margin: auto;
    position: relative;
    border-radius: ${getRatioUnit(10)};
`

const DivImg = styled(Image)`
    width: ${getRatioUnit(114)};
    height: ${getRatioUnit(114)};
`

const DivText = styled.div`
   padding: ${getRatioUnit(20)} ${getRatioUnit(30)};
`

const DivBtn = styled(Button)`
    margin-top: ${getRatioUnit(20)};
    width: 100%;
`

const DivLine = styled.div`
    height: ${getRatioUnit(1)};
    background: #f0f0ef;
    margin: ${getRatioUnit(24)} ${getRatioUnit(20)} 0 ${getRatioUnit(20)};
`

export default class DiyType extends PureComponent<any, any> {

    public render(): JSX.Element {
        return (
            <GlobalView >
                <div
                    className="flex"
                    style={{ marginTop: getRatioUnit(40) }}
                >
                    <DivList >
                        <DivListName>页面设计</DivListName>
                        <DivQrcode>
                            <DivImg src={require('../../assets/app_design.png')} />
                        </DivQrcode>
                        <DivLine />
                        <DivText >
                            <div>分为商城首页与自定义页面两种，自定义页面可以做为文章或商城主题活动使用。</div>
                            <DivBtn mold="primary">进入</DivBtn>
                        </DivText>
                    </DivList>
                    <DivList>
                        <DivListName>小程序设置</DivListName>
                        <DivQrcode>
                            <DivImg src={require('../../assets/app_setting.png')} />
                        </DivQrcode>
                        <DivLine />
                        <DivText >
                            <div> 小程序发布前，AppID、AppSecret为必填配置，微信支付以为客服为可选功能。</div>
                            <DivBtn mold="primary">进入</DivBtn>
                        </DivText>
                    </DivList>
                    <DivList>
                        <DivListName>首页广告</DivListName>
                        <DivQrcode>
                            <DivImg src={require('../../assets/app_photo.png')} />
                        </DivQrcode>
                        <DivLine />
                        <DivText >
                            <div>首页广告为弹出式，进商城首页时强出，先设置好广告，在商城首页的配置中引用。</div>
                            <DivBtn mold="primary">进入</DivBtn>
                        </DivText>
                    </DivList>
                    <DivList>
                        <DivListName>底部导航</DivListName>
                        <DivQrcode>
                            <DivImg src={require('../../assets/app_nav.png')} />
                        </DivQrcode>
                        <DivLine />
                        <DivText>
                            <div>底部导航比较特别，改动后需重新提交微信审核，并且审核通过后才可生效。</div>
                            <DivBtn mold="primary">进入</DivBtn>
                        </DivText>
                    </DivList>
                </div>
            </GlobalView>
        )
    }

}