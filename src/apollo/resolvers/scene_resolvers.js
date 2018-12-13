const sceneResolvers = {
  Mutation: {
    updateActiveKey: (_, { activeKey }, { cache }) => {
      cache.writeData({ data: { activeKey } });
      return null;
    },
  },
};

export default sceneResolvers;
