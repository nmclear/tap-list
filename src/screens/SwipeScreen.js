import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import getTapListQuery from '../graphql/queries/server/user/get_beer_ids_by_taplist';
import getAllBeersQuery from '../graphql/queries/server/beer/get_all_beers';
import addBeerToTaplistMutation from '../graphql/mutations/server/add_beer_to_taplist';

import filterBeerDataByTaplist from '../helpers/filter_beer_data';

import SwipeHeader from '../components/Swipe/SwipeHeader';
import SwipeContainer from '../components/Swipe/SwipeContainer';
import TapListCounter from '../components/TapListCounter';
import Loading from '../components/Loading';

class SwipeScreen extends Component {
  state = {
    likedBeer: 0,
  };

  handleLiked = (beer) => {
    const { addBeerToTaplist } = this.props;
    const { likedBeer } = this.state;
    this.setState({ likedBeer: likedBeer + 1 });
    return addBeerToTaplist(beer.id);
  };

  handleDisliked = beer => () => {};

  resetBeerCount = () => {
    this.setState({ likedBeer: 0 });
  };

  render() {
    const {
      beers, loading, error, taplist,
    } = this.props;
    const { likedBeer } = this.state;
    const { container } = styles;
    if (loading || !taplist) {
      return <Loading label="Changing Keg..." />;
    }

    if (error) {
      return (
        <View>
          <Text>Error</Text>
        </View>
      );
    }
    const filteredList = filterBeerDataByTaplist(beers, taplist);

    return (
      <View style={container}>
        <SwipeHeader />
        <SwipeContainer
          data={filteredList}
          onSwipeRight={this.handleLiked}
          onSwipeLeft={this.handleDisliked}
          resetBeerCount={this.resetBeerCount}
        />
        <TapListCounter count={taplist ? taplist.length + likedBeer : 0} />
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
  addBeerToTaplistMutation,
  getTapListQuery,
  getAllBeersQuery,
)(SwipeScreen);
