import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Rating } from 'react-native-elements';

const DeckCard = ({item}) => {
  const { id, name, brewery, uri, description, rating } = item;
  const {
    container, ratingStyle, textStyle, titleStyle, subtitleStyle
  } = styles;


  return (
    <Card
      key={id}
      featuredTitle={name}
      featuredTitleStyle={titleStyle}
      featuredSubtitle={brewery}
      featuredSubtitleStyle={subtitleStyle}
      image={{ uri: uri }}
      containerStyle={container}
    >
      <Text style={textStyle}>
        {description}
      </Text>
      <Rating
        readonly
        imageSize={25}
        startingValue={rating}
        style={ratingStyle}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 350
  },
  titleStyle: {
    fontSize: 25,
  },
  subtitleStyle: {
    fontSize: 20,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  ratingStyle: {
    alignItems: 'center',
    marginTop: 15,
  },
})

export default DeckCard;