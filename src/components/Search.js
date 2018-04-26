import React, { Component } from 'react';  
import { Text, View } from 'react-native';

class Search extends Component {  
    render() {
        return (
            <View 
                style={{ 
                    flex: 1, 
                    alignItems: 'center',  
                    justifyContent: 'center' 
                }}
            >
                <Text>Halaman Search</Text>
                
            </View>
        );
    }
}

export default Search;
