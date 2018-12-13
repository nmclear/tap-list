import { merge } from 'lodash';
import sceneResolvers from './scene_resolvers';
import authResolvers from './auth_resolvers';
import deckResolvers from './deck_resolvers';

const resolvers = merge(sceneResolvers, authResolvers, deckResolvers);

export default resolvers;
