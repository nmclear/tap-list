import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SwipeContainer from './src/components/SwipeContainer';

import TAP_LIST_DATA from './src/data/tapListData';


class App extends Component {

  state = {
    data: TAP_LIST_DATA
  }

  render() {
    return (
      <SwipeContainer data={this.state.data} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
