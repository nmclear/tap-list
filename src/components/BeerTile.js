import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';

const BeerTile = ({ uri, title, caption }) => {
    const { titleStyle, captionStyle } = styles;
    return (
        <Tile
        featured
        adjustsFontSizeToFit='true'
        activeOpacity={1}
        imageSrc={{ uri }}
        title={title}
        caption={caption}
        height={140}
        titleStyle={titleStyle}
        captionStyle={captionStyle}
    />
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    captionStyle: {
        fontSize: 20,
        fontWeight: '500',
    },
});

export default BeerTile;