import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TapListCounter = ({ count }) => {
    const { container, text } = styles;
    return (
        <View style={container}>
            <Text style={text}>Tap List: {count} Beers</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: '#3399ff',
    },
    text: {
        fontSize: 22,
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 70,
        letterSpacing: 1,
    }
})

export default TapListCounter;
