import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { compose } from 'react-apollo';
import {
  View, StyleSheet, FlatList, Text, Platform, AsyncStorage,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';

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

  resetSwipeList = async () => {
    const { resetSwipeIndex, resetTaplist } = this.props;
    try {
      const phone = await AsyncStorage.getItem('TAPLIST_AUTH_TOKEN');
      resetTaplist(phone);
      resetSwipeIndex();
      return Actions.reset('swipe');
    } catch (error) {
      return error;
    }
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
    const { container, buttonContainer, emptyText } = styles;

    if (taplist.length === 0) {
      return (
        <View style={[container, { justifyContent: 'center', alignItems: 'center' }]}>
          <View style={{ alignItems: 'center' }}>
            <Text style={emptyText}>EMPTY KEG!</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Icon
              raised
              name={Platform.OS === 'ios' ? 'ios-beer' : 'md-beer'}
              type="ionicon"
              color="black"
              size={80}
              onPress={() => Actions.reset('swipe')}
            />
            <Text style={emptyText}>FIND BEERS</Text>
          </View>
        </View>
      );
    }

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
          // onPress={() => this.resetSwipeList()}
          onPress={this.resetSwipeList}
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
  emptyText: {
    fontSize: 24,
    marginTop: 10,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});

export default compose(
  resetSwipeIndexMutation,
  resetTaplistMutation,
  getTapListQuery,
)(TapListScreen);
