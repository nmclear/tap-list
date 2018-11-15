import { SCENE_CHANGE } from '../types';

const INITIAL_STATE = {
  activeKey: 'swipe',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCENE_CHANGE:
      return { ...state, activeKey: action.payload };
    default:
      return state;
  }
};
