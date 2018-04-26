import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Cards from './Cards';
import { Button, Item, Input, Content, Card } from 'native-base';
import CardSection from './CardSection'
import ButtonFile from './Button';

const styles = {
    thumbnailStyle : {
        height: 50,
        width: 50,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
    },
    headerContentStyle: {
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 17
    },
    thumbnailContainerStyle: {
        marginLeft: 10,
        marginRight: 10,
        
    },
    imageStyle: {
        height: 300,
        flex:1
    }
};
    

const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image, url } = album

    return (
    
    <Card>
        <CardSection>
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <View style = { styles.thumbnailContainerStyle }>
                    <Image
                        style = { styles.thumbnailStyle }
                        source = {{ uri : thumbnail_image }}
                    />
                </View>
                <View style = { styles.headerContentStyle }>
                    <Text style = { styles.headerTextStyle }>{artist}</Text>
                </View>    
                {/* <Text>{this.props.album.title}</Text> */}
            </View>
        </CardSection>
        <CardSection>
            <Image 
                style ={ styles.imageStyle }
                source ={{ uri: image }} 
            />
        </CardSection>
        <CardSection>
            <View style={{
                marginLeft: 10,
                marginTop: 10,
                marginBottom: 10,
                flexDirection: 'row'
            }}>
                <Button 
                    transparent 
                    style={{
                        marginRight: 20
                    }}
                >
                    <Image source={require('../images/like.png')} />
                </Button>
                <Button 
                    transparent 
                    style={{
                        marginRight: 20
                    }}
                >
                    <Image source={require('../images/comment.png')} />
                </Button>
                <Button 
                    transparent 
                    style={{
                        marginRight: 170
                    }}
                >
                    <Image source={require('../images/right-arrow.png')} />
                </Button>
                <Button transparent>
                    <Image source={require('../images/bookmark-white.png')} />
                </Button>
            </View>   
            <View style={{
                marginLeft: 10,
                marginBottom: 10
            }}>
                <Text>999 Likes</Text>
            </View>
            <View style={{
                marginLeft: 10,
                marginBottom: 5,
                flexDirection: 'row'
            }}>
                <Text style = {{ fontSize: 17, marginRight: 10, fontWeight:'bold' }}>{artist}</Text>
                <Text style = { styles.headerTextStyle }>{title}</Text>
            </View>
            <View style={{
                marginLeft: 10,
                marginBottom: 20,
                flexDirection: 'row'
            }}>
                <Text style = {{ fontSize: 14, color: 'rgba(25,25,25,0.5)' }}>Tampilkan semua 999 komentar</Text>
            </View>
            <View style={{
                marginLeft: 10,
                marginBottom: 20,
                flexDirection: 'row'
            }}>
                <Button 
                    transparent 
                    style={{
                        marginRight: 10,
                        marginLeft:10,
                        marginTop: 10
                    }}
                >
                    <Image
                        source={require('../images/user.png')} 
                    />
                </Button>
                <Content 
                    style={{
                        marginRight: 20,
                        marginBottom: 20
                    }}
                >
                    <Item>
                        <Input
                            style={{
                                padding: 5
                            }} 
                            placeholder='komentar'
                        />
                    </Item>
                </Content>
            </View>
        </CardSection>
        
        

    </Card>
    )
}
export default AlbumDetail

