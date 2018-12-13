import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { View } from 'react-native';

import { graphql, compose } from 'react-apollo';

import { propTypes } from './propTypes';

import resetTaplistMutation from '../../../graphql/mutations/server/reset_taplist';
import RESET_SWIPE_INDEX from '../../../graphql/mutations/client/reset_swipe_index';
import UPDATE_SWIPE_INDEX from '../../../graphql/mutations/client/update_current_swipe_index';
import GET_SWIPE_INDEX from '../../../graphql/queries/client/get_current_swipe_index';

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

const mutateProps = ({ mutate }) => {
  const updateSwipeIndex = currentSwipeIndex => mutate({ variables: { currentSwipeIndex } });
  return { updateSwipeIndex };
};

const resetProps = ({ mutate }) => {
  const resetSwipeIndex = () => mutate();
  return { resetSwipeIndex };
};

const taplistProps = ({ mutate }) => {
  const resetTaplist = phone => mutate({ variables: { phone } });
  return { resetTaplist };
};

const queryProps = ({ data: { currentSwipeIndex } }) => ({ currentSwipeIndex });

export default compose(
  graphql(RESET_SWIPE_INDEX, { props: resetProps }),
  graphql(resetTaplistMutation, { props: taplistProps }),
  graphql(UPDATE_SWIPE_INDEX, { props: mutateProps }),
  graphql(GET_SWIPE_INDEX, { props: queryProps }),
)(SwipeContainer);
