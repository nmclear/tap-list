import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const SwipeHeader = () => {

    const { container, arrowContainer, header, arrowText } = styles;

    return (
        <View style={container}>
            <Text style={header}>
                SWIPE RIGHT FOR A CHEERS
            </Text>
            <View style={arrowContainer}>
                <Icon name='arrow-back' color='#D9DFDF' />
                <Text style={arrowText}> SWIPE </Text>
                <Icon name='arrow-forward' color='#D9DFDF' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 100,
        justifyContent: 'center',
        backgroundColor: '#21C293',
    },
    arrowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    header: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        letterSpacing: 1,
    },
    arrowText: {
        fontSize: 25,
        color: 'white'
    }
});

export default SwipeHeader;