import { string, func, bool } from 'prop-types';

export const propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
  disabled: bool,
};

export const defaultProps = {
  disabled: false,
};
