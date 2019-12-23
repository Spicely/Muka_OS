import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Image, Divider } from 'components'
import { GlobalView } from 'src/utils/node'
import { getRatioUnit, ButtonThemeData, Color, Border, BorderStyle } from 'src/components/lib/utils'

const EditList = styled.div`
    width: ${getRatioUnit(104)};
    margin: ${getRatioUnit(30)} ${getRatioUnit(14)};
    margin-top: 0;
    text-align: center;
    padding: ${getRatioUnit(16)} 0;
    display: inline-block;
    :nth-child(1) {
        background: #e9fae4;
        color: #7ecf6b;
    }
    :nth-child(2) {
        background: #fffbdf;
        color: #ffb243;
    }
`
const EditP = styled.p`
    line-height: ${getRatioUnit(44)};
    font-size: ${getRatioUnit(14)};
    margin-bottom: ${getRatioUnit(12)};
`

export default class EditItem extends PureComponent<any, any> {

    public render(): JSX.Element {
        return (
            <GlobalView >
                <div
                    className="flex"
                    style={{ marginTop: getRatioUnit(40) }}
                >
                    <EditList>
                        <EditP>首页</EditP>
                        <Link to="/diy/edit/home">
                            <Button
                                theme={new ButtonThemeData({
                                    border: Border.all({
                                        width: 1,
                                        color: Color.fromRGB(126, 207, 107),
                                        style: BorderStyle.solid
                                    }),
                                    color: Color.fromRGB(126, 207, 107),
                                    buttonColor: Color.fromRGB(126, 207, 107),
                                })}
                            >
                                进入
                            </Button>
                        </Link>
                    </EditList>
                    <EditList>
                        <EditP>个人中心</EditP>
                        <Link to="">
                            <Button
                                theme={new ButtonThemeData({
                                    border: Border.all({
                                        width: 1,
                                        color: Color.fromRGB(255, 178, 67),
                                        style: BorderStyle.solid
                                    }),
                                    color: Color.fromRGB(255, 178, 67),
                                    buttonColor: Color.fromRGB(255, 178, 67),
                                })}
                            >
                                进入
                            </Button>
                        </Link>
                    </EditList>
                </div>
            </GlobalView>
        )
    }
}