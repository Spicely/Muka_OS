import * as React from 'react'
import { isArray } from 'lodash'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Button, Icon, Image, Input, Colors, } from 'components'
import { baseUrl } from 'src/utils/axios'
import { getRatioUnit, IconThemeData } from 'src/components/lib/utils'

const LabelView = styled.div`
    border: ${getRatioUnit(1)} solid #eee;
    padding: ${getRatioUnit(10)};
    margin-bottom: ${getRatioUnit(10)};
    position: relative;
`

const LabelListView = styled.div`
    width: ${getRatioUnit(68)};
    height: ${getRatioUnit(68)};
    margin-right: ${getRatioUnit(10)};
    background: #d8d8d8;
    position: relative;
    cursor: pointer;
    overflow: hidden;
`

const ImageView = styled(Image)`
    width: 100%;
    height: auto;
`

const CloseIcon = styled(Icon)`
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
`

const componentData = function (self: any) {
    const { componentData } = self.props
    let props = componentData.pageProps[self.index].props || {}
    return {
        'NavBar': [{
            component: 'RadioGroup',
            label: '标题类型',
            props: {
                value: props.titleType || 'text',
                options: [{
                    label: '文字',
                    value: 'text'
                }, {
                    label: '图片',
                    value: 'img'
                }],
                onChange: self.handleFormChange
            },
            field: 'titleType'
        }, {
            component: 'Input',
            visible: props.titleType === 'text',
            label: '标题',
            props: {
                value: props.title,
                type: 'text',
                onChange: self.handleFormChange
            },
            field: 'title'
        }, {
            component: 'Slider',
            label: '高度',
            props: {
                value: props.height || 48,
                type: 'number',
                min: 40,
                max: 60,
                onChange: self.handleFormChange
            },
            field: 'style.height'
        }, {
            component: 'RadioGroup',
            label: '标题显示',
            props: {
                value: props.centerTitle || false,
                options: [{
                    label: '默认',
                    value: false
                }, {
                    label: '居中',
                    value: true
                }],
                onChange: self.handleFormChange
            },
            field: 'titleCenter'
        }, {
            component: 'RadioGroup',
            label: '分割线',
            props: {
                value: props.divider || true,
                options: [{
                    label: '不显示',
                    value: false
                }, {
                    label: '显示',
                    value: true
                }],
                onChange: self.handleFormChange
            },
            field: 'divider'
        }, {
            component: 'RadioGroup',
            label: '右侧',
            props: {
                value: props.rightType || 'cart',
                options: [{
                    label: '购物车',
                    value: 'cart'
                }, {
                    label: '搜索',
                    value: 'search'
                }],
                onChange: self.handleFormChange
            },
            field: 'rightType'
        }, {
            component: 'Colors',
            label: '图标颜色',
            props: {
                initColor: '#fff',
                onChange: self.handleFormChange
            },
            field: 'iconColor'
        }, {
            component: 'Colors',
            label: '背景颜色',
            props: {
                initColor: '#0693e3',
                onChange: self.handleFormChange
            },
            field: 'style.background'
        }],
        'SearchBar': [{
            component: 'Colors',
            label: '背景颜色',
            props: {
                initColor: (props.style && props.style.background) || '#0693e3',
                onChange: self.handleFormChange
            },
            field: 'style.background'
        }, {
            component: 'Input',
            label: '提示文字',
            props: {
                value: props.placeholder,
                onChange: self.handleFormChange,
                maxLength: 16,
                showMaxLength: true
            },
            field: 'placeholder'
        }, {
            component: 'Slider',
            label: '左侧间距',
            props: {
                onChange: self.handleFormChange,
                value: (props.style && props.style.marginLeft) || 0,
                max: 20
            },
            field: 'style.marginLeft'
        }, {
            component: 'Slider',
            label: '右侧间距',
            props: {
                onChange: self.handleFormChange,
                value: (props.style && props.style.marginRight) || 0,
                max: 20
            },
            field: 'style.marginRight'
        }, {
            component: 'Slider',
            label: '顶部间距',
            props: {
                onChange: self.handleFormChange,
                value: (props.style && props.style.marginTop) || 0,
                max: 20
            },
            field: 'style.marginTop'
        }, {
            component: 'Slider',
            label: '底部间距',
            props: {
                onChange: self.handleFormChange,
                value: (props.style && props.style.marginBottom) || 0,
                max: 20
            },
            field: 'style.marginBottom'
        }, {
            component: 'Radio',
            label: '左侧显示',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '无', value: null,
                }, {
                    label: '返回按钮', value: undefined,
                }],
                value: props.left
            },
            field: 'left'
        }, {
            component: 'Radio',
            label: '右侧显示',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '文字', value: 'label',
                }, {
                    label: '功能', value: 'actions',
                }],
                value: isArray(props.right) ? 'actions' : 'label'
            },
            additional: isArray(props.right) ? (
                <div>
                    {props.right.map((item: any, index: number) => {
                        return (
                            <div
                                className={`flex`}
                                key={index}
                            >
                                <div className={`flex_center`} onClick={self.handleSelectView.bind(self, index, 'searchSelect')}>
                                    {item.type === 'icon' && <Icon icon={item.url} color={item.color} />}
                                    {item.type === 'image' && <Image src={item.url} />}
                                    <div>图片/字体</div>
                                </div>
                                <div className="flex_1">
                                    <div className="flex">
                                        <Input className={`flex_1`} value={item.link} placeholder="请选择链接地址" disabled closeIconShow={false} style={{ borderRight: 0 }} />
                                        <Button className={`flex_justify`} onClick={self.showLinkDialog.bind(self, index, 'right', 'link')} mold="primary">选择链接</Button>
                                    </div>
                                    {item.type === 'icon' && <Colors initColor={item.color} style={{ marginTop: '7px' }} onChange={self.handleNavBarRightColor.bind(self, index)} />}
                                </div>
                                <Icon
                                    icon="md-close-circle"
                                    color="rgba(0, 0, 0, 0.3)"
                                    style={{ cursor: 'pointer' }}
                                    onClick={self.handleNavBarRightDel.bind(self, index)}
                                />
                            </div>
                        )
                    })}
                    {
                        props.right.length < 2 && (
                            <Button style={{ width: '100%' }} onClick={self.addNavRight}>
                                <Icon icon="ios-add" />
                                添加一个
                            </Button>
                        )
                    }

                </div>
            ) : (
                    <div>
                        <div className={`flex`}>
                            <div className={`flex_justify`}>显示文字</div>
                            <Input
                                className="flex_1"
                                value={props.right}
                                onChange={self.handleFormIntChange.bind(self, 'right')}
                                showMaxLength={true}
                                maxLength={4}
                            />
                        </div>
                    </div>
                ),
            field: 'extendRadio'
        }],
        'Carousel': [{
            component: 'Slider',
            label: '高度设置',
            props: {
                onChange: self.handleFormChange,
                min: 100,
                max: 170,
                defaultValue: props.style.height || 170
            },
            field: 'style.height'
        }, {
            component: 'Slider',
            label: '左侧间距',
            props: {
                onChange: self.handleFormChange,
                max: 20,
                defaultValue: props.style.marginLeft || 0
            },
            field: 'style.marginLeft'
        }, {
            component: 'Slider',
            label: '右侧间距',
            props: {
                onChange: self.handleFormChange,
                max: 20,
                defaultValue: props.style.marginRight || 0
            },
            field: 'style.marginRight'
        }, {
            component: 'Slider',
            label: '顶部间距',
            props: {
                onChange: self.handleFormChange,
                max: 20,
                defaultValue: props.style.marginTop || 0
            },
            field: 'style.marginTop'
        }, {
            component: 'Slider',
            label: '底部间距',
            props: {
                onChange: self.handleFormChange,
                max: 20,
                defaultValue: props.style.marginBottom || 0
            },
            field: 'style.marginBottom'
        }, {
            component: 'RadioGroup',
            label: '指示位置',
            props: {
                onChange: self.handleFormChange,
                itemStyle: {
                    marginBottom: getRatioUnit(5)
                },
                options: [{
                    label: '底部', value: 'bottom',
                }, {
                    label: '底部右测', value: 'bottomRight',
                }, {
                    label: '底部左测', value: 'bottomLeft',
                }, {
                    label: '左侧', value: 'left',
                }, {
                    label: '右侧', value: 'right',
                }, {
                    label: '顶部', value: 'top',
                }],
                value: props.dotPosition || 'bottom'
            },
            field: 'dotPosition'
        }, {
            component: 'RadioGroup',
            label: '指示样式',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '长方形', value: 'rectangle',
                }, {
                    label: '圆形', value: 'circular',
                }],
                value: props.dotType || 'rectangle'
            },
            field: 'dotType'
        }, {
            component: 'Colors',
            label: '指示颜色',
            props: {
                onChange: self.handleFormChange,
                initColor: props.dotColor || '#fff'
            },
            field: 'dotColor'
        }, {
            component: 'RadioGroup',
            label: '自动播放',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '是', value: true,
                }, {
                    label: '否', value: false,
                }],
                value: props.autoplay || false
            },
            field: 'autoplay'
        }, {
            component: 'RadioGroup',
            label: '播放方式',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '向左', value: 'scrollx',
                }, {
                    label: '向下', value: 'scrolly',
                }, {
                    label: '淡入', value: 'fade',
                }],
                value: props.effect || 'scrollx'
            },
            field: 'effect'
        }, {
            component: 'RadioGroup',
            label: '图片设置',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '2个', value: 2,
                }, {
                    label: '3个', value: 3,
                }, {
                    label: '4个', value: 4,
                }, {
                    label: '5个', value: 5,
                }],
                value: props.countNum || 3
            },
            field: 'countNum',
            
            // additional: (
            //     <div>
            //         <DragDropContext onDragEnd={self.onDragPropsEnd.bind(self, 'value')}>
            //             <Droppable droppableId="droppable_label" >
            //                 {(provided, snapshot) => {
            //                     return (
            //                         <div
            //                             {...provided.droppableProps}
            //                             ref={provided.innerRef}
            //                         >
            //                             {
            //                                 (props.value || []).map((item: any, index: number) => {
            //                                     return (
            //                                         <Draggable key={index} draggableId={index.toString()} index={index}>
            //                                             {(provided) => (
            //                                                 <LabelView
            //                                                     className="flex"
            //                                                     ref={provided.innerRef}
            //                                                     {...provided.draggableProps}
            //                                                     {...provided.dragHandleProps}
            //                                                 >
            //                                                     <LabelListView className="flex_center">
            //                                                         <ImageView src={baseUrl + item.url} key={item.url + index} />
            //                                                     </LabelListView>
            //                                                     <div className="flex_1">
            //                                                         <div className="flex_1">
            //                                                             <div className="flex">
            //                                                                 <Input className={`flex_1`} value={item.url} placeholder="请选择图片地址" disabled closeIconShow={false} style={{ borderRight: 0 }} />
            //                                                                 <Button className={`flex_justify`} onClick={self.handleUploadView.bind(self, index)} mold="primary">上传图片</Button>
            //                                                             </div>
            //                                                         </div>
            //                                                         <div className="flex_1" style={{ marginTop: '7px' }}>
            //                                                             <div className="flex">
            //                                                                 <Input className={`flex_1`} value={item.link} placeholder="请选择链接地址" disabled closeIconShow={false} style={{ borderRight: 0 }} />
            //                                                                 <Button className={`flex_justify`} onClick={self.showLinkDialog.bind(self, index, 'value', 'link')} mold="primary">选择链接</Button>
            //                                                             </div>
            //                                                         </div>
            //                                                     </div>
            //                                                     <CloseIcon
            //                                                         icon="md-close-circle"
            //                                                         color="rgba(0, 0, 0, 0.3)"
            //                                                         theme={new IconThemeData({ size: 18 })}
            //                                                         style={{ cursor: 'pointer' }}
            //                                                         onClick={self.handleListDel.bind(self, index, 'value')}
            //                                                     />
            //                                                 </LabelView>
            //                                             )}
            //                                         </Draggable>
            //                                     )
            //                                 })
            //                             }
            //                             <Button style={{ width: '100%', marginTop: snapshot.isDraggingOver ? '100px' : '' }} onClick={self.handleCarouselListAdd.bind(self, { url: '/images/banner-1.jpg', link: '' })}>
            //                                 <div className="flex">
            //                                     <Icon icon="ios-add" />
            //                                     <div className="flex_center">添加一个</div>
            //                                 </div>
            //                             </Button>
            //                         </div>
            //                     )
            //                 }}

            //             </Droppable>
            //         </DragDropContext>

            //     </div>
            // )
        }],
        'TabBar': [{
            component: 'Slider',
            label: '高度设置',
            props: {
                onChange: self.handleFormChange,
                min: 100,
                max: 242,
                defaultValue: 242
            },
            field: 'style.height'
        }, {
            component: 'Radio',
            label: '显示方向',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '横向', value: 'horizontal',
                }, {
                    label: '竖向', value: 'vertical',
                }],
                value: 'horizontal'
            },
            field: 'type'
        }, {
            component: 'Colors',
            label: '指示颜色',
            props: {
                onChange: self.handleFormChange,
                initColor: '#0693e3'
            },
            field: 'selectedColor'
        },],
        'Notice': [{
            component: 'Colors',
            label: '背景颜色',
            props: {
                onChange: self.handleFormChange,
                initColor: (props.style && props.style.background) || '#fff'
            },
            field: 'style.background'
        }, {
            component: 'Colors',
            label: '文字颜色',
            props: {
                onChange: self.handleFormChange,
                initColor: (props.style && props.labelColor) || '#000'
            },
            field: 'labelColor'
        }, {
            component: 'Colors',
            label: '图标颜色',
            props: {
                onChange: self.handleFormChange,
                initColor: props.iconColor || '#b1b1b1'
            },
            field: 'iconColor'
        }, {
            component: 'Input',
            label: '公告图标',
            props: {
                disabled: true,
                value: props.logo,
                extend: <Button mold="primary">选择图片</Button>,
                extendStyle: { padding: 0 }
            },
            additional: (
                <div style={{ paddingLeft: '55px', marginTop: '10px' }}>
                    <Image src={baseUrl + props.logo} style={{ width: '120px' }} />
                </div>
            ),
            field: 'logo'
        }, {
            component: 'Slider',
            label: '滚动速度',
            props: {
                onChange: self.handleFormChange,
                min: 1,
                max: 10,
                defaultValue: props.speed || 4
            },
            field: 'speed'
        }, {
            component: 'Radio',
            label: '滚动方向',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '向左', value: 'scrollx',
                }, {
                    label: '向上', value: 'scrolly',
                }],
                value: props.effect
            },
            field: 'effect'
        }, {
            component: 'Radio',
            label: '滚动方式',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '滑动', value: 'roll',
                }, {
                    label: '切换', value: 'switch',
                }],
                value: props.mode || 'roll'
            },
            field: 'mode'
        }, {
            component: 'Radio',
            label: '循环',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '是', value: true,
                }, {
                    label: '否', value: false,
                }],
                value: props.loop
            },
            field: 'loop'
        }, {
            component: 'Radio',
            label: '公告内容',
            props: {
                onChange: self.handelSetType,
                options: [{
                    label: '读取商城公告', value: 'read',
                }, {
                    label: '手动填写', value: 'value',
                }],
                value: props.getType
            },
            field: 'getType',
            additional: props.getType === 'value' && (
                <div>
                    <DragDropContext onDragEnd={self.onDragPropsEnd.bind(self, 'value')}>
                        <Droppable droppableId="droppable_label" >
                            {(provided, snapshot) => {
                                return (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {
                                            (props.value || []).map((item: any, index: number) => {
                                                return (
                                                    <Draggable key={index} draggableId={index.toString()} index={index}>
                                                        {(provided) => (
                                                            <div
                                                                className={`flex`}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <div className={`flex_center`} >
                                                                    拖动排序
                                                                </div>
                                                                <div className="flex_1">
                                                                    <div className="flex_1">
                                                                        <div className="flex">
                                                                            <Input className={`flex_1`} value={item.label} placeholder="请输入公告标题" onChange={self.handleSetIntValue.bind(self, index, 'value', 'label')} closeIconShow={false} style={{ borderRight: 0 }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex_1" style={{ marginTop: '7px' }}>
                                                                        <div className="flex">
                                                                            <Input className={`flex_1`} value={item.link} placeholder="请选择链接地址" disabled closeIconShow={false} style={{ borderRight: 0 }} />
                                                                            <Button className={`flex_justify`} onClick={self.showLinkDialog.bind(self, index, 'value', 'link')} mold="primary">选择链接</Button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Icon
                                                                    icon="md-close-circle"
                                                                    color="rgba(0, 0, 0, 0.3)"
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={self.handleListDel.bind(self, index, 'value')}
                                                                />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )
                                            })
                                        }
                                        <Button style={{ width: '100%', marginTop: snapshot.isDraggingOver ? '100px' : '', transition: 'none' }} onClick={self.handleCarouselListAdd.bind(self, { label: '这里是自定义公告的标题', link: '' })}>
                                            <Icon icon="ios-add" />添加一个
                                        </Button>
                                    </div>
                                )
                            }}

                        </Droppable>
                    </DragDropContext>

                </div>
            )
        }, {
            component: 'Radio',
            label: '读取数量',
            render: props.getType === 'read' ? true : false,
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '5条', value: 5,
                }, {
                    label: '10条', value: 10,
                }, {
                    label: '20条', value: 20,
                }],
                value: 5
            },
            field: 'total'
        },]
    }
}

export default componentData