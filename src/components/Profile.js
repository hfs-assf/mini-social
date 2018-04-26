import React, { Component } from 'react';  
import { Text, View } from 'react-native';
import HeaderProfile from './Profile/HeaderProfile'


export default class Profile extends Component {  
    render() {
        return (
            <View> 
                <HeaderProfile/>
            </View>
        );
    }
}
