import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import BeerRating from './BeerRating';

const DeckCard = ({ item }) => {
  const {
    id, name, genre, brewery, uri, description, rating,
  } = item;
  const breweryName = brewery.name;
  const {
    container, textStyle, titleStyle, subtitleStyle, genreStyle,
  } = styles;

  return (
    <Card
      key={id}
      featuredTitle={name}
      featuredTitleStyle={titleStyle}
      featuredSubtitle={breweryName}
      featuredSubtitleStyle={subtitleStyle}
      image={{ uri }}
      containerStyle={container}
    >
      <Text style={genreStyle}>{genre}</Text>
      <Text numberOfLines={6} style={textStyle}>
        {description}
      </Text>
      <BeerRating rating={rating} style={{ marginTop: 15 }} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 355,
  },
  titleStyle: {
    fontSize: 25,
  },
  subtitleStyle: {
    fontSize: 20,
  },
  textStyle: {
    marginBottom: 10,
    textAlign: 'center',
  },
  genreStyle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DeckCard;
