export const SET_CAROISELLIST_DATA = 'SET_CAROISELLIST_DATA'

export interface ICarouselList {
    id: string
    img: string
    type: 'app' | 'url'
    url: string
    status: boolean
}
export interface ICarouselProps {
    count: number
    items: ICarouselList[]
}

export interface ICarouselListProps {
    carouselList: ICarouselProps
    setCarouselList: (data: ICarouselProps) => void
}

export const actions = {
    setCarouselList: (data: ICarouselProps) => {
        return {
            type: SET_CAROISELLIST_DATA,
            data
        }
    }
}