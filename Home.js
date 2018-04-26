import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import App from './App'
import Search from './src/Components/Search'
import Tambah from './src/Components/Tambah'
import Like from './src/Components/Like'
import Profile from './src/Components/Profile'
import { Platform } from 'react-native';

const Screen = TabNavigator(
    {  
        Putra: { screen: App },  
        Search: { screen: Search },
        Tambah: { screen: Tambah },
        Like: { screen: Like },
        Profile: { screen: Profile },
    },
    {
        tabBarPosition: 'bottom',  // So your Android tabs go bottom
        tabBarOptions: {
            activeTintColor: 'red',  // Color of tab when pressed
            inactiveTintColor: '#252525', // Color of tab when not pressed
            showIcon: 'true', // Shows an icon for both iOS and Android
            labelStyle: {
                fontSize: 15,
                marginBottom: 15
            },
        }
    }
);
    
export default class Home extends Component {
    render() {
        return (
            <Screen />
        );
    }
}
    
    
    