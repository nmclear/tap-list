import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ListItem from './ListItem';
import DeckCard from './DeckCard';

class TapList extends Component {
  state = {};

//   renderItem = beer => <ListItem item={beer} />;
    renderItem = beer => <DeckCard item={beer.item} />;

  render() {
    const { taplist } = this.props;
    return (
        
        <FlatList
            data={taplist}
            renderItem={this.renderItem}
            keyExtractor={beer => beer.id.toString()}
        />
    );
  }
}

export default TapList;

