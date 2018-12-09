import { func, number } from 'prop-types';

export const propTypes = {
  renderCard: func.isRequired,
  renderNoMoreCards: func.isRequired,
  currentIndex: number.isRequired,
  onSwipeRight: func,
  onSwipeLeft: func,
};

export const defaultProps = {
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
};
