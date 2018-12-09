import { string, bool, func } from 'prop-types';

export const propTypes = {
  title: string,
  loading: bool,
  onPress: func.isRequired,
  disabled: bool,
  textColor: string,
  bgColor: string,
};

export const defaultProps = {
  title: 'SUBMIT',
  loading: false,
  disabled: false,
  textColor: 'white',
  bgColor: 'black',
};
