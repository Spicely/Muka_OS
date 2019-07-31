import { Component } from 'react'
import { Carousel, Image } from 'components'
import Axios from 'axios'

interface IState {
    lists: any[]
    selected: number
}

export default class Index extends Component<any, any> {

    public state: IState = {
        lists: [],
        selected: 0
    }

    public render(): JSX.Element {
        const { lists, selected } = this.state
        return (
            <Carousel autoplay selected={selected} time={5000} style={{ width: '100vw', height: '100vh' }} dots={false} >
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

    private getData = async () => {
        Axios({
            // url: 'http://www.snplay.top:8080/fs/getimages',
            url: 'http://localhost:4000/api/fs/getimages',
            method: 'POST'
        }).then((data) => {
            this.setState({
                lists: data.data.data
            })
        })
        this.reload()
    }

    private reload = () => {
        setInterval(() => {
            Axios({
                // url: 'http://www.snplay.top:8080/fs/getimages',
                url: 'http://localhost:4000/api/fs/getimages',
                method: 'POST'
            }).then((data) => {
                const { lists } = this.state
                if (lists.length !== data.data.data.length) {
                    const newData = data.data.data.filter((i: any) => {
                        const val = lists.find((k) => {
                            return i.id === k.id
                        })
                        return val ? false : true
                    })
                    const length = lists.length - 1
                    this.setState({
                        lists: [
                            ...lists,
                            ...newData,
                        ],
                        selected: length
                    })
                }
            })
        }, 10000)
    }
}