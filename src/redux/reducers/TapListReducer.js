import {
  LIKED_BEER,
  DISLIKED_BEER,
  FETCH_TAPLIST_SUCCESS,
  RESET_TAPLIST,
  FETCH_BEER_DATA,
} from '../types';

import BEER_LIST_DATA from '../../data/tapListData';

const INITIAL_STATE = {
  beerData: BEER_LIST_DATA,
  taplist: [],
  drainlist: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BEER_DATA:
      return { ...state, beerData: [...state.beerData, action.swipelist] };
    case LIKED_BEER:
      return { ...state, taplist: [...state.taplist, action.beer] };
    case DISLIKED_BEER:
      return { ...state, drainlist: [...state.drainlist, action.beer] };
    case FETCH_TAPLIST_SUCCESS:
      return action.taplist;
    case RESET_TAPLIST:
      return INITIAL_STATE;
    default:
      return state;
  }
};
