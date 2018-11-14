import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import MiniCard from './../components/MiniCard';

class TapListScreen extends Component {
  state = {};

    renderItem = beer => <MiniCard item={beer.item} />;

  render() {
    const { taplist } = this.props;
    const { container, buttonContainer, button } = styles;
    return (
        <View style={container}>
          <FlatList
            data={taplist}
            renderItem={this.renderItem}
            keyExtractor={beer => beer.id.toString()}
          />
        
          <Button
            large
            title='Reset'
            icon={{name: 'home'}}
            backgroundColor='#1589FF'
            onPress={() => Actions.reset('swipe')}
            containerViewStyle={buttonContainer}
          />
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    width: '100%',
    marginLeft: 0,
    padding: 0
  },
  button: {
  }
});

export default TapListScreen;

