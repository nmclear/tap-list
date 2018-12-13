export default {
  Mutation: {
    handleLikedBeer: (_, { beer, taplist }, { cache }) => {
      const updatedTaplist = [...taplist, beer];
      cache.writeData({ data: { taplist: updatedTaplist } });
      return null;
    },
    handleDislikedBeer: (_, { beer, drainlist }, { cache }) => {
      const updatedTaplist = [...drainlist, beer];
      cache.writeData({ data: { drainlist: updatedTaplist } });
      return null;
    },
  },
};
