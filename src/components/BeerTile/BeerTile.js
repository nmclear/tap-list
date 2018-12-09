import React from 'react';
import { Tile } from 'react-native-elements';
import PropTypes from 'prop-types';

const BeerTile = ({ uri, title, caption }) => (
  <Tile
    featured
    adjustsFontSizeToFit="true"
    activeOpacity={1}
    imageSrc={{ uri }}
    title={title}
    caption={caption}
    height={140}
    titleStyle={{ fontSize: 30, fontWeight: 'bold' }}
    captionStyle={{ fontSize: 20, fontWeight: '500' }}
  />
);

BeerTile.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default BeerTile;
