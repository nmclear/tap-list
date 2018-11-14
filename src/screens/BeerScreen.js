import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import BeerTile from './../components/BeerTile';
import BeerRating from './../components/BeerRating';

class BeerScreen extends Component {
    render(){
        const {
            id, uri, name, genre, brewery, bio, description, rating, link
        } = this.props.beer;

        const { container, textBox, descrStyle, headerStyle } = styles;
        return (
            <View style={container} key={id}>
                <View>
                    <BeerTile uri={uri} title={name} caption={brewery}/>
                </View>
                <ScrollView>
                    <View style={textBox}>
                        <Text style={headerStyle}>{genre}</Text>
                        <Text style={descrStyle}>{description}</Text>
                    </View>
                    <BeerRating rating={rating} />
                    <View style={textBox}>
                        <Text style={headerStyle}>About {brewery}</Text>
                        <Text style={descrStyle}>{bio || 'Bio of the Brewery'}</Text>
                    </View>
                </ScrollView>
                <Button
                    onPress={() => Linking.openURL(link)}
                    title="Learn More"
                    color='white'
                    disabled={link ? false: true}
                    backgroundColor='black'
                    buttonStyle={{marginBottom: 5, marginTop: 5 }}
                    accessibilityLabel={`Learn more about ${name}`}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    textBox: {
        backgroundColor: 'white',
        padding: 20
    },
    descrStyle: {
        fontSize: 16,
        textAlign: 'justify',
    },
    headerStyle: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default BeerScreen;