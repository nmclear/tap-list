import { combineReducers } from 'redux';
import TapListReducer from './TapListReducer';
import SceneReducer from './SceneReducer';
import SwipeDeckReducer from './SwipeDeckReducer';

export default combineReducers({
  beerlist: TapListReducer,
  scene: SceneReducer,
  deck: SwipeDeckReducer,
});
