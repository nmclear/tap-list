import {
  LIKED_BEER,
  DISLIKED_BEER,
  FETCH_TAPLIST_SUCCESS,
  RESET_TAPLIST,
  FETCH_BEER_DATA,
} from '../types';

export const likedBeer = beer => ({
  type: LIKED_BEER,
  payload: beer,
});

export const dislikedBeer = beer => ({
  type: DISLIKED_BEER,
  payload: beer,
});

export const fetchTaplist = taplist => ({
  type: FETCH_TAPLIST_SUCCESS,
  payload: taplist,
});

export const resetTaplist = () => ({
  type: RESET_TAPLIST,
});

export const fetchBeerData = swipelist => ({
  type: FETCH_BEER_DATA,
  payload: swipelist,
});
