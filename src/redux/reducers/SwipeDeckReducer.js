import { FETCH_SWIPE_INDEX, UPDATE_SWIPE_INDEX, RESET_SWIPE_INDEX } from '../types';

const INITIAL_STATE = {
  currentSwipeIndex: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SWIPE_INDEX:
      return { ...state, currentSwipeIndex: action.payload };
    case RESET_SWIPE_INDEX:
      return INITIAL_STATE;
    default:
      return state;
  }
};
