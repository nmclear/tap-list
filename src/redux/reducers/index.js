import { combineReducers } from 'redux';
import TapListReducer from './TapListReducer';
import SceneReducer from './SceneReducer';
import SwipeDeckReducer from './SwipeDeckReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  beerlist: TapListReducer,
  scene: SceneReducer,
  deck: SwipeDeckReducer,
  auth: AuthReducer,
});
