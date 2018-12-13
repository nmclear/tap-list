const deckResolvers = {
  Mutation: {
    updateCurrentSwipeIndex: (_, { currentSwipeIndex }, { cache }) => {
      cache.writeData({ data: { currentSwipeIndex: currentSwipeIndex + 1 } });
      return null;
    },
    resetSwipeIndex: (_, variables, { cache }) => {
      cache.writeData({ data: { currentSwipeIndex: 0 } });
      return null;
    },
  },
};

export default deckResolvers;
