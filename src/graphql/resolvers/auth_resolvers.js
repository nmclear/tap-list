import { AsyncStorage } from 'react-native';

const authResolvers = {
  Mutation: {
    updateAuthStage: (_, { authStage }, { cache }) => {
      cache.writeData({ data: { authStage } });
      return null;
    },
    saveCurrentUser: (_, { currentUser }, { cache }) => {
      cache.writeData({ data: { currentUser } });
      return AsyncStorage.setItem('TAPLIST_AUTH_TOKEN', currentUser);
    },
  },
};

export default authResolvers;
