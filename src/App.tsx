import * as React from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'components'
import PageLayout from 'src/layouts/PageLayout'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './store'
import { GlobalStyle } from './utils/node'
import { loadable } from './routes'
import { ThemeData, Color } from './components/lib/utils'
import Router from './router'

export const theme = new ThemeData({
    primarySwatch: Color.fromRGB(102, 204, 191)
})
class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConfigProvider locale={zhCN}>
                        <GlobalStyle />
                        <ThemeProvider theme={theme}>
                            <BrowserRouter>
                                <Switch>
                                    <Route path="/login" exact component={loadable(import('./pages/Login'))} />
                                    <PageLayout>
                                        <Router />
                                    </PageLayout>
                                </Switch>
                            </BrowserRouter>
                        </ThemeProvider>
                    </ConfigProvider>
                </PersistGate>
            </Provider>
        )
    }
}

export default App