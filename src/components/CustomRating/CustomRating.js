import React from 'react';
import { Rating } from 'react-native-elements';
import { propTypes, defaultProps } from './propTypes';

const CustomRating = ({ size, rating, style }) => (
  <Rating
    readonly
    imageSize={size}
    startingValue={rating}
    style={[{ alignItems: 'center' }, style]}
  />
);

CustomRating.propTypes = propTypes;
CustomRating.defaultProps = defaultProps;

export default CustomRating;
