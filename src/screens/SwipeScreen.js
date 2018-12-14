import React, { Component } from 'react';
import { compose } from 'react-apollo';
import {
  StyleSheet, View, Text, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

import getAllBeers from '../graphql/queries/server/beer/get_all_beers';
import addBeerToTaplistMutation from '../graphql/mutations/server/add_beer_to_taplist';

import SwipeHeader from '../components/Swipe/SwipeHeader';
import SwipeContainer from '../components/Swipe/SwipeContainer';
import TapListCounter from '../components/TapListCounter';
import Loading from '../components/Loading';

class SwipeScreen extends Component {
  handleLiked = (beer) => {
    const { addBeerToTaplist } = this.props;
    return addBeerToTaplist(beer.id);
  };

  handleDisliked = item => () => {};

  render() {
    const { beers, loading, error } = this.props;
    const { container } = styles;

    if (loading) {
      return <Loading label="Changing Keg..." />;
    }

    if (error) {
      return (
        <View>
          <Text>Error</Text>
        </View>
      );
    }

    // const { taplist } = this.props;
    const taplist = [];

    return (
      <View style={container}>
        <SwipeHeader />
        <SwipeContainer
          data={beers}
          onSwipeRight={this.handleLiked}
          onSwipeLeft={this.handleDisliked}
        />
        <TapListCounter count={taplist ? taplist.length : 0} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

// SwipeScreen.propTypes = {
//   taplist: PropTypes.arrayOf(PropTypes.object).isRequired,
//   handleLikedBeer: PropTypes.func.isRequired,
//   handleDislikedBeer: PropTypes.func.isRequired,
// };

export default compose(
  getAllBeers,
  addBeerToTaplistMutation,
)(SwipeScreen);
