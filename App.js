import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { View, StatusBar, StyleSheet } from 'react-native';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import reducers from './src/redux/reducers';
import Router from './src/Router';
import AccountBar from './src/components/AccountBar';

// FOR LATER INTERGRATIONS FOR APOLLO LINK OVER REDUX
// import { defaults } from './src/apollo/defaults';
// import resolvers from './src/apollo/resolvers';

const GRAPHQL_ENDPOINT = 'http://localhost:3000/graphql';

// FOR LATER INTERGRATIONS FOR APOLLO LINK OVER REDUX
// const typeDefs = `
//   type BeerData {
//     id: Int!
//     name: String!
//     brewery: String!
//     genre: String!,
//     link: String!,
//     bio: String!,
//     rating: Int!
//     description: String!,
//     uri: String!
//   }
// `;

class App extends React.Component {
  state = {};

  render() {
    const { container } = styles;
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const client = new ApolloClient({
      uri: GRAPHQL_ENDPOINT,
      // clientState: {
      //   defaults,
      //   resolvers: {},
      //   typeDefs,
      // },
    });

    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <View style={container}>
            <StatusBar barStyle="light-content" />
            <Router />
            <AccountBar />
          </View>
        </Provider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
