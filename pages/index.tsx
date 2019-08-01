import { Component } from 'react'
import { Carousel, Image } from 'components'
import Axios from 'axios'

interface IState {
    lists: any[]
    selected: number
    time: string
    autoplay: boolean
    timeDur: number
}

export default class Index extends Component<any, any> {

    public state: IState = {
        lists: [],
        autoplay: true,
        selected: 0,
        time: '',
        timeDur: 10000
    }

    public render(): JSX.Element {
        const { lists, selected, autoplay, timeDur } = this.state
        return (
            <Carousel
                autoplay={autoplay}
                selected={selected}
                time={timeDur}
                style={{ width: '100vw', height: '100vh' }}
                dots={false}
                onChnage={this.handleTabChange}
            >
                {
                    lists.map((i: any, index: number) => {
                        return (
                            <div style={{ position: 'relative', width: '100%', height: '100%' }} key={index}>
                                <Image src={'http://www.snplay.top:8080/' + i.url} style={{ width: 'auto', height: '100%', display: 'block', margin: '0 auto' }} />
                                <div className="flex_center" style={{ position: 'absolute', height: '70px', width: '100%', bottom: 0, left: 0, background: 'rgba(0,0,0,0.5)', fontSize: '20px', color: '#fff' }}>CN: {i.msg}</div>
                            </div>
                        )
                    })
                }
            </Carousel>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private handleTabChange = (val: number) => {
        const { lists, timeDur } = this.state
        if (lists.length - 1 === val) {
            this.setState({
                selected: val,
                autoplay: false
            }, () => {
                setTimeout(() => {
                    this.reload()
                }, timeDur - 1000)
            })

        }
    }

    private getData = async () => {
        Axios({
            url: 'http://www.snplay.top:8080/fs/getimages',
            method: 'GET'
        }).then((data) => {
            this.setState({
                lists: data.data.data,
                time: data.data.time,
                timeDur: data.data.timeDur
            })
        })
    }

    private reload = () => {
        const { time } = this.state
        console.log(time)
        Axios({
            url: 'http://www.snplay.top:8080/fs/getimages',
            method: 'GET',
            params: {
                startTime: time
            }
        }).then((data) => {
            this.setState({
                lists: data.data.data,
                selected: 0,
                autoplay: true,
                time: data.data.time,
                timeDur: data.data.timeDur
            })
        })
    }
}