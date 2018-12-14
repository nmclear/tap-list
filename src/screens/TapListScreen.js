import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { compose } from 'react-apollo';
import {
  View, StyleSheet, FlatList, Text,
} from 'react-native';
import { Button } from 'react-native-elements';

import resetTaplistMutation from '../graphql/mutations/server/reset_taplist';
import resetSwipeIndexMutation from '../graphql/mutations/client/reset_swipe_index';
import getTapListQuery from '../graphql/queries/server/user/get_user_taplist';

import MiniCard from '../components/MiniCard';

class TapListScreen extends Component {
  renderItem = ({ item }) => {
    const {
      id, uri, name, brewery,
    } = item;
    const breweryName = brewery.name;
    return (
      <MiniCard
        id={id}
        item={item}
        title={name}
        subtitle={breweryName}
        uri={uri}
        onPress={() => Actions.beer({ beer: item })}
      />
    );
  };

  resetSwipeList = () => {
    const { resetSwipeIndex, resetTaplist } = this.props;
    resetSwipeIndex();
    const phone = '2314090332';
    resetTaplist(phone);
    Actions.reset('swipe');
  };

  render() {
    const { loading, error } = this.props;

    if (error) {
      return (
        <View>
          <Text>Error</Text>
        </View>
      );
    }
    if (loading) {
      return <View />;
    }

    const { taplist } = this.props;

    const { container, buttonContainer } = styles;

    return (
      <View style={container}>
        <FlatList
          data={taplist}
          renderItem={this.renderItem}
          keyExtractor={beer => beer.id.toString()}
        />

        <Button
          title="Reset"
          icon={{ name: 'home' }}
          backgroundColor="black"
          onPress={() => this.resetSwipeList()}
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
    padding: 0,
  },
});

export default compose(
  resetSwipeIndexMutation,
  resetTaplistMutation,
  getTapListQuery,
)(TapListScreen);
