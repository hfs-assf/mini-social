import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import axios from 'axios'
import AlbumDetail from './AlbumDetail'





const styles = {
    top : {
        marginTop: 60,
    }
}

export default class AlbumList extends React.Component {
    constructor(){
        super()
        this.state = { 
            albums : [], 
        }
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then (response => {
            console.log(response)
            this.setState ({ albums : response.data })
        })
    };


    renderAlbums() {
        return this.state.albums.map((album,i) =>
            <AlbumDetail key={i} album={album}/>
            // <Text key={album.title}>{album.title}</Text>
        );
    }


    render() {
      return (
        <View>
            <ScrollView style={styles.top}>
                {this.renderAlbums()}
            </ScrollView>
        </View>
      )
    }
  }