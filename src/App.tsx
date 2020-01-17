import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'components'
import PageLayout from 'src/layouts/PageLayout'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './store'
import { GlobalStyle } from './utils/node'
import { routes, IRoutes, loadable } from './routes'
import { ThemeData, Color } from './components/lib/utils'

const theme = new ThemeData({
    primarySwatch: Color.fromRGB(102, 204, 191)
})
class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <GlobalStyle />
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/login" exact component={loadable(import('./pages/Login'))} />
                                <PageLayout>
                                    <Switch>
                                        {
                                            routes.map((item: IRoutes, index: number) => {
                                                return <Route path={item.path} exact component={loadable(item.component)} key={index} />
                                            })
                                        }
                                    </Switch>
                                </PageLayout>
                            </Switch>
                        </BrowserRouter>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        )
    }
}

export default App