import React, { Component, ChangeEvent } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Modal } from 'antd'
import { assign, cloneDeep } from 'lodash'
import { bindActionCreators } from 'redux'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { omit, isArray, isString } from 'muka'
import { IInitState } from 'src/store/state'
import { Alert, BoxLine, Button, Carousel, Dialog, Drag, Icon, Image, Label, LabelHeader, NavBar, TabBar, Form, Pagination, ScrollView, SearchBar, Upload, Notice } from 'components'
import http, { IRresItems, IRresItem, baseUrl, httpUtils, getTitle } from 'src/utils/axios'
import { connect } from 'react-redux'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { ColorResult } from 'react-color'
import { GlobalView } from 'src/utils/node'
import { NavBarThemeData, Color, getRatioUnit, Border, BorderStyle } from 'src/components/lib/utils'
import { IComponentData } from 'src/store/reducers/componentData'
import styled, { css } from 'styled-components'
import EditComponent from './editComponent'

const { confirm } = Modal

interface IProps {
    componentData: IComponentData
    setComponentData: (data: IComponentData) => void
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

type IComponentType = 'TabBar' | 'NavBar' | 'Carousel' | 'SearchBar' | 'Notice' | ''

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

const TplPhone = styled.div`
    background: #fff;
    ${() => css`${Border.all({ width: 1, style: BorderStyle.solid, color: Color.fromRGB(220, 220, 220) }).toString()}`};
    cursor: move;
    transition: transform .5s 0.1s;
    border-radius: ${getRatioUnit(15)};
    height: ${getRatioUnit(550)};
    width: ${getRatioUnit(310)};
    padding: 0 ${getRatioUnit(5)} ${getRatioUnit(5)} ${getRatioUnit(5)};
    overflow: hidden;
`

const TplTit = styled.div`
    height: ${getRatioUnit(24)};
    text-align: center;
    span {
        display: inline-block;
        margin-top: ${getRatioUnit(12)};
        background: #cfcfcf;
    }
`

const TplTitCri = styled.span`
    width: ${getRatioUnit(4)};
    height: ${getRatioUnit(4)};
    border-radius: 100%;
    margin-right: ${getRatioUnit(10)};
`

const TplTitLon = styled.span`
    width: ${getRatioUnit(48)};
    height: ${getRatioUnit(4)};
    border-radius: ${getRatioUnit(7)};
`

const TplScrollView = styled(Drag.Box)`
   ${() => css`${Border.all({ width: 1, style: BorderStyle.solid, color: Color.fromRGB(220, 220, 220) }).toString()}`};
    border-radius: ${getRatioUnit(5)};
    overflow: auto;
`

const reorder = (list: IComponents[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

class AppsDesign extends Component<IProps, any> {

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

    private title = getTitle('/diy')

    private loading: boolean = false

    public render(): JSX.Element {
        const { componentData } = this.props
        const { searchSelect, icons, uploadDialog, images, pageCurrent, total, linkDialog, links, imagesDialog } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                />
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
                            onDragEnter={this.handleDragEnter}
                            onDragSuccess={this.handleDragSuccess}
                        >
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <Droppable droppableId="droppable" >
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{ height: '100%' }}
                                        >
                                            {componentData.pagePorps.map((item: IComponents, index: number) => (
                                                <Draggable key={index} draggableId={index.toString()} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            {/* {this.getComponentsView(item, index)} */}
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
                {/* <Dialog visible={searchSelect} title="字体/图片" style={{ width: 1088, height: 756 }} onClose={this.handleCloseDialog.bind(this, 'searchSelect')} onFirstShow={this.getDialogData}>
                    <TabBar tabBarClassName="mk_divider" style={{ height: '100%' }} onChange={this.handleTabBarChange}>
                        <TabBar.Item label="字体">
                            <BoxLine >
                                {
                                    icons.map((i: any) => {
                                        return (
                                            <div
                                                className={`flex_center ${icons_items}`}
                                                key={i.id}
                                                onClick={this.setComProps.bind(this, { type: 'icon', 'url': i.name }, 'searchSelect')}
                                            >
                                                <Icon icon={i.name} />
                                            </div>
                                        )
                                    })
                                }
                            </BoxLine>
                        </TabBar.Item>
                        <TabBar.Item label="服务器图片">
                            <NavBar
                                className={nav_color}
                                left={null}
                                right={
                                    <Button mold="primary" onClick={this.handleShowUpload.bind(this, 'uploadDialog')}>上传图片</Button>
                                }
                            />
                            <ScrollView scrollY className={scroll_view}>
                                {
                                    images.map((i: any) => {
                                        return (
                                            <div
                                                className={image}
                                                key={i.id}
                                                onClick={this.setComProps.bind(this, { type: 'image', 'url': baseUrl + i.previewUrl }, 'searchSelect')}
                                            >
                                                <div className="flex_justify" style={{ width: '100%', height: '100%' }}>
                                                    <Image src={baseUrl + i.previewUrl} className={image_item} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </ScrollView>
                            <div className="flex">
                                <div className="flex_1" />
                                <Pagination current={pageCurrent} total={total} pageSize={20} onChange={this.handleCurrent} />
                            </div>
                        </TabBar.Item>
                    </TabBar>
                </Dialog>
                <Dialog visible={imagesDialog} title="图片" style={{ width: 1088, height: 756 }} onClose={this.handleCloseDialog.bind(this, 'imagesDialog')} onFirstShow={this.getImage}>
                    <TabBar tabBarClassName="mk_divider" style={{ height: '100%' }} onChange={this.handleTabBarChange}>
                        <TabBar.Item label="服务器图片">
                            <NavBar
                                className={nav_color}
                                left={null}
                                right={
                                    <Button mold="primary" onClick={this.handleShowUpload.bind(this, 'uploadDialog')}>上传图片</Button>
                                }
                            />
                            <ScrollView scrollY className={scroll_view}>
                                {
                                    images.map((i: any) => {
                                        return (
                                            <div
                                                className={image}
                                                key={i.id}
                                                onClick={this.setCarouselUrl.bind(this, i.previewUrl, 'value', 'imagesDialog')}
                                            >
                                                <div className="flex_justify" style={{ width: '100%', height: '100%' }}>
                                                    <Image src={baseUrl + i.previewUrl} className={image_item} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </ScrollView>
                            <div className="flex">
                                <div className="flex_1" />
                                <Pagination current={pageCurrent} total={total} pageSize={20} onChange={this.handleCurrent} />
                            </div>
                        </TabBar.Item>
                    </TabBar>
                </Dialog>
                <Dialog title="上传图片" footer={null} visible={uploadDialog} onClose={this.handleCloseDialog.bind(this, 'uploadDialog')}>
                    <Upload.Dragger
                        style={{ marginTop: '10px' }}
                        action={`${baseUrl}/admin/user/upload`}
                        baserUrl={baseUrl}
                        withCredentials
                        onUploadSuccess={this.handleUploadSuccess}
                        uploadViewClassName={uploadViewClassName}
                    />
                </Dialog>
                <Dialog title="选择链接" style={{ width: 1088, height: 756 }} onFirstShow={this.handleLinkDialog} footer={null} visible={linkDialog} onClose={this.handleCloseDialog.bind(this, 'linkDialog')}>
                    <ScrollView scrollY style={{ height: '100%' }}>
                        <Alert title="如果底部菜单中已经选择该链接，页面中选择后点击无效" style={{ marginTop: '10px' }} inheritColor />
                        {
                            links.map((i: any) => {
                                return (
                                    <div key={i.id}>
                                        <div className={`${link_view} flex_justify`}>
                                            <Label>{i.name}</Label>
                                        </div>
                                        <div>
                                            {
                                                i.pages.map((v: any) => {
                                                    return <Button className={link_view_btn} key={v.id} onClick={this.handleSetLink.bind(this, i.id)}>{v.name}</Button>
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ScrollView>
                </Dialog> */}
            </GlobalView>
        )
    }

    private handleCurrent = async (val: number) => {
        if (this.loading) return
        this.loading = true
        try {
            const data: IRresItem = await http('image/globalFind', {
                total: val
            })
            this.loading = false
            this.setState({
                pageCurrent: val,
                images: [...data.data.images],
                total: data.data.total
            })
        } catch (msg) {
            this.loading = false
        }
    }

    private handleSetLink = (id: string) => {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props[this.tagName][this.selectIndex][this.field] = `/pages/${id}`
        setComponentData({ ...componentData })
        this.setState({
            linkDialog: false
        })
    }

    private handleTabBarChange = async (val: string | number | undefined) => {
        const { images } = this.state
        if (val === 1 && images.length === 0 && !this.loading) {
            this.getImage()
        }
    }

    private getImage = async () => {
        try {
            this.loading = true
            const data: IRresItem = await http('image/globalFind', {
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

    private addNavRight = () => {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props.right.push({
            type: 'icon',
            url: 'msg',
            color: '#fff'
        })
        setComponentData({ ...componentData })
    }

    private handleNavBarRightDel = (index: number) => {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props.right.splice(index, 1)
        setComponentData({ ...componentData })
    }

    private handleNavBarRightColor(index: number, val: ColorResult) {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props.right[index].color = val.hex
        setComponentData({ ...componentData })
    }

    private handleLinkDialog = async () => {
        try {
            const data: IRresItems = await http('apps/findPageClassifyAll')
            this.setState({
                links: data.data
            })
        } catch (msg) {
            console.log(msg)
        }
    }
    private handleUploadSuccess = (val: any, data: any) => {
        const { images } = this.state
        httpUtils.verify(data, (item) => {
            images.unshift(data)
            this.setState({
                images
            })
        })
    }

    // private getItem = (exFun: IFormFun): IFormItem[] => {
    //     const { componentName } = this.state
    //     this.exFun = exFun
    //     if (!componentName) {
    //         return []
    //     }
    //     const data: any = componentViewData(this)
    //     return data[componentName]
    // }

    private handleShowUpload = (field: any) => {
        this.setState({
            [field]: true
        })
    }
    private getDialogData = async () => {
        try {
            const data: IRresItems = await http('icons/find')
            this.setState({
                icons: data.data
            })
        } catch (msg) {
            console.log(msg)
        }

    }

    private handleDragEnter = () => {
        // this.setState({
        //     showLine: true
        // })
    }

    private handleFormChange = () => {
        const { componentData, setComponentData } = this.props
        const { componentName } = this.state
        const pageProps: any = [...componentData.pagePorps]
        const data: any = {}
        if (this.exFun) {
            const val: any = this.exFun.getFieldValue()
            Object.keys(val).map((i) => {
                const key = i.split('.')
                if (key.length > 1) {
                    if (val[i]) {
                        if (data[key[0]]) {
                            data[key[0]][key[1]] = this.getStyleValue(key[1], val[i])
                        } else {
                            data[key[0]] = {}
                            data[key[0]][key[1]] = this.getStyleValue(key[1], val[i])
                        }
                    }
                } else {
                    data[i] = val[i]
                }
                if (componentName === 'SearchBar' && key[0] === 'extendRadio') {
                    if (val[i] === 'label' && !isString(val['right'])) {
                        data['right'] = '搜索'
                    } else if (val[i] === 'actions') {
                        if (!isArray(pageProps[this.index].props.right)) {
                            data['right'] = [{
                                type: 'icon',
                                url: 'msg',
                                color: '#fff'
                            }]
                        }
                    }
                }
            })
            delete data['extendRadio']
        }
        pageProps[this.index].props = assign(pageProps[this.index].props, data)
        componentData.pagePorps = pageProps
        setComponentData({ ...componentData })
    }

    private getStyleValue(key: string, val: string) {
        switch (key) {
            case 'height': return Number(val)
            case 'width': return Number(val)
            default: return val
        }
    }
    private showLinkDialog = (index: number, tagName: string, field: string) => {
        this.selectIndex = index
        this.tagName = tagName
        this.field = field
        this.setState({
            linkDialog: true
        })
    }

    private handleCloseDialog(field: 'searchSelect' | 'uploadDialog' | 'linkDialog' | 'imagesDialog') {
        this.setState({
            [field]: false
        })
    }

    private handleFormIntChange(field: string, e: any) {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props[field] = e.target.value
        setComponentData({ ...componentData })
    }

    // private setComProps = (data: INavBarRightIcon | INavBarRightImage, dialogName: 'searchSelect') => {
    //     const { componentData, setComponentData }: any = this.props
    //     const right = componentData.pagePorps[this.index].props.right
    //     right[this.listIndex] = data
    //     this.setState({
    //         [dialogName]: false
    //     }, () => {
    //         setComponentData(cloneDeep(componentData))
    //     })
    // }

    private setCarouselUrl = (url: string, field: string, dialogName: 'imagesDialog') => {
        const { componentData, setComponentData }: any = this.props
        const right = componentData.pagePorps[this.index].props[field]
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
                    onEdit={this.handleEditStart.bind(this, data, index, 'LForm')}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <NavBar {...data.props} />
                </EditComponent>
            )
            case 'SearchBar': return (
                <EditComponent
                    edit={data.edit}
                    key={index}
                    onClick={this.handleEdit.bind(this, data, index)}
                    onEdit={this.handleEditStart.bind(this, data, index, 'LForm')}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <SearchBar {...data.props} />
                </EditComponent>
            )
            case 'Notice': return (
                <EditComponent
                    edit={data.edit}
                    key={index}
                    onClick={this.handleEdit.bind(this, data, index)}
                    onEdit={this.handleEditStart.bind(this, data, index, 'LForm')}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <Notice {...data.props} logo={baseUrl + data.props.logo} value={data.props.getType === 'read' ? [{ label: '内容将从数据库读取' }] : data.props.value} />
                </EditComponent>
            )
            case 'Carousel': return (
                <EditComponent
                    edit={data.edit}
                    key={index}
                    onClick={this.handleEdit.bind(this, data, index)}
                    onEdit={this.handleEditStart.bind(this, data, index, 'Carousel')}
                    onDelete={this.handleDelete.bind(this, index)}
                >
                    <Carousel {...data.props} baseUrl={baseUrl} />
                </EditComponent>
            )
            case 'TabBar': {
                const value: ITabBarValue[] = data.props.value || []
                omit(data.props, ['value'])
                return (
                    <EditComponent
                        edit={data.edit}
                        key={index}
                        onClick={this.handleEdit.bind(this, data, index)}
                        onEdit={this.handleEditStart.bind(this, data, index, 'Carousel')}
                        onDelete={this.handleDelete.bind(this, index)}
                    >
                        {/* <TabBar {...data.props} >
                            {
                                value.map((i: any, index: number) => {
                                    return (
                                        <TabBar.Item label={i.label || <Label color="red">未设置</Label>} key={index}>{i.content}</TabBar.Item>
                                    )
                                })
                            }
                        </TabBar> */}
                    </EditComponent>
                )
            }
        }
    }

    private handleDelete(index: number) {
        const { componentData, setComponentData } = this.props
        componentData.pagePorps.splice(index, 1)
        setComponentData(cloneDeep(componentData))
    }

    private handleListDel = (index: number, field: string) => {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props[field].splice(index, 1)
        setComponentData({ ...componentData })
    }

    private handleCarouselListAdd = (value: any) => {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props.value.push(value)
        setComponentData({ ...componentData })
    }

    private handleEditStart(data: IComponents, index: number, field: typeList) {
        this.index = index
        this.componentType = data.component
        this.setState({
            type: field,
            componentName: data.component,
            selected: 1
        })
    }

    private handlePickerChange = (data: any) => {
        const { components } = this.state
        const value = data.map((i: any) => {
            return i.url
        })
        components[this.index].props = {
            ...components[this.index].props,
            value
        }
        this.setState({
            components: [...components]
        })
    }


    private handleEdit(data: IComponents, index: number) {
        const { components } = this.state
        data.edit = true
        components[index] = data
        this.setState({
            components: [...components]
        })
    }

    private handelSetType = (value: string) => {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props['getType'] = value
        if (value === 'read') {
            pageProps[this.index].props.value = [{ label: '内容将从数据库读取', link: '' }]
        } else {
            pageProps[this.index].props.value = [{ label: '这里是自定义公告的标题', link: '' }, { label: '这里是自定义公告的标题', link: '' }]
        }
        setComponentData({ ...componentData })
    }

    private handleSetIntValue = (index: number, tagName: string, val: string, event: any) => {
        const { componentData, setComponentData } = this.props
        const pageProps: any = [...componentData.pagePorps]
        pageProps[this.index].props[tagName][index][val] = event.target.value
        setComponentData({ ...componentData })
    }

    // private getActionsView(): JSX.Element {
    //     const { selected, componentName } = this.state
    //     return (
    //         <TabBar type="vertical" className={com} selected={selected} tabBarClassName={com_bar} tabItemClassName={com_actions}>
    //             <TabBar.Item icon={<Icon icon="ios-apps" />} tooltipTitle="页面组件" placement="left">
    //                 <Drag data={{ component: 'NavBar', props: {}, edit: false }}>
    //                     <NavBar />
    //                 </Drag>
    //                 <Label className={com_label} color="#999">轮播</Label>
    //                 <Drag data={{ component: 'Carousel', props: { value: [{ url: `/images/banner-1.jpg` }, { url: `/images/banner-2.jpg` }], baseUrl }, edit: false }}>
    //                     <Carousel baseUrl={baseUrl} value={[{ url: `/images/banner-1.jpg` }, { url: `/images/banner-2.jpg` }]}>
    //                     </Carousel>
    //                 </Drag>
    //                 <Label className={com_label} color="#999">选项卡</Label>
    //                 <Drag data={{ component: 'TabBar', props: { value: [{ label: '选项', content: '选项', data: '' }, { label: '选项', content: '选项', data: '' }] }, edit: false }}>
    //                     <TabBar>
    //                         <TabBar.Item label="选项" >选项</TabBar.Item>
    //                         <TabBar.Item label="选项" >选项</TabBar.Item>
    //                     </TabBar>
    //                 </Drag>
    //             </TabBar.Item>
    //             <TabBar.Item icon={<Icon icon="ios-arrow-back" />} tooltipTitle="参数设置" placement="left" >
    //                 {
    //                     componentName === 'Page' && this.getPageNode()
    //                 }
    //                 {
    //                     componentName !== 'Page' && <LForm getItems={this.getItem} className={form_style} />
    //                 }
    //                 {/*{this.componentType === 'TabBar' ?
    //                     (
    //                         <DragDropContext onDragEnd={this.onDragTabBar}>
    //                             <Droppable droppableId="tab_bar" >
    //                                 {(provided) => (
    //                                     <div
    //                                         {...provided.droppableProps}
    //                                         ref={provided.innerRef}
    //                                         className={label_view}
    //                                     >
    //                                         {components[this.index].props.value.map((i: ITabBarValue, index: number) => (
    //                                             <Draggable key={index} draggableId={'tab_bar' + index.toString()} index={index}>
    //                                                 {(provided) => (
    //                                                     <div
    //                                                         className={`flex ${label_view_list}`}
    //                                                         ref={provided.innerRef}
    //                                                         {...provided.draggableProps}
    //                                                         {...provided.dragHandleProps}

    //                                                     >
    //                                                         <div className="flex_1">
    //                                                             <div className="flex">
    //                                                                 <div className={`flex_justify ${label_list}`}>选项卡文字</div>
    //                                                                 <Input
    //                                                                     className={`flex_1 ${label_list_int}`}
    //                                                                     value={i.label}
    //                                                                     onChange={this.handleTabBarInt.bind(this, index)}
    //                                                                     closeIconShow={false}
    //                                                                     maxLength={5}
    //                                                                     showMaxLength
    //                                                                 />
    //                                                             </div>
    //                                                             <div className="flex" style={{ marginTop: 10 }}>
    //                                                                 <Input className={`flex_1 ${label_list_int}`} value={i.data} placeholder="请选择数据" disabled closeIconShow={false} style={{ borderRight: 0 }} />
    //                                                                 <Button className={`flex_justify ${label_list_btn}`} mold="primary">选择数据</Button>
    //                                                             </div>
    //                                                         </div>
    //                                                         <div className={`${label_list_icon} flex_justify`}>
    //                                                             <Icon
    //                                                                 icon="md-close-circle"
    //                                                                 color="rgba(0, 0, 0, 0.3)"
    //                                                                 style={{ cursor: 'pointer' }}
    //                                                                 onClick={this.handleTabBarDel.bind(this, index)}
    //                                                             />
    //                                                         </div>
    //                                                     </div>
    //                                                 )}
    //                                             </Draggable>
    //                                         ))}
    //                                         {provided.placeholder}
    //                                     </div>
    //                                 )}
    //                             </Droppable>
    //                         </DragDropContext>

    //                     ) : null
    //                 } */}
    //             </TabBar.Item>
    //         </TabBar>
    //     )
    // }

    private getPageComponentItem = (fn: IFormFun): IFormItem[] => {
        const { componentData } = this.props
        return [{
            component: 'Input',
            label: '页面名称',
            props: {
                placeholder: '请输入名称',
                value: componentData.name,
                maxLength: 16,
            },
            additional: <Label color="#1890ff" style={{ paddingLeft: 0 }}>注意：页面名称是便于后台查找。</Label>,
            field: 'name'
        }, {
            component: 'Textarea',
            label: '页面介绍',
            props: {
                placeholder: '请输入标题',
                value: componentData.introduce,
                maxLength: 50,
                showMaxLength: true,
            },
            field: 'introduce'
        }, {
            component: 'Colors',
            label: '页面背景',
            props: {
                initColor: componentData.pageColor,
                onChange: this.updateComColorData.bind(this, 'pageColor'),
            },
            field: 'pageColor'
        }]
    }

    private handleSelectView = (index: number, field: any) => {
        this.listIndex = index
        this.setState({
            [field]: true
        })
    }

    private getPageNode() {
        return (
            <Form
                getItems={this.getPageComponentItem}
            />
        )
    }
    private updateComColorData = (field: string, value: any) => {
        const { componentData, setComponentData }: any = this.props
        componentData[field] = value.hex
        setComponentData(cloneDeep(componentData))
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

    private onDragPropsEnd(field: string, result: DropResult) {
        if (!result.destination) {
            return
        }
        const { componentData, setComponentData } = this.props
        const items = reorder(
            componentData.pagePorps[this.index].props[field],
            result.source.index,
            result.destination.index
        )
        componentData.pagePorps[this.index].props[field] = items
        setComponentData(cloneDeep(componentData))
    }

    private onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return
        }
        const { componentData, setComponentData } = this.props
        const items = reorder(
            componentData.pagePorps,
            result.source.index,
            result.destination.index
        );
        componentData.pagePorps = items
        setComponentData(cloneDeep(componentData))
    }

    private handleTabComponent = (name: string) => {
        this.setState({
            componentName: name,
            selected: 1
        })
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
        const { setComponentData, componentData } = this.props
        componentData.pagePorps.push(data)
        setComponentData(cloneDeep(componentData))
    }
}
export default connect(
    (state: IInitState) => ({
        componentData: state.componentData
    })
)(AppsDesign)