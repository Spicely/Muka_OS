import React, { Component, ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Modal, message } from 'antd'
import { cloneDeep, set, get } from 'lodash'
import { LayoutNavBar, LayoutActions, LayoutLeft } from 'src/layouts/PageLayout'
import { IInitState, MukaOS, DiyComItem } from 'src/store/state'
import { Alert, Button, Carousel, Drag, Icon, Image, Label, LabelHeader, NavBar, TabBar, Form, SearchBar, Upload, Notice, Input, Grid, Divider } from 'components'
import http, { IRresItem, getTitle } from 'src/utils/axios'
import { connect, DispatchProp } from 'react-redux'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { GlobalView } from 'src/utils/node'
import { NavBarThemeData, Color, getUnit, Border, BorderStyle, TabBarThemeData, ButtonThemeData, IconThemeData } from 'src/components/lib/utils'
import { IComponentData } from 'src/store/reducers/componentData'
import styled, { css, createGlobalStyle } from 'styled-components'
import EditComponent from './editComponent'
import { SET_COMPONENT_DATA, SET_SPINLOADING_DATA, SET_DIY_COM_DATA } from 'src/store/action'
import { imageModal, goodsModal, shopModal } from 'src/utils'

const defImg = 'http://img.maixiaobu.cn/mistep/cbd/icon/d9ba9b19d0fb8bee0305dfd6767efb7.jpg'
const slideIcon = 'http://img.maixiaobu.cn/mistep/cbd/icon/e9157ec287904e02f02c03fdc40ef77.png'

const { confirm } = Modal

interface IProps extends DispatchProp {
    componentData: IComponentData
    diyCom: MukaOS.DiyCom[]
}

interface ITabBarValue {
    label: string
    content: JSX.Element | string
    data: string
}

interface IComponents {
    component: IComponentType
    props: any
    edit: boolean
}

type IComponentType = 'TabBar' | 'NavBar' | 'Carousel' | 'SearchBar' | 'Notice' | 'GoodsList' | 'Navigation' | 'Slide' | 'Divider' | 'Advertising' | ''

type typeList = 'LForm' | 'Carousel'

interface IState {
    components: IComponents[]
    componentName: string
    selected: number
    type: typeList
    icons: any[]
    links: any[]
    images: any[]
    searchSelect: boolean
    uploadDialog: boolean
    imagesDialog: boolean
    pageCurrent: number
    total: number
    linkDialog: boolean
}

const GlobalDiyStyle = createGlobalStyle`
    .tab_VE_line {
        position: relative;
        &::after {
            content: '';
            right: 0;
            height: 100%;
            top: 0;
            width: ${getUnit(1)};
            background: ${Color.fromRGB(230, 230, 230).toString()};
            position: absolute;
        }
    }
`

const TplPhone = styled.div`
    background: #fff;
    ${() => css`${Border.all({ width: 1, style: BorderStyle.solid, color: Color.fromRGB(220, 220, 220) }).toString()}`};
    cursor: move;
    transition: transform .5s 0.1s;
    border-radius: ${getUnit(15)};
    height: ${getUnit(550)};
    width: ${getUnit(310)};
    padding: 0 ${getUnit(5)} ${getUnit(5)} ${getUnit(5)};
    overflow: hidden;
`

const TplTit = styled.div`
    height: ${getUnit(24)};
    text-align: center;
    span {
        display: inline-block;
        margin-top: ${getUnit(12)};
        background: #cfcfcf;
    }
`

const TplTitCri = styled.span`
    width: ${getUnit(4)};
    height: ${getUnit(4)};
    border-radius: 100%;
    margin-right: ${getUnit(10)};
`

const TplTitLon = styled.span`
    width: ${getUnit(48)};
    height: ${getUnit(4)};
    border-radius: ${getUnit(7)};
`

const TplScrollView = styled(Drag.Box)`
   ${() => css`${Border.all({ width: 1, style: BorderStyle.solid, color: Color.fromRGB(220, 220, 220) }).toString()}`};
    border-radius: ${getUnit(5)};
    overflow: auto;
`

const EditBtn = styled(Button) <any>`
    margin-right: ${getUnit(5)};
    margin-top: ${getUnit(6)};
    :nth-of-type(4n) {
        margin-right: 0
    }
`

const ComponentPropsVIew = styled.div`
    width: ${getUnit(360)};
    background: #fff;
    height: 100%;
    padding: ${getUnit(10)};
    overflow-y: auto;
`

const ComponentLabel = styled.div`
    width: ${getUnit(70)};
`

const ItemBoxView = styled.div`
    border: ${getUnit(1)} dotted #ccc;
    padding: ${getUnit(10)};
    margin-bottom: ${getUnit(10)};
    cursor: pointer;
    position: relative;
`

const CloseIcon = styled(Icon)`
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
`

const ItemImgBox = styled.div`
    width: ${getUnit(80)};
    height: ${getUnit(80)};
    border: ${getUnit(1)} dotted #ccc;
    margin-right: ${getUnit(10)};
    overflow:hidden;
`

interface IGoodsViewProps {
    lineNum: number
}

const GoodsView = styled.div<IGoodsViewProps>`
    display: inline-block;
    vertical-align:top;
    margin-top: ${getUnit(5)};
    ${({ lineNum }) => {
        if (lineNum === 1) {
            return css`
                width: 100%;
                margin-top: ${getUnit(8)};
                &:nth-child(even) {
                    margin-right: ${getUnit(0)};
                }
            `
        }
        if (lineNum === 2) {
            return css`
                width: ${`calc(50% - ${getUnit(2)})`};
                margin-right: ${getUnit(2)};
                &:nth-child(even) {
                    margin-right: ${getUnit(0)};
                }
            `
        }
        if (lineNum === 3) {
            return css`
                width: ${`calc(33.3% - ${getUnit(2)})`};
                margin-right: ${getUnit(3)};
                &:nth-child(3n) {
                    margin-right: ${getUnit(0)};
                }
            `
        }
    }}
`

const GoodsName = styled.div`
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`
interface IGoodsImgProps {
    url: string
}
const GoodsImg = styled.div<IGoodsImgProps>`
    width: 100%;
    padding-top: 100%;
    ${({ url }) => {
        return css`background:url(${url}) center;`
    }}
    background-size: auto 100%;
`

