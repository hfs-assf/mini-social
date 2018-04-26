import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class Footers extends Component {
  render() {
    return (
      <Container><Header /><Content />
          <Footer><FooterTab>
            <Button vertical active><Icon name="apps" /> <Text> Apps </Text></Button>
            <Button vertical><Icon name="camera" /> <Text> Camera </Text></Button>
            <Button vertical><Icon active name="navigate" /> <Text> Navigate </Text></Button>
            <Button vertical><Icon name="person" /> <Text> Contact </Text></Button>
          </FooterTab></Footer>
      </Container>
    );
  }
}
    