import React, { Component } from 'react'
import load from 'load-script'
import { isFunction, browser } from 'muka'
import { getUnit, prefix, transition } from '../utils'
import styled from 'styled-components'
import Icon from '../Icon'
import { theme } from 'src/App'

declare const qq: any
declare const AMap: any
declare const AMapUI: any

const PickerBox = styled.div`
    position: absolute;
    top:${getUnit(30)};
    right: ${getUnit(30)};
`

const PoiInfo = styled.div`
    background: #fff;
`

const PickerMax = styled.div`
    position: absolute;
    bottom:${getUnit(10)};
    right: ${getUnit(10)};
    cursor: pointer;
`
const MapView = styled.div`
    width: 100%;
    height: 100%;
`
export interface IMapProps {
    type: 'tMap' | 'bMap' | 'aMap'
    width?: string | number
    height?: string | number
    version?: string
    apiKey: string
    // 地址参数追加
    urlParams?: string
    // 是否定位
    location?: boolean
    // 应用名称
    appName?: string
    // 初始定位
    initLatLng?: {
        lat: number
        lng: number
    }
    // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    plugins?: string[]
    // 需要加载的 AMapUI ui插件
    UIPlugins?: string[]
    extendUrls?: string[]
    // 显示搜索框
    poiPicker?: boolean
    // 最大化按钮
    showMaxBtn?: boolean
    isInDialog?: boolean
    onInit?: (map: any) => void
    onLocationError?: () => void
    onLocationAddr?: (position: any) => void
    onLoadUrlError?: () => void
}

interface ILocation {
    latitude: number
    longitude: number
}

// tslint:disable-next-line: no-empty-interface
interface IState {
    maxView: boolean
}

const mapUrl: any = {
    tMap: 'https://map.qq.com/api/js?v=2.exp&key=',
    bMap: '',
    aMap: ''
}

export const setMapUrlSource = (params: any) => {
    const keys = Object.keys(mapUrl)
    keys.map((i: any) => {
        mapUrl[i] = params[i]
    })
}

export default class Map extends Component<IMapProps, IState> {

    public static defaultProps: IMapProps = {
        type: 'aMap',
        height: 600,
        width: 800,
        apiKey: '',
        extendUrls: [],
        plugins: [],
        UIPlugins: [],
    }

    public state: IState = {
        maxView: false
    }

    private node: Element | null = null

    private map: any

    private location?: ILocation = undefined

    private geolocation: any = null

    private geocoder: any = null

    private events: any[] = []

    public UNSAFE_componentWillMount() {

    }

    public componentDidMount() {
        const { type, version, apiKey, plugins, initLatLng, onInit, UIPlugins, poiPicker } = this.props
        const win: any = window
        switch (type) {
            case 'tMap': {
                if (!isFunction(win.tMapInit)) {
                    this.initTMap()
                    this.getScriptFile().catch(() => {
                        const { onLoadUrlError } = this.props
                        if (isFunction(onLoadUrlError)) {
                            onLoadUrlError()
                        }
                    })
                } else {
                    win.tMapInit()
                }
            }; break;
            case 'bMap': ; break;
            default: {
                const AMapLoader = require('@amap/amap-jsapi-loader')
                AMapLoader.load({
                    "key": apiKey,
                    "version": version,
                    "plugins": plugins,
                    "AMapUI": {
                        "version": '1.1',
                        "plugins": UIPlugins,
                    },
                    "Loca": {
                        "version": '1.3.2'
                    },
                }).then((AMap: any) => {
                    this.map = new AMap.Map(`${prefix}map`, {
                        center: initLatLng ? [initLatLng.lat, initLatLng.lng] : undefined,
                        zoom: 12
                    })
                    poiPicker && this.poiPicker()
                    onInit?.call(null, this.map)
                }).catch((e: any) => {
                    console.log(e);
                })
            };
        }
    }

    public render(): JSX.Element {
        const { width, height, poiPicker, showMaxBtn, isInDialog } = this.props
        const { maxView } = this.state
        return (
            <div style={{ position: 'relative', height, width }}>
                <div style={maxView ? {
                    width: '100%',
                    height: isInDialog ? `calc(100% - ${getUnit(Number(theme.navBarTheme.height) * 2)})` : '100%',
                    position: 'fixed',
                    top: isInDialog ? getUnit(theme.navBarTheme.height) : 0,
                    left: 0
                } : { height, width }}>
                    <MapView
                        className={`${prefix}map`}
                        id={`${prefix}map`}
                        ref={(e) => this.node = e}
                    />
                    {poiPicker && (
                        <PickerBox>
                            <input id={`${prefix}picker_input`} placeholder="输入关键字选取地点" />
                            <PoiInfo id="poiInfo"></PoiInfo>
                        </PickerBox>
                    )}
                    {showMaxBtn && (
                        <PickerMax>
                            <Icon
                                icon={maxView ? 'ios-contract' : 'ios-expand'}
                                onClick={this.handleReSize}
                            />
                        </PickerMax>
                    )}
                </div>
            </div>
        )
    }

    private handleReSize = () => {
        const { maxView } = this.state
        this.setState({
            maxView: !maxView,
        })
    }

    private initTMap = () => {
        const { onLocationError, initLatLng, onLocationAddr, onInit } = this.props
        const win: any = window
        let dragendEventStatus = true
        win.tMapInit = async () => {
            const posLatLng = initLatLng ? new qq.maps.LatLng(initLatLng.lat, initLatLng.lng) : undefined
            const map = new qq.maps.Map(this.node, {
                zoom: 12,
                center: posLatLng,
                resize: true,
            })
            const geocoder = new qq.maps.Geocoder()
            geocoder.setComplete((result: any) => {
                if (isFunction(onLocationAddr)) {
                    onLocationAddr(result.detail)
                }
                if (dragendEventStatus) {
                    map.setCenter(result.detail.location)
                    const marker = new qq.maps.Marker({
                        map,
                        draggable: true,
                        position: result.detail.location
                    })
                    qq.maps.event.addListener(marker, 'dragend', (event: any) => {
                        const latLng = new qq.maps.LatLng(event.latLng.lat, event.latLng.lng)
                        geocoder.getAddress(latLng)
                    })
                    dragendEventStatus = false
                }
            })
            // tslint:disable-next-line: only-arrow-functions
            geocoder.setError(function () {
                alert('出错了，请输入正确的经纬度！！！')
            })
            if (window.location) {
                this.getLocation().then((data) => {
                    let lat = data.lat
                    let lng = data.lng
                    if (!browser.isMobile) {
                        lat = lat + 0.008081
                        lng = lng - 0.005184
                    }
                    const latLng = new qq.maps.LatLng(lat, lng)
                    geocoder.getAddress(latLng)
                }).catch(() => {
                    if (isFunction(onLocationError)) {
                        onLocationError()
                    }
                })
            } else {
                if (isFunction(onLocationAddr)) {
                    onLocationAddr({
                        lat: initLatLng ? initLatLng.lat : 39.916527,
                        lng: initLatLng ? initLatLng.lng : 116.397128
                    })
                }
            }
            if (isFunction(onInit)) {
                onInit(map)
            }
        }
    }

    private getScriptFile() {
        const { extendUrls, type, apiKey, urlParams } = this.props
        const urls = [mapUrl[type] + apiKey + (urlParams ? '&libraries=' + urlParams : '') + '&callback=tMapInit', ...(extendUrls || [])]
        switch (type) {
            case 'tMap': urls.push('https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js'); break;
            case 'bMap': urls.push(''); break;
            default: urls.push(`https://webapi.amap.com/maps?v=1.4.15&key=${apiKey}&callback=aMapInit`);
        }
        const promiseAll = urls.map((i) => {
            return new Promise((resolve, reject) => {
                load(i, (err: any) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
            })
        })
        return Promise.all(promiseAll)
    }

    private poiPicker() {
        const poiPicker = new AMapUI.PoiPicker({
            input: `${prefix}picker_input`
        });
        var marker = new AMap.Marker();
        var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -20)
        });
        //选取了某个POI
        poiPicker.on('poiPicked', (poiResult: any) => {
            var source = poiResult.source,
                poi = poiResult.item,
                info = {
                    source: source,
                    id: poi.id,
                    name: poi.name,
                    location: poi.location.toString(),
                    address: poi.address
                };

            marker.setMap(this.map);
            infoWindow.setMap(this.map);
            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);
            infoWindow.setContent('POI信息: <pre>' + JSON.stringify(info, null, 2) + '</pre>');
            infoWindow.open(this.map, marker.getPosition());
            this.map.setCenter(marker.getPosition());
        });
    }

    /**
     *
     * 使用地图插件获得精准位置
     *
     */
    private getLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            const { apiKey, type, appName } = this.props
            if (type === 'tMap') {
                this.geolocation = new qq.maps.Geolocation(apiKey, appName || 'mukaMap')
                this.geolocation.getLocation((position: any) => {
                    resolve(position)
                }, (e: any) => {
                    reject(e)
                }, {
                    timeout: 8000
                })
                return
            }
        })
    }
}
