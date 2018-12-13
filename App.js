import React from 'react';
import { ApolloProvider } from 'react-apollo';

import client from './src/graphql/apollo_client';

import ClientApp from './src/ClientApp';

const App = () => (
  <ApolloProvider client={client}>
    <ClientApp />
  </ApolloProvider>
);
export default App;
