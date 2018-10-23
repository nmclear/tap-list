import React from 'react';
import { Actions } from 'react-native-router-flux';

import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

const HomeScreen = () => {
    const { container } = styles;
    return (
        <View style={container}>
            <Text>
                Hello World
            </Text>
            <Button
                large
                raised
                rounded
                backgroundColor='#1589FF'
                onPress={() => Actions.swipe()}
                rightIcon={{name: 'code'}}
                title='Build your Tap List'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default HomeScreen;