import { SCENE_CHANGE } from '../types';

export const sceneChange = activeKey => ({
  type: SCENE_CHANGE,
  payload: activeKey,
});

export const dog = [];
