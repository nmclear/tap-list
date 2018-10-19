import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Deck from './src/components/Deck';
import DeckCard from './src/components/DeckCard';

import TAP_LIST_DATA from './src/data/tapListData';


class App extends Component {

  state = {
    data: TAP_LIST_DATA
  }

  renderCard = (item) => {
    return (
      <DeckCard item={item} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck 
          data={this.state.data}
          renderCard={this.renderCard}
        />
      </View>
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
