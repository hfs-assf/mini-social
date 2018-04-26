import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Image } from 'native-base';
import {  View, Text } from 'react-native';
import axios from 'axios'

export default class HeaderProfile extends Component {
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


    renderNama() {
      let data =  this.state.albums.reverse()[0]
      // let data = this.state.albums[this.state.albums.length - 1]
      return <Text>{data.artist}</Text>
        // return this.state.albums.map((x,i) =>
        //     <Text key={i}>{x[1].artist}</Text>
        // );
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              {/* {this.renderNama()} */}
              <Text>Taylor Swift</Text>
            </Button>
          </Left>
          <Body>
            
          </Body>
          <Right>
            <Button transparent>
             
            </Button>
            <Button transparent>
              
            </Button>
            <Button transparent>
              
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}