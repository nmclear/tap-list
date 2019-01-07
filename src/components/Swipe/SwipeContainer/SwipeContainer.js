import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { View, AsyncStorage } from 'react-native';

import { compose } from 'react-apollo';

import { propTypes } from './propTypes';

import resetTaplistMutation from '../../../graphql/mutations/server/reset_taplist';
import resetSwipeIndexMutation from '../../../graphql/mutations/client/reset_swipe_index';
import updateSwipeIndexMutation from '../../../graphql/mutations/client/update_current_swipe_index';
import getSwipeIndexQuery from '../../../graphql/queries/client/get_current_swipe_index';

import Deck from '../Deck';
import DeckCard from '../DeckCard';
import EndDeckCard from '../EndDeckCard';

class SwipeContainer extends Component {
  renderCard = item => <DeckCard item={item} />;

  renderNoMoreCards = () => (
    <EndDeckCard onNoPress={() => this.resetSwipeList()} onYesPress={() => this.viewTapList()} />
  );

  viewTapList = (taplist) => {
    Actions.taplist({ taplist });
  };

  resetSwipeList = async () => {
    const { resetSwipeIndex, resetTaplist, resetBeerCount } = this.props;
    try {
      const phone = await AsyncStorage.getItem('TAPLIST_AUTH_TOKEN');
      resetTaplist(phone);
      resetBeerCount();
      resetSwipeIndex();
      return Actions.reset('swipe');
    } catch (error) {
      return error;
    }
  };

  render() {
    const {
      data,
      onSwipeRight,
      onSwipeLeft,
      currentSwipeIndex,
      updateSwipeIndex,
      resetSwipeIndex,
    } = this.props;

    return (
      <View style={{ flex: 4 }}>
        <Deck
          data={data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={onSwipeRight}
          onSwipeLeft={onSwipeLeft}
          currentIndex={currentSwipeIndex}
          updateCurrentIndex={updateSwipeIndex}
          resetCurrentIndex={resetSwipeIndex}
        />
      </View>
    );
  }
}

SwipeContainer.propTypes = propTypes;

export default compose(
  resetSwipeIndexMutation,
  resetTaplistMutation,
  updateSwipeIndexMutation,
  getSwipeIndexQuery,
)(SwipeContainer);