const GoodsVImg = styled.div<IGoodsImgProps>`
width: 100%;
padding-top: 100%;
${({ url }) => {
        return css`background:url(${url}) center no-repeat;`
    }}
background-size:  100% auto;
`

const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
}

interface IParams {
    page: 'home'
}

class AppsDesign extends Component<IProps & RouteComponentProps<IParams>, any> {
    public state: any = {
        components: [],
        links: [],
        icons: [],
        images: [],
        total: 0,
        componentName: '',
        selected: 0,
        type: 'LForm',
        searchSelect: false,
        uploadDialog: false,
        imagesDialog: false,
        pageCurrent: 1,
        linkDialog: false
    }

    private index: number = 0

    private listIndex: number = 0

    private selectIndex: number = 0

    private tagName: string = ''

    private field: string = ''

    private componentType: IComponentType = ''

    private exFun: IFormFun | null = null

    private acFun: IFormFun | null = null

    private title = getTitle('/diy')

    private loading: boolean = false

    public render(): JSX.Element {
        const { componentData } = this.props
        return (
            <GlobalView>
                <GlobalDiyStyle />
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={<Button mold="primary" async onClick={this.handleSave}>保存</Button>}
                />
                <LayoutLeft>
                    {this.getComponentView()}
                </LayoutLeft>
                <LayoutActions>
                    {this.getActionsView()}
                </LayoutActions>
                <Alert
                    inheritColor
                    title="小程序说明"
                    message="小程序是微信小程序的管理后台，可在此设置个性化首页排版、基本设置、设置微信支付、审核发布。"
                />
                <div className="flex flex_center" style={{ marginTop: '2rem' }}>
                    <TplPhone className="flex_column">
                        <TplTit onClick={this.handleTabComponent.bind(this, 'Page')}>
                            <TplTitCri />
                            <TplTitLon />
                        </TplTit>
                        <TplScrollView
                            className="flex_1"
                            style={{ background: componentData.pageColor }}
                            onDragSuccess={this.handleDragSuccess}
                        >
                            <DragDropContext onDragEnd={this.onDragEnd.bind(this, 'null')}>
                                <Droppable droppableId="droppable" >
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{ height: '100%' }}
                                        >
                                            {(componentData.pageProps || []).map((item: IComponents, index: number) => (
                                                <Draggable key={index} draggableId={index.toString()} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            {this.getComponentsView(item, index)}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        </TplScrollView>
                    </TplPhone>
                </div>
            </GlobalView>
        )
    }

    private getImage = async () => {
        try {
            this.loading = true
            const data: IRresItem = await http('/admin/image/globalFind', {
                total: 1
            })
            this.loading = false
            this.setState({
                images: [...data.data.images],
                total: data.data.total
            })
        } catch (msg) {
            this.loading = false
            console.log(msg)
        }
    }

    public componentDidMount() {
        this.getData()
    }

    private getData = async () => {
        const { dispatch } = this.props
        try {
            dispatch({ type: SET_SPINLOADING_DATA, data: true })
            const { data } = await http('/admin/diy-menu', {}, { method: 'GET' })
            const res = await http('/admin/diy', { path: 'home' }, { method: 'GET' })
            dispatch({ type: SET_COMPONENT_DATA, data: res.data })
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            dispatch({ type: SET_DIY_COM_DATA, data: data })
        } catch (e) {
            dispatch({ type: SET_SPINLOADING_DATA, data: false })
            message.error(e.toString())
        }
    }

    private setCarouselUrl = (url: string, field: string, dialogName: 'imagesDialog') => {
        const { componentData, setComponentData }: any = this.props
        const right = componentData.pageProps[this.index].props[field]
        right[this.listIndex].url = url
        this.setState({
            [dialogName]: false
        }, () => {
            setComponentData(cloneDeep(componentData))
        })
    }

    private getComponentsView(data: IComponents, index: number) {
        switch (data.component) {
            case 'NavBar': return (
                <EditComponent
                    edit={data.edit}
                    key={index}
                    onClick={this.handleEdit.bind(this, data, index)}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <NavBar {...data.props} theme={new NavBarThemeData({ width: '100%' })} />
                </EditComponent>
            )
            case 'SearchBar': return (
                <EditComponent
                    edit={data.edit}
                    key={index}
                    onClick={this.handleEdit.bind(this, data, index)}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <SearchBar {...data.props} />
                </EditComponent>
            )
            case 'Slide': return (
                <EditComponent
                    edit={data.edit}
                    key={index}
                    onClick={this.handleEdit.bind(this, data, index)}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <Notice {...data.props} />
                </EditComponent>
            )
            case 'Carousel': return (
                <EditComponent
                    edit={data.edit}
                    key={index}
                    onClick={this.handleEdit.bind(this, data, index)}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <Carousel {...data.props} />
                </EditComponent>
            )
            case 'Navigation': return (
                <EditComponent
                    edit={data.edit}
                    key={index}
                    onClick={this.handleEdit.bind(this, data, index)}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <Grid  {...data.props} />
                </EditComponent>
            )
            case 'GoodsList': {
                const value: any[] = data.props.value || []
                return (
                    <EditComponent
                        edit={data.edit}
                        key={index}
                        onClick={this.handleEdit.bind(this, data, index)}
                        onDelete={this.handleDelete.bind(this, index)}
                        style={{ background: data.props.background, padding: `0 ${getUnit(4)}` }}
                    >
                        {
                            value.map((i, index) => {
                                return (
                                    <GoodsView lineNum={data.props.lineNum} key={index}>
                                        <GoodsImg url={i.cover_pic || i.url} />
                                        <div style={{ padding: `${getUnit(8)}`, backgroundColor: '#fff' }}>
                                            {data.props.showView.includes('shopName') ? <GoodsName>{i.name || i.shopName}</GoodsName> : null}
                                            <div className="flex" style={{ marginTop: 10 }}>
                                                {data.props.showView.includes('price') ? <div style={{ color: 'red' }}>{i.cash_buy || i.price}</div> : null}
                                                {data.props.showView.includes('ori_price') ? <div style={{ textDecoration: 'line-through', marginLeft: data.props.showView.includes('price') ? `${getUnit(10)}` : '0' }}>{i.cash_buy_discount || i.ori_price}</div> : null}
                                            </div>
                                        </div>
                                    </GoodsView>
                                )
                            })
                        }
                    </EditComponent>
                )
            }
            case 'Divider': {
                return (
                    <EditComponent
                        edit={data.edit}
                        key={index}
                        onClick={this.handleEdit.bind(this, data, index)}
                        onDelete={this.handleDelete.bind(this, index)}
                    >
                        <Divider {...data.props} />
                    </EditComponent>
                )
            }
            case 'Advertising': {
                const value: any[] = data.props.value || []
                return (
                    <EditComponent
                        edit={data.edit}
                        key={index}
                        onClick={this.handleEdit.bind(this, data, index)}
                        onDelete={this.handleDelete.bind(this, index)}
                    >
                        {
                            value.map((i, index) => {
                                return (
                                    <GoodsView lineNum={data.props.lineNum} key={index} style={{ height: '60px', marginTop: 'initial', ...data.props.style, }} >
                                        <GoodsVImg url={i.cover_pic || i.url} style={{ height: '60px', paddingTop: 'initial' }} />
                                    </GoodsView>
                                )
                            })
                        }
                    </EditComponent>
                )
            }
        }
    }

    private handleDelete(index: number) {
        const { componentData, dispatch } = this.props
        componentData.pageProps.splice(index, 1)
        this.index = -1
        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
    }


    private handleEdit(data: IComponents, index: number) {
        const { componentData, dispatch } = this.props
        const pageProps: any[] = componentData.pageProps.map((i, k) => {
            i.edit = false
            return i
        })
        pageProps[index].edit = true
        componentData.pageProps = pageProps
        this.index = index
        this.componentType = data.component
        this.setState({
            componentName: '',
        }, () => {
            dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
            setTimeout(() => {
                this.setState({
                    componentName: data.component,
                }, () => {
                    setTimeout(() => {
                        this.acFun?.setFieldValue(componentData.pageProps[index].props)
                    }, 100)
                })
            }, 100)
        })
    }

    private handleUploadView = (index: number, field: string) => {
        imageModal({
            crop: false,
            onSelect: (data) => {
                const { componentData, dispatch } = this.props
                componentData.pageProps[this.index].props[field][index].url = data.file_link
                dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
            }
        })
    }

    private handleUploadItemView = (field: string) => {
        imageModal({
            crop: false,
            onSelect: (data) => {
                const { componentData, dispatch } = this.props
                componentData.pageProps[this.index].props[field] = data.file_link
                dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
                this.acFun?.setFieldValue(componentData.pageProps[this.index].props)
            }
        })
    }

    private handleGoodsView = (index: number, field: string) => {
        goodsModal({
            onSelect: (type, data) => {
                const { componentData, dispatch } = this.props
                componentData.pageProps[this.index].props[field][index].link = `?type=${type}&id=${data.id}`
                dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
            }
        })
    }

    private handleCarouselHref = (index: number, field: string, ve: string, e: ChangeEvent<HTMLInputElement>) => {
        const { componentData, dispatch } = this.props
        componentData.pageProps[this.index].props[field][index][ve] = e.target.value
        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
        this.acFun?.setFieldValue({
            [field]: componentData.pageProps[this.index].props[field]
        })
    }

    private handleFieldAdd = (field: string, comName: string) => {
        const { componentData, dispatch } = this.props

        switch (comName) {
            case 'Carousel': {
                componentData.pageProps[this.index].props[field].push({
                    url: defImg,
                })
                dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
            }; break;
            case 'GoodsList': {
                shopModal({
                    onSelect: (data) => {
                        const { componentData, dispatch } = this.props
                        componentData.pageProps[this.index].props[field] = componentData.pageProps[this.index].props[field].concat(data)
                        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
                        this.acFun?.setFieldValue({
                            [field]: componentData.pageProps[this.index].props[field]
                        })
                    }
                })
            }; break;
            case 'Navigation': {
                componentData.pageProps[this.index].props[field].push({
                    url: defImg,
                    label: '标题',
                })
                dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
            }; break;
            case 'Slide': {
                componentData.pageProps[this.index].props[field].push({
                    label: '自定义公告',
                })
                dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
                this.acFun?.setFieldValue({
                    [field]: componentData.pageProps[this.index].props[field]
                })
            }; break;
            case 'Advertising': {
                componentData.pageProps[this.index].props[field].push({
                    url: defImg,
                })
                dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
                this.acFun?.setFieldValue({
                    [field]: componentData.pageProps[this.index].props[field]
                })
            }; break;
        };
    }


    private handleDel = (index: number, field: string) => {
        const { componentData, dispatch } = this.props;
        componentData.pageProps[this.index].props[field].splice(index, 1)
        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
    }

    private getComponentView(): JSX.Element {
        return (
            <TabBar
                type="vertical"
                theme={new TabBarThemeData({ height: '100%', width: 240 })}
                itemBarClassName="tab_VE_line"
            >
                <TabBar.Item icon={<Icon icon="ios-apps" />} tooltipTitle="装修" placement="left">
                    {this.getComponentDataView()}
                </TabBar.Item>
            </TabBar>
        )
    }

    private getActionsView(): JSX.Element {
        return (
            <ComponentPropsVIew>
                <Form getItems={this.getComponentItems} />
            </ComponentPropsVIew>
        )
    }

    private getComponentItems = (fn: IFormFun): IFormItem[] => {
        const { componentData } = this.props
        const { componentName } = this.state
        this.acFun = fn
        if (this.index === -1) {
            return [];
        }
        switch (componentName) {
            case 'SearchBar': return [{
                component: 'Slider',
                label: <ComponentLabel>上边距</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.marginTop') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.marginTop')
                },
                extend: (vals) => {
                    return <div>{vals['style.marginTop']}px(像数)</div>
                },
                field: 'style.marginTop',
            }, {
                component: 'Slider',
                label: <ComponentLabel>下边距</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.marginBottom') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.marginBottom')
                },
                extend: (vals) => {
                    return <div>{vals['style.marginBottom']}px(像数)</div>
                },
                field: 'style.marginBottom',
            }, {
                component: 'Colors',
                label: <ComponentLabel>背景颜色</ComponentLabel>,
                props: {
                    initColor: componentData.pageProps[this.index].props?.style?.background,
                    onChange: this.updateComColorData.bind(this, 'style.background'),
                },
                field: 'style.background'
            },]
            case 'Carousel':
                return [{
                    component: 'Slider',
                    label: <ComponentLabel>圆角边框</ComponentLabel>,
                    props: {
                        value: get(componentData.pageProps[this.index].props, 'style.borderRadius') || 0,
                        max: 20,
                        onChange: this.updateChangeComData.bind(this, 'style.borderRadius')
                    },
                    extend: (vals) => {
                        return <div>{vals['style.borderRadius']}px(像数)</div>
                    },
                    field: 'style.borderRadius',
                }, {
                    component: 'Slider',
                    label: <ComponentLabel>上边距</ComponentLabel>,
                    props: {
                        value: get(componentData.pageProps[this.index].props, 'style.marginTop') || 0,
                        max: 20,
                        onChange: this.updateChangeComData.bind(this, 'style.marginTop')
                    },
                    extend: (vals) => {
                        return <div>{vals['style.marginTop']}px(像数)</div>
                    },
                    field: 'style.marginTop',
                }, {
                    component: 'Slider',
                    label: <ComponentLabel>下边距</ComponentLabel>,
                    props: {
                        value: get(componentData.pageProps[this.index].props, 'style.marginBottom') || 0,
                        max: 20,
                        onChange: this.updateChangeComData.bind(this, 'style.marginBottom')
                    },
                    extend: (vals) => {
                        return <div>{vals['style.marginBottom']}px(像数)</div>
                    },
                    field: 'style.marginBottom',
                }, {
                    component: 'RadioGroup',
                    label: <ComponentLabel>指示点形状</ComponentLabel>,
                    props: {
                        value: componentData.pageProps[this.index].props['dotType'],
                        options: [{
                            label: '圆形',
                            value: 'circular',
                        }, {
                            label: '长方形',
                            value: 'rectangle',
                        }],
                        onChange: this.updateChangeComData.bind(this, 'dotType')
                    },
                    field: 'dotType'
                }, {
                    component: 'RadioGroup',
                    label: <ComponentLabel>自动播放</ComponentLabel>,
                    props: {
                        value: componentData.pageProps[this.index].props['autoplay'],
                        options: [{
                            label: '是',
                            value: true,
                        }, {
                            label: '否',
                            value: false,
                        }],
                        onChange: this.updateChangeComData.bind(this, 'autoplay')
                    },
                    field: 'autoplay'
                }, {
                    component: 'Colors',
                    label: <ComponentLabel>指示点颜色</ComponentLabel>,
                    props: {
                        initColor: componentData.pageProps[this.index].props['dotColor'],
                        onChange: this.updateComColorData.bind(this, 'dotColor'),
                    },
                    field: 'dotColor'
                }, {
                    component: 'NULL',
                    props: {
                        value: componentData.pageProps[this.index].props['value'] || null
                    },
                    field: 'value',
                }, {
                    component: 'Colors',
                    label: <ComponentLabel>背景颜色</ComponentLabel>,
                    props: {
                        initColor: componentData.pageProps[this.index].props['background'],
                        onChange: this.updateComColorData.bind(this, 'style.background'),
                    },
                    field: 'style.background',
                }, {
                    component: 'RadioGroup',
                    label: <ComponentLabel>数据来源</ComponentLabel>,
                    props: {
                        value: componentData.pageProps[this.index].props['dataGetType'],
                        options: [{
                            label: '服务端获取',
                            value: 'server',
                        }, {
                            label: '自定义',
                            value: 'diy',
                        }],
                        onChange: this.updateChangeComData.bind(this, 'dataGetType')
                    },
                    field: 'dataGetType',
                    additional: (val) => {
                        if (val.dataGetType == 'diy') {
                            return (
                                <div>
                                    <DragDropContext onDragEnd={this.onDragEnd.bind(this, 'Carousel')}>
                                        <Droppable droppableId="droppablea" >
                                            {(provided) => (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{ height: '100%' }}
                                                >
                                                    {
                                                        val.value.map((i: any, index: number) => {
                                                            return (
                                                                <Draggable key={index} draggableId={index.toString()} index={index}>
                                                                    {(provided) => {
                                                                        return (
                                                                            <div
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                            >
                                                                                <ItemBoxView className="flex" key={index}>
                                                                                    <ItemImgBox className="flex_center" onClick={this.handleUploadView.bind(this, index, 'value')}>
                                                                                        <Image src={i.url} style={{ width: '100%' }} />
                                                                                    </ItemImgBox>
                                                                                    <div className="flex_1">
                                                                                        <div className="flex">
                                                                                            <Input className="flex_1" disabled value={i.link} />
                                                                                            <Button mold="primary" onClick={this.handleGoodsView.bind(this, index, 'value')}>跳转地址</Button>
                                                                                        </div>
                                                                                        <div className="flex" style={{ marginTop: getUnit(16) }}>
                                                                                            <Input className="flex_1" value={i.href} placeholder="外部连接(填写后将作为默认跳转)" onChange={this.handleCarouselHref.bind(this, index, 'value', 'href')} />
                                                                                        </div>

                                                                                    </div>
                                                                                    <CloseIcon
                                                                                        icon="md-close-circle"
                                                                                        color="rgba(0, 0, 0, 0.3)"
                                                                                        theme={new IconThemeData({ size: 18 })}
                                                                                        style={{ cursor: 'pointer' }}
                                                                                        onClick={this.handleDel.bind(this, index, 'value')}
                                                                                    />
                                                                                </ItemBoxView>
                                                                            </div>
                                                                        )
                                                                    }}
                                                                </Draggable>
                                                            )

                                                        })
                                                    }
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>

                                    <Button
                                        theme={new ButtonThemeData({ width: '100%' })}
                                        onClick={this.handleFieldAdd.bind(this, 'value', 'GoodsL')}
                                    >
                                        <div className="flex">
                                            <Icon icon="ios-add" />
                                            <div className="flex_center">添加</div>
                                        </div>
                                    </Button>
                                </div>
                            )
                        }
                        return <div />
                    }
                }]
            case 'GoodsList': return [{
                component: 'NULL',
                props: {
                    value: componentData.pageProps[this.index].props['value'] || null
                },
                field: 'value',
            }, {
                component: 'RadioGroup',
                label: <ComponentLabel>数据来源</ComponentLabel>,
                props: {
                    value: componentData.pageProps[this.index].props['dataGetType'],
                    options: [{
                        label: '服务端获取',
                        value: 'server',
                    }, {
                        label: '自定义',
                        value: 'diy',
                    }],
                    onChange: this.updateChangeComData.bind(this, 'dataGetType')
                },
                field: 'dataGetType',
                additional: (val) => {
                    if (val.dataGetType == 'diy') {
                        return (
                            <div>
                                <DragDropContext onDragEnd={this.onDragEnd.bind(this, 'Carousel')}>
                                    <Droppable droppableId="droppablea" >
                                        {(provided) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{ height: '100%' }}
                                            >
                                                {
                                                    val.value.map((i: any, index: number) => {
                                                        return (
                                                            <Draggable key={index} draggableId={index.toString()} index={index}>
                                                                {(provided) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    // style={{ width: '33%', display: 'inline-block' }}
                                                                    >
                                                                        <ItemBoxView className="flex" key={index}>
                                                                            <ItemImgBox className="flex_center" onClick={this.handleUploadView.bind(this, index, 'value')}>
                                                                                <Image src={val.dataGetType == 'diy' ? i.cover_pic || i.url : i.url} style={{ width: '100%' }} />
                                                                            </ItemImgBox>
                                                                            <CloseIcon
                                                                                icon="md-close-circle"
                                                                                color="rgba(0, 0, 0, 0.3)"
                                                                                theme={new IconThemeData({ size: 18 })}
                                                                                style={{ cursor: 'pointer' }}
                                                                                onClick={this.handleDel.bind(this, index, 'value')}
                                                                            />
                                                                        </ItemBoxView>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        )

                                                    })
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                                <Button
                                    theme={new ButtonThemeData({ width: '100%' })}
                                    onClick={this.handleFieldAdd.bind(this, 'value', 'GoodsList')}
                                >
                                    <div className="flex">
                                        <Icon icon="ios-add" />
                                        <div className="flex_center">添加</div>
                                    </div>
                                </Button>
                            </div>
                        )
                    }
                    return <div />
                }
            }, {
                component: 'Colors',
                label: <ComponentLabel>背景颜色</ComponentLabel>,
                props: {
                    initColor: componentData.pageProps[this.index].props['background'],
                    onChange: this.updateComColorData.bind(this, 'background'),
                },
                field: 'background',
            }, {
                component: 'RadioGroup',
                label: <ComponentLabel>分列数量</ComponentLabel>,
                props: {
                    value: componentData.pageProps[this.index].props['lineNum'],
                    options: [{
                        label: '单列',
                        value: 1,
                    }, {
                        label: '两列',
                        value: 2,
                    }, {
                        label: '三列',
                        value: 3,
                    }],
                    onChange: this.updateChangeComData.bind(this, 'lineNum')
                },
                field: 'lineNum'
            }, {
                component: 'CheckBox',
                label: <ComponentLabel>显示内容</ComponentLabel>,
                props: {
                    value: componentData.pageProps[this.index].props['showView'],
                    options: [{
                        label: '商品名称',
                        value: 'shopName',
                    }, {
                        label: '商品价格',
                        value: 'price',
                    }, {
                        label: '划线价格',
                        value: 'ori_price',
                    }],
                    onChange: this.updateChangeComData.bind(this, 'showView')
                },
                field: 'showView'
            }]
            case 'Navigation': return [{
                component: 'Slider',
                label: <ComponentLabel>圆角边框</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.borderRadius') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.borderRadius')
                },
                extend: (vals) => {
                    return <div>{vals['style.borderRadius']}px(像数)</div>
                },
                field: 'style.borderRadius',
            }, {
                component: 'Slider',
                label: <ComponentLabel>上边距</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.marginTop') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.marginTop')
                },
                extend: (vals) => {
                    return <div>{vals['style.marginTop']}px(像数)</div>
                },
                field: 'style.marginTop',
            }, {
                component: 'Slider',
                label: <ComponentLabel>下边距</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.marginBottom') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.marginBottom')
                },
                extend: (vals) => {
                    return <div>{vals['style.marginBottom']}px(像数)</div>
                },
                field: 'style.marginBottom',
            }, {
                component: 'RadioGroup',
                label: <ComponentLabel>每列个数</ComponentLabel>,
                props: {
                    value: componentData.pageProps[this.index].props['columnNum'],
                    options: [{
                        label: '3个',
                        value: 3,
                    }, {
                        label: '4个',
                        value: 4,
                    }, {
                        label: '5个',
                        value: 5,
                    }],
                    onChange: this.updateChangeComData.bind(this, 'columnNum')
                },
                field: 'columnNum'
            }, {
                component: 'NULL',
                props: {
                    value: componentData.pageProps[this.index].props['data'] || []
                },
                field: 'data',
            }, {
                component: 'Colors',
                label: <ComponentLabel>背景颜色</ComponentLabel>,
                props: {
                    initColor: componentData.pageProps[this.index].props['background'],
                    onChange: this.updateComColorData.bind(this, 'style.background'),
                },
                field: 'style.background',
            }, {
                component: 'RadioGroup',
                label: <ComponentLabel>数据来源</ComponentLabel>,
                props: {
                    value: componentData.pageProps[this.index].props['dataGetType'],
                    options: [{
                        label: '服务端获取',
                        value: 'server',
                    }, {
                        label: '自定义',
                        value: 'diy',
                    }],
                    onChange: this.updateChangeComData.bind(this, 'dataGetType')
                },
                field: 'dataGetType',
                additional: (val) => {
                    if (val.dataGetType == 'diy') {
                        return (
                            <div>
                                <DragDropContext onDragEnd={this.onDragEnd.bind(this, 'Navigation')}>
                                    <Droppable droppableId="droppablea" >
                                        {(provided) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{ height: '100%' }}
                                            >
                                                {
                                                    (val.data || []).map((i: any, index: number) => {
                                                        return (
                                                            <Draggable key={index} draggableId={index.toString()} index={index}>
                                                                {(provided) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                        >
                                                                            <ItemBoxView className="flex" key={index}>
                                                                                <ItemImgBox className="flex_center"
                                                                                    style={{ marginTop: getUnit(14) }} onClick={this.handleUploadView.bind(this, index, 'data')}>
                                                                                    <Image src={i.url} style={{ width: '100%' }} />
                                                                                </ItemImgBox>
                                                                                <div className="flex_1">
                                                                                    <div className="flex">
                                                                                        <Input className="flex_1" disabled value={i.link} />
                                                                                        <Button mold="primary" onClick={this.handleGoodsView.bind(this, index, 'data')}>跳转地址</Button>
                                                                                    </div>
                                                                                    <div className="flex" style={{ marginTop: getUnit(4) }}>
                                                                                        <Input className="flex_1" value={i.href} placeholder="外部连接(填写后将作为默认跳转)" onChange={this.handleCarouselHref.bind(this, index, 'data', 'href')} />
                                                                                    </div>
                                                                                    <div className="flex" style={{ marginTop: getUnit(4) }}>
                                                                                        <Input className="flex_1" value={i.label} placeholder="显示名称" onChange={this.handleCarouselHref.bind(this, index, 'data', 'label')} />
                                                                                    </div>
                                                                                </div>
                                                                                <CloseIcon
                                                                                    icon="md-close-circle"
                                                                                    color="rgba(0, 0, 0, 0.3)"
                                                                                    theme={new IconThemeData({ size: 18 })}
                                                                                    style={{ cursor: 'pointer' }}
                                                                                    onClick={this.handleDel.bind(this, index, 'value')}
                                                                                />
                                                                            </ItemBoxView>
                                                                        </div>
                                                                    )
                                                                }}
                                                            </Draggable>
                                                        )

                                                    })
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                                <Button
                                    theme={new ButtonThemeData({ width: '100%' })}
                                    onClick={this.handleFieldAdd.bind(this, 'data', 'Navigation')}
                                >
                                    <div className="flex">
                                        <Icon icon="ios-add" />
                                        <div className="flex_center">添加</div>
                                    </div>
                                </Button>
                            </div>
                        )
                    }
                    return <div />
                }
            }]
            case 'Slide': return [{
                component: 'Slider',
                label: <ComponentLabel>上边距</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.marginTop') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.marginTop')
                },
                extend: (vals) => {
                    return <div>{vals['style.marginTop']}px(像数)</div>
                },
                field: 'style.marginTop',
            }, {
                component: 'NULL',
                props: {
                    value: componentData.pageProps[this.index].props['value'] || []
                },
                field: 'value',
            }, {
                component: 'Slider',
                label: <ComponentLabel>下边距</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.marginBottom') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.marginBottom')
                },
                extend: (vals) => {
                    return <div>{vals['style.marginBottom']}px(像数)</div>
                },
                field: 'style.marginBottom',
            }, {
                component: 'Colors',
                label: <ComponentLabel>背景颜色</ComponentLabel>,
                props: {
                    initColor: componentData.pageProps[this.index].props?.style?.background || '#fff',
                    onChange: this.updateComColorData.bind(this, 'style.background'),
                },
                field: 'style.background',
            }, {
                component: 'Colors',
                label: <ComponentLabel>字体颜色</ComponentLabel>,
                props: {
                    initColor: componentData.pageProps[this.index].props['labelColor'] || '#000',
                    onChange: this.updateComColorData.bind(this, 'labelColor'),
                },
                field: 'labelColor',
            }, {
                component: 'Label',
                label: <ComponentLabel>公告图标</ComponentLabel>,
                props: {
                    value: componentData.pageProps[this.index].props['logo'],
                },
                render: (val) => {
                    return (
                        <ItemImgBox className="flex_center">
                            <Image src={val} onClick={this.handleUploadItemView.bind(this, 'logo')} />
                        </ItemImgBox>
                    )
                },
                field: 'logo',
            }, {
                component: 'RadioGroup',
                label: <ComponentLabel>数据来源</ComponentLabel>,
                props: {
                    value: componentData.pageProps[this.index].props['dataGetType'],
                    options: [{
                        label: '服务端获取',
                        value: 'server',
                    }, {
                        label: '自定义',
                        value: 'diy',
                    }],
                    onChange: this.updateChangeComData.bind(this, 'dataGetType')
                },
                field: 'dataGetType',
                additional: (val) => {
                    console.log(val)
                    if (val.dataGetType == 'diy') {
                        return (
                            <div>
                                <DragDropContext onDragEnd={this.onDragEnd.bind(this, 'Carousel')}>
                                    <Droppable droppableId="droppablea" >
                                        {(provided) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{ height: '100%' }}
                                            >
                                                {
                                                    val.value.map((i: any, index: number) => {
                                                        return (
                                                            <Draggable key={index} draggableId={index.toString()} index={index}>
                                                                {(provided) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                        >
                                                                            <ItemBoxView className="flex" key={index}>
                                                                                <div className="flex_1">
                                                                                    <div className="flex">
                                                                                        <Input className="flex_1" value={i.label} onChange={this.handleCarouselHref.bind(this, index, 'value', 'label')} />
                                                                                    </div>
                                                                                    <div className="flex" style={{ marginTop: getUnit(16) }}>
                                                                                        <Input className="flex_1" disabled value={i.link} />
                                                                                        <Button mold="primary" onClick={this.handleGoodsView.bind(this, index, 'value')}>跳转地址</Button>
                                                                                    </div>
                                                                                    <div className="flex" style={{ marginTop: getUnit(16) }}>
                                                                                        <Input className="flex_1" value={i.href} placeholder="外部连接(填写后将作为默认跳转)" onChange={this.handleCarouselHref.bind(this, index, 'value', 'href')} />
                                                                                    </div>

                                                                                </div>
                                                                                <CloseIcon
                                                                                    icon="md-close-circle"
                                                                                    color="rgba(0, 0, 0, 0.3)"
                                                                                    theme={new IconThemeData({ size: 18 })}
                                                                                    style={{ cursor: 'pointer' }}
                                                                                    onClick={this.handleDel.bind(this, index, 'value')}
                                                                                />
                                                                            </ItemBoxView>
                                                                        </div>
                                                                    )
                                                                }}
                                                            </Draggable>
                                                        )

                                                    })
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                                <Button
                                    theme={new ButtonThemeData({ width: '100%' })}
                                    onClick={this.handleFieldAdd.bind(this, 'value', 'Slide')}
                                >
                                    <div className="flex">
                                        <Icon icon="ios-add" />
                                        <div className="flex_center">添加</div>
                                    </div>
                                </Button>
                            </div>
                        )
                    }
                    return <div />
                }
            }]
            case 'Divider': return [{
                component: 'Slider',
                label: <ComponentLabel>高度</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'height') || 2,
                    max: 40,
                    onChange: this.updateChangeComData.bind(this, 'height')
                },
                extend: (vals) => {
                    return <div>{vals['height']}px(像数)</div>
                },
                field: 'height',
            }, {
                component: 'Slider',
                label: <ComponentLabel>上边距</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.marginTop') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.marginTop')
                },
                extend: (vals) => {
                    return <div>{vals['style.marginTop']}px(像数)</div>
                },
                field: 'style.marginTop',
            }, {
                component: 'Slider',
                label: <ComponentLabel>下边距</ComponentLabel>,
                props: {
                    value: get(componentData.pageProps[this.index].props, 'style.marginBottom') || 0,
                    max: 20,
                    onChange: this.updateChangeComData.bind(this, 'style.marginBottom')
                },
                extend: (vals) => {
                    return <div>{vals['style.marginBottom']}px(像数)</div>
                },
                field: 'style.marginBottom',
            }, {
                component: 'Colors',
                label: <ComponentLabel>颜色</ComponentLabel>,
                props: {
                    initColor: componentData.pageProps[this.index].props['color'] || 'rgb(230, 230, 230)',
                    onChange: this.updateComColorData.bind(this, 'color'),
                },
                field: 'color',
            }]
            case 'Advertising': {
                return [{
                    component: 'NULL',
                    props: {
                        value: componentData.pageProps[this.index].props['value'] || null
                    },
                    field: 'value',
                }, {
                    component: 'Slider',
                    label: <ComponentLabel>上边距</ComponentLabel>,
                    props: {
                        value: get(componentData.pageProps[this.index].props, 'style.marginTop') || 0,
                        max: 20,
                        onChange: this.updateChangeComData.bind(this, 'style.marginTop')
                    },
                    extend: (vals) => {
                        return <div>{vals['style.marginTop']}px(像数)</div>
                    },
                    field: 'style.marginTop',
                }, {
                    component: 'Slider',
                    label: <ComponentLabel>下边距</ComponentLabel>,
                    props: {
                        value: get(componentData.pageProps[this.index].props, 'style.marginBottom') || 0,
                        max: 20,
                        onChange: this.updateChangeComData.bind(this, 'style.marginBottom')
                    },
                    extend: (vals) => {
                        return <div>{vals['style.marginBottom']}px(像数)</div>
                    },
                    field: 'style.marginBottom',
                }, {
                    component: 'RadioGroup',
                    label: <ComponentLabel>分列数量</ComponentLabel>,
                    props: {
                        value: componentData.pageProps[this.index].props['lineNum'],
                        options: [{
                            label: '单列',
                            value: 1,
                        }, {
                            label: '两列',
                            value: 2,
                        }],
                        onChange: this.updateChangeComData.bind(this, 'lineNum')
                    },
                    field: 'lineNum',
                    additional: (val) => {
                        return (
                            <div>
                                <DragDropContext onDragEnd={this.onDragEnd.bind(this, 'Carousel')}>
                                    <Droppable droppableId="droppablea" >
                                        {(provided) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{ height: '100%' }}
                                            >
                                                {
                                                    (val.value || []).map((i: any, index: number) => {
                                                        return (
                                                            <Draggable key={index} draggableId={index.toString()} index={index}>
                                                                {(provided) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                        >
                                                                            <ItemBoxView className="flex" key={index}>
                                                                                <ItemImgBox className="flex_center" onClick={this.handleUploadView.bind(this, index, 'value')}>
                                                                                    <Image src={i.url} style={{ width: '100%' }} />
                                                                                </ItemImgBox>
                                                                                <div className="flex_1">
                                                                                    <div className="flex">
                                                                                        <Input className="flex_1" disabled value={i.link} />
                                                                                        <Button mold="primary" onClick={this.handleGoodsView.bind(this, index, 'value')}>跳转地址</Button>
                                                                                    </div>
                                                                                    <div className="flex" style={{ marginTop: getUnit(16) }}>
                                                                                        <Input className="flex_1" value={i.href} placeholder="外部连接(填写后将作为默认跳转)" onChange={this.handleCarouselHref.bind(this, index, 'value', 'href')} />
                                                                                    </div>

                                                                                </div>
                                                                                <CloseIcon
                                                                                    icon="md-close-circle"
                                                                                    color="rgba(0, 0, 0, 0.3)"
                                                                                    theme={new IconThemeData({ size: 18 })}
                                                                                    style={{ cursor: 'pointer' }}
                                                                                    onClick={this.handleDel.bind(this, index, 'value')}
                                                                                />
                                                                            </ItemBoxView>
                                                                        </div>
                                                                    )
                                                                }}
                                                            </Draggable>
                                                        )

                                                    })
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                                <Button
                                    theme={new ButtonThemeData({ width: '100%' })}
                                    onClick={this.handleFieldAdd.bind(this, 'value', 'Advertising')}
                                >
                                    <div className="flex">
                                        <Icon icon="ios-add" />
                                        <div className="flex_center">添加</div>
                                    </div>
                                </Button>
                            </div>
                        )
                    }
                },]
            }
            default: return []
        }
    }

    // 获得定义好的页面组件
    private getComponentDataView = () => {
        const { diyCom } = this.props
        const components: JSX.Element[] = []
        diyCom.forEach((i, k) => {
            components.push(
                <div key={k}>
                    <Label color="#999">{i.display_name}</Label>
                </div>
            )
            i.children.forEach((v, index) => {
                components.push(
                    <EditBtn
                        theme={new ButtonThemeData({
                            border: Border.all({
                                width: 1,
                                style: BorderStyle.dashed,
                                color: Color.fromRGB(221, 221, 221)
                            })
                        })}
                        key={`${k}_${index}`}
                        onClick={this.handleAddComponent.bind(this, v)}
                    >
                        {v.display_name}
                    </EditBtn>
                )
            })
        })
        return components
    }

    private handleAddComponent(data: DiyComItem) {
        const { componentData, dispatch } = this.props
        let props: any = {}
        switch (data.module) {
            case 'Carousel': {
                props['value'] = [{
                    url: defImg,
                }, {
                    url: defImg,
                }]
                props['dotType'] = 'circular'
                props['dataGetType'] = 'server'
                props['autoplay'] = true
            }; break;
            case 'GoodsList': {
                props['value'] = [{
                    url: defImg,
                    shopName: '此处显示商品名称',
                    price: '99.00',
                    ori_price: '139.00',
                }, {
                    url: defImg,
                    shopName: '此处显示商品名称',
                    price: '99.00',
                    ori_price: '139.00',
                }, {
                    url: defImg,
                    shopName: '此处显示商品名称',
                    price: '99.00',
                    ori_price: '139.00',
                },]
                props['dataGetType'] = 'server'
                props['lineNum'] = 2
                props['showView'] = ['shopName', 'price', 'ori_price']
                props['background'] = '#fff'
            }; break;
            case 'Navigation': {
                props['data'] = [{
                    url: defImg,
                    label: '标题',
                }, {
                    url: defImg,
                    label: '标题',
                }, {
                    url: defImg,
                    label: '标题',
                }, {
                    url: defImg,
                    label: '标题',
                }, {
                    url: defImg,
                    label: '标题',
                },]
                props['dataGetType'] = 'server'
                props['columnNum'] = 4
            }; break;
            case 'SearchBar': {
                props.style = {
                    'background': '#fff'
                }
            }; break;
            case 'Slide': {
                props['value'] = [{
                    label: '这是测试显示公告1',
                    link: null,
                }, {
                    label: '这是测试显示公告2',
                    link: null,
                }]
                props['logo'] = slideIcon
                props['labelColor'] = '#000'
                props['titleColor'] = '#000'
                props['loop'] = true
                props['effect'] = 'scrollX'
                props['mode'] = 'roll'
                props['speed'] = 2
                props['dataGetType'] = 'server'
            }; break;
            case 'Divider': {
                props['type'] = 'horizontal'
                props['height'] = 3
            }; break;
            case 'Advertising': {
                props['value'] = [{
                    url: defImg,
                    link: null,
                }, {
                    url: defImg,
                    link: null,
                }]
                props['lineNum'] = 2
            }
        }
        componentData.pageProps.push({
            component: data.module,
            props,
        })
        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
    }

    private updateChangeComData = (field: string, value: any) => {
        const { componentData, dispatch } = this.props
        set(componentData.pageProps[this.index]['props'], field, value)
        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
    }

    private updateComColorData = (field: string, value: any) => {
        const { componentData, dispatch } = this.props
        set(componentData.pageProps[this.index]['props'], field, value.hex)
        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
    }

    private onDragTabBar = (result: DropResult) => {
        if (!result.destination) {
            return
        }
        const { components } = this.state

        const items = reorder(
            components[this.index].props.value,
            result.source.index,
            result.destination.index
        )
        components[this.index].props.value = items
        this.setState({
            components: [...components]
        })
    }

    private onDragEnd = (comName: string, result: DropResult) => {
        if (!result.destination) {
            return
        }
        const { componentData, dispatch } = this.props
        let items: any
        switch (comName) {
            case 'Carousel': {
                items = reorder(
                    componentData.pageProps[this.index].props.value,
                    result.source.index,
                    result.destination.index
                );
                componentData.pageProps[this.index].props.value = items
                this.acFun?.setFieldValue({ value: items })
            }; break;
            case 'Navigation': {
                items = reorder(
                    componentData.pageProps[this.index].props.data,
                    result.source.index,
                    result.destination.index
                );
                componentData.pageProps[this.index].props.value = items
                this.acFun?.setFieldValue({ data: items })
            }; break;
            default: {
                items = reorder(
                    componentData.pageProps,
                    result.source.index,
                    result.destination.index
                );
                componentData.pageProps = items
            }
        }
        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
    }

    private handleTabComponent = (name: string) => {
        this.setState({
            componentName: name,
            selected: 1
        })
    }

    private handleSave = async () => {
        const { componentData } = this.props
        // componentData.pageProps = componentData.pageProps.map((i) => {
        //     if (i.component == 'Carousel' && i.props['dataGetType'] == 'server') {
        //         i.props.value = []
        //     }
        //     if (i.component == 'Navigation' && i.props['dataGetType'] == 'server') {
        //         i.props.data = []
        //     }
        //     if (i.component == 'GoodsList' && i.props['dataGetType'] == 'server') {
        //         i.props.value = []
        //     }
        //     return i
        // })
        try {
            await http('/admin/diy', {
                path: 'home',
                title: '首页',
                pageColor: '#fff',
                content: JSON.stringify(componentData.pageProps)
            })
            message.success('保存成功')
        } catch (e) {
            message.error(e.toString())
        }
    }


    private handleTabBarDel = (index: number) => {
        confirm({
            title: '提示',
            content: '确定要删除么？',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => {
                const { components } = this.state
                components[this.index].props.value.splice(index, 1)
                this.setState({
                    components: [...components]
                })
            },
        })

    }

    private handleTabBarInt = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const { components } = this.state
        components[this.index].props.value[index].label = e.target.value
        this.setState({
            components: [...components]
        })
    }

    private handleDragSuccess = (data: any) => {
        const { dispatch, componentData } = this.props
        componentData.pageProps.push(data)
        dispatch({ type: SET_COMPONENT_DATA, data: { ...componentData } })
    }
}
export default connect(
    (state: IInitState) => ({
        componentData: state.componentData,
        diyCom: state.diyCom
    })
)(AppsDesign)