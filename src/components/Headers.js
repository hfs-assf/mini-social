import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
    }
});

export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container style={ styles.container }>
        <Header>
          <Left>
            <Button transparent>
                <Image source={require('../images/camera.png')} />
            </Button>
          </Left>
          <Body>
            <Button transparent>
            <Animatable.Text  
              animation="bounce" 
              duration={1000}  
              iterationCount='infinite' 
              easing="ease-out"
            >
            <Image 
              source={require('../images/instagram.png')}
              style={{ 
                height: 41,
                width: 140
              }} 
            />
            </Animatable.Text>
            </Button>
          </Body>
          <Right>
            <Button transparent>
                <Image source={require('../images/navigation.png')} />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}