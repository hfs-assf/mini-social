import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        flexDirection: 'column'
    }
    
};

export default class CardSection extends React.Component {
    render() {
        return (
        <View style={styles.containerStyle}>
            {this.props.children}
        </View>
        )
    }
}