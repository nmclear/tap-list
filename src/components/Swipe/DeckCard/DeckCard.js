import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import BeerRating from '../../CustomRating';

import styles from './styles';
import { propTypes } from './propTypes';

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

DeckCard.propTypes = propTypes;

export default DeckCard;
