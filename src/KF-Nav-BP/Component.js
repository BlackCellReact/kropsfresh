/**
 * Created by devacc2 on 12/03/2018.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Text
} from 'react-native';
const NavComponent = props =>{


    return(
        <ImageBackground style={styles.picture} source={require('../Images/nav.jpg')}>

            <TouchableOpacity style={{ margin: 10 }} onPress={props.goToWishlist}>
                <Text>Three</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}




export default NavComponent

const styles = StyleSheet.create({

    picture: {

        flex: 1,

        width: null,

        height: null,

        resizeMode: 'cover',

    },

});