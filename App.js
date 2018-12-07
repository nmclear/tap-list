import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { LAMBDA_SERVER_ROUTE } from 'react-native-dotenv';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import reducers from './src/redux/reducers';

import ClientApp from './src/ClientApp';

const GRAPHQL_ENDPOINT = 'http://localhost:3000/graphql';
// const GRAPHQL_ENDPOINT = LAMBDA_SERVER_ROUTE;

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ClientApp />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
