import { IInitState } from '../state'

export const SET_HIST = 'SET_HIST'

export function mapStateToProps(state: IInitState) {
    return {
        hist: state.hist || '',
    }
}