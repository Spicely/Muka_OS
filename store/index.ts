import { createStore, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'zh_store',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const initialState = (initialState: any) => {
    return createStore(persistedReducer, initialState, applyMiddleware(thunk))
}