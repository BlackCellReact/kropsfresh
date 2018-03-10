/**
 * Created by jlmconsulting on 3/10/18.
 */
import React, { Component }  from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import {
    Scene,
    Router,
    Stack
} from 'react-native-router-flux';
import {Provider} from 'mobx-react/native'
import SplashPage from '../SplashPage'
import MainPage from '../MainPage'
import Store from '../Store'

class App extends Component {

    render() {
        console.disableYellowBox = true
        return (
            <Provider appStore={Store}>
                <Router >
                    <Stack
                        // hideNavBar
                        key="root"
                        // titleStyle={{ alignSelf: 'center' }}
                    >
                        <Scene key="SplashPage" component={SplashPage} title="SplashPage" initial={true}/>
                        <Scene key="MainPage" component={MainPage} title="MainPage"/>
                    </Stack>

                </Router>
            </Provider>
        )
    }
}

export default App