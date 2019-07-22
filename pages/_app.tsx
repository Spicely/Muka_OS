import App, { Container, AppComponentProps } from 'next/app'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { initialState } from 'store'
import { persistStore } from 'redux-persist'
import withRedux from 'next-redux-wrapper'
import withNProgress from 'next-nprogress'

interface IProps extends AppComponentProps {
    store: Store
}

class MyApp extends App<IProps, any> {
    render(): JSX.Element {
        const { Component, pageProps, store } = this.props
        const persistor = persistStore(store)
        return (
            <Container>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </Container>
        )
    }
}
export default withRedux(initialState)(withNProgress()(MyApp))