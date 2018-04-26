import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Headers from './src/components/Headers';
import AlbumList from './src/components/AlbumList'
import Footers from './src/components/Footers'
import { Footer } from 'native-base';


export default class App extends Component {
  render() {
    return (
      <View>
        <Headers />
        <AlbumList/>       
      </View>
    );
  }
}

