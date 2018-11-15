import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { View, StatusBar, StyleSheet } from 'react-native';
import reducers from './src/redux/reducers';
import Router from './src/Router';
import AccountBar from './src/components/AccountBar';

class App extends React.Component {
  state = {};

  render() {
    const { container } = styles;
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={container}>
          <StatusBar barStyle="light-content" />
          <Router />
          <AccountBar />
        </View>
      </Provider>
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
