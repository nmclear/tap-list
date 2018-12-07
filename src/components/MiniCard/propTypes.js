import { string, func } from 'prop-types';
import { ViewPropTypes } from 'react-native';

export const propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  uri: string.isRequired,
  onPress: func.isRequired,
  titleStyle: ViewPropTypes.style,
  subtitleStyle: ViewPropTypes.style,
  cardColor: string,
};

export const defaultProps = {
  cardColor: 'white',
  titleStyle: {},
  subtitleStyle: {},
};
