import { FETCH_SWIPE_INDEX, UPDATE_SWIPE_INDEX, RESET_SWIPE_INDEX } from '../types';

export const updateSwipeIndex = index => ({
  type: UPDATE_SWIPE_INDEX,
  payload: index + 1,
});

export const resetSwipeIndex = () => ({
  type: RESET_SWIPE_INDEX,
});
