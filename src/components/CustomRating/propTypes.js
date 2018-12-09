import { number } from 'prop-types';
import { ViewPropTypes } from 'react-native';

export const propTypes = {
  size: number,
  rating: number.isRequired,
  style: ViewPropTypes.style,
};

export const defaultProps = {
  size: 25,
  style: {},
};
