const defaultImg = require('../../assets/banner-1.jpg')
const comData = {
    home: [{
        label: '基础组件',
        components: [{
            label: '导航栏',
            data: {
                component: 'NavBar',
                props: {
                    titleType: 'text'
                }
            }
        }, {
            label: '轮播',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }, {
            label: '公告',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }, {
            label: '商品组',
            data: {
                component: 'ShopList',
                props: {
                    data: [{
                        imgUrl: defaultImg
                    }, {
                        imgUrl: defaultImg
                    }, {
                        imgUrl: defaultImg
                    }, {
                        imgUrl: defaultImg
                    }]
                }
            }
        }, {
            label: '搜索框',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }, {
            label: '固定搜索框',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }, {
            label: '版权',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }, {
            label: '列表导航',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }, {
            label: '辅助线',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }, {
            label: '选项卡',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }]
    }, {
        label: '其他',
        components: [{
            label: '视频',
            data: {
                component: 'Carousel',
                props: {
                    autoPlay: true,
                    countNum: 3
                }
            }
        }]
    }]
}

export default comData