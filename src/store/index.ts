import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from '../saga'
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'muka_store',
    storage,
    blacklist: ['imageModalVisible', 'spinLoading']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)