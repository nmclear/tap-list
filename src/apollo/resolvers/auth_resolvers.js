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
  // Query: {
  //   getAuthStage: (_, { authStage }) => ({ authStage }),
  //   getCurrentUser: (_, { currentUser }) => {
  //     const token = AsyncStorage.getItem('TAPLIST_AUTH_TOKEN');
  //     if (currentUser === token) return { currentUser };
  //     return false;
  //   },
  // },
};

export default authResolvers;
