import * as React from 'react'
import { isArray } from 'muka'
import { Button, Icon, Input, } from 'components'
import { label_box } from './index.less'
import { label_list_btn, label_list_int, label_view_list, label_list_icon, label_view, label_list_view, label_list_view_bot } from '../pages/apps/index.less'

const componentData = function (self: any) {
    const { componentData } = self.props
    let props = componentData.pagePorps[self.index].props || {}
    return {
        'NavBar': [{
            component: 'Input',
            label: '标题：',
            props: {
                type: 'text',
                onChange: self.handleFormChange
            },
            field: 'title'
        }, {
            component: 'Input',
            label: '高度：',
            props: {
                type: 'number',
                onChange: self.handleFormChange
            },
            field: 'style.height'
        }, {
            component: 'Colors',
            label: '背景颜色：',
            props: {
                initColor: '#0693e3',
                onChange: self.handleFormChange
            },
            field: 'style.background'
        }],
        'SearchBar': [{
            component: 'Colors',
            label: '背景颜色：',
            props: {
                initColor: (props.style && props.style.background) || '#0693e3',
                onChange: self.handleFormChange
            },
            field: 'style.background'
        }, {
            component: 'Input',
            label: '提示文字：',
            props: {
                value: props.placeholder,
                onChange: self.handleFormChange,
                maxLength: 16,
                showMaxLength: true
            },
            field: 'placeholder'
        }, {
            component: 'Slider',
            label: '左侧间距：',
            props: {
                onChange: self.handleFormChange,
                value: (props.style && props.style.marginLeft) || 0,
                max: 20
            },
            field: 'style.marginLeft'
        }, {
            component: 'Slider',
            label: '右侧间距：',
            props: {
                onChange: self.handleFormChange,
                value: (props.style && props.style.marginRight) || 0,
                max: 20
            },
            field: 'style.marginRight'
        }, {
            component: 'Slider',
            label: '顶部间距：',
            props: {
                onChange: self.handleFormChange,
                value: (props.style && props.style.marginTop) || 0,
                max: 20
            },
            field: 'style.marginTop'
        }, {
            component: 'Slider',
            label: '底部间距：',
            props: {
                onChange: self.handleFormChange,
                value: (props.style && props.style.marginBottom) || 0,
                max: 20
            },
            field: 'style.marginBottom'
        }, {
            component: 'Radio',
            label: '左侧显示：',
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
            label: '右侧显示：',
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
                <div className={label_view}>
                    {props.right.map((item: any, index: number) => {
                        return (
                            <div
                                className={`flex ${label_view_list}`}
                                key={index}
                            >
                                <div className={`${label_list_view} flex_center`} onClick={self.handleSelectView}>
                                    {item.type === 'icon' && <Icon icon={item.url} color={item.color} />}
                                    <div className={label_list_view_bot}>图片/字体</div>
                                </div>
                                <div className="flex_1">
                                    {/* <div className="flex">
                                <div className={`flex_justify ${label_list}`}>选项卡文字</div>
                                <Input
                                    className={`flex_1 ${label_list_int}`}
                                    maxLength={5}
                                    showMaxLength
                                />
                            </div> */}
                                    <div className="flex">
                                        <Input className={`flex_1 ${label_list_int}`} placeholder="请选择链接地址" disabled closeIconShow={false} style={{ borderRight: 0 }} />
                                        <Button className={`flex_justify ${label_list_btn}`} mold="primary">选择链接</Button>
                                    </div>
                                </div>
                                <Icon
                                    className={label_list_icon}
                                    icon="md-close-circle"
                                    color="rgba(0, 0, 0, 0.3)"
                                    style={{ cursor: 'pointer' }}
                                // onClick={this.handleTabBarDel.bind(this, index)}
                                />
                            </div>
                        )
                    })}
                </div>
            ) : (
                    <div className={label_view}>
                        <div className={`flex`}>
                            <div className={`flex_justify ${label_box}`}>显示文字</div>
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
            label: '高度设置：',
            props: {
                onChange: self.handleFormChange,
                min: 100,
                max: 200,
                defaultValue: 200
            },
            field: 'style.height'
        }, {
            component: 'Slider',
            label: '左侧间距：',
            props: {
                onChange: self.handleFormChange,
                max: 20
            },
            field: 'style.marginLeft'
        }, {
            component: 'Slider',
            label: '右侧间距：',
            props: {
                onChange: self.handleFormChange,
                max: 20
            },
            field: 'style.marginRight'
        }, {
            component: 'Slider',
            label: '顶部间距：',
            props: {
                onChange: self.handleFormChange,
                max: 20
            },
            field: 'style.marginTop'
        }, {
            component: 'Slider',
            label: '底部间距：',
            props: {
                onChange: self.handleFormChange,
                max: 20
            },
            field: 'style.marginBottom'
        }, {
            component: 'Radio',
            label: '指示位置：',
            props: {
                onChange: self.handleFormChange,
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
                value: 'bottom'
            },
            field: 'dotPosition'
        }, {
            component: 'Radio',
            label: '指示样式：',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '长方形', value: 'rectangle',
                }, {
                    label: '圆形', value: 'circular',
                }],
                value: 'rectangle'
            },
            field: 'dotType'
        }, {
            component: 'Colors',
            label: '指示颜色：',
            props: {
                onChange: self.handleFormChange,
                initColor: '#fff'
            },
            field: 'dotColor'
        }, {
            component: 'Radio',
            label: '自动播放：',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '是', value: true,
                }, {
                    label: '否', value: false,
                }],
                value: false
            },
            field: 'autoPlay'
        }, {
            component: 'Radio',
            label: '播放方式：',
            props: {
                onChange: self.handleFormChange,
                options: [{
                    label: '向右', value: 'scrollx',
                }, {
                    label: '向下', value: 'scrolly',
                }, {
                    label: '淡入', value: 'fade',
                }],
                value: 'scrollx'
            },
            field: 'effect'
        }, {
            component: 'ImagePicker',
            label: '图片设置：',
            props: {
                onChange: self.handlePickerChange,
                value: [{
                    url: '/static/banner-1.jpg'
                }, {
                    url: '/static/banner-2.jpg'
                }]
            }
        }],
        'TabBar': [{
            component: 'Slider',
            label: '高度设置：',
            props: {
                onChange: self.handleFormChange,
                min: 100,
                max: 242,
                defaultValue: 242
            },
            field: 'style.height'
        }, {
            component: 'Radio',
            label: '显示方向：',
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
            label: '指示颜色：',
            props: {
                onChange: self.handleFormChange,
                initColor: '#0693e3'
            },
            field: 'selectedColor'
        },]
    }
}

export default componentData