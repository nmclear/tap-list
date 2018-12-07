import {
  FETCH_CURRENT_USER,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_UP_ERROR,
  AUTH_ERROR,
} from '../types';

const INITIAL_STATE = {
  currentUser: null,
  authStage: 'SIGN_UP',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return { ...state, currentUser: action.currentUser };
    case AUTH_SIGN_UP_SUCCESS:
      return { ...state, authStage: action.authStage };
    case AUTH_SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.currentUser };
    case AUTH_SIGN_IN_ERROR:
      return { ...state, authStage: action.authStage };
    case AUTH_SIGN_UP_ERROR:
      return { ...state, authStage: action.authStage };
    case AUTH_ERROR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
