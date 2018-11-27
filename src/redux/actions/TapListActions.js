import {
  LIKED_BEER,
  DISLIKED_BEER,
  FETCH_TAPLIST_SUCCESS,
  RESET_TAPLIST,
  FETCH_BEER_DATA,
} from '../types';

export const likedBeer = beer => ({
  type: LIKED_BEER,
  beer,
});

export const dislikedBeer = beer => ({
  type: DISLIKED_BEER,
  beer,
});

export const fetchTaplist = taplist => ({
  type: FETCH_TAPLIST_SUCCESS,
  taplist,
});

export const resetTaplist = () => ({
  type: RESET_TAPLIST,
});

export const fetchBeerData = swipelist => ({
  type: FETCH_BEER_DATA,
  swipelist,
});
