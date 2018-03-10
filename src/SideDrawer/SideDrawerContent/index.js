/**
 * Created by jlmconsulting on 3/10/18.
 */
import React, { Component } from 'react'
import { View, } from 'react-native'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'

export default class SideDrawerContent extends Component {
    static contextTypes = {
        drawer: PropTypes.object.isRequired,
    };

    render() {
        const { drawer } = this.context
        return (
            <View>
                <Button onPress={() => { drawer.close(); Actions.SplashPage.call() }}>{'Home'}</Button>
                <Button onPress={() => { drawer.close(); Actions.Main.call() }}>{'Main Page'}</Button>
                <Button onPress={() => { Actions.Login.call() }}>{'Logout'}</Button>
            </View>
        )
    }
}

// SideDrawerContent.propTypes = {
//     drawer: PropTypes.object
// }