import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { View } from 'react-native';

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
    <EndDeckCard
      title="Tapped Keg..."
      text="No more beers to taste!"
      noBtnText="More Pints"
      yesBtnText="View Tap List"
      onNoPress={() => this.resetSwipeList()}
      onYesPress={() => this.viewTapList()}
    />
  );

  viewTapList = (taplist) => {
    Actions.taplist({ taplist });
  };

  // CHANGE TO PAGINATION
  resetSwipeList = () => {
    // this.props.resetTaplist();
    const { resetSwipeIndex, resetTaplist } = this.props;
    const phone = '2314090332';
    resetTaplist(phone);
    resetSwipeIndex();
    Actions.reset('swipe');
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

// SwipeContainer.propTypes = propTypes;

export default compose(
  resetSwipeIndexMutation,
  resetTaplistMutation,
  updateSwipeIndexMutation,
  getSwipeIndexQuery,
)(SwipeContainer);
