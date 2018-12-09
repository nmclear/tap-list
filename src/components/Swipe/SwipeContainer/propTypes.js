import {
  arrayOf, object, func, number,
} from 'prop-types';

export const propTypes = {
  data: arrayOf(object).isRequired,
  onSwipeLeft: func.isRequired,
  onSwipeRight: func.isRequired,
  currentSwipeIndex: number.isRequired,
  updateSwipeIndex: func.isRequired,
  resetSwipeIndex: func.isRequired,
  resetTaplist: func.isRequired,
};

export const defaultProps = {};
