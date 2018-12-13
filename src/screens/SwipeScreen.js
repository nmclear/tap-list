import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  StyleSheet, View, Text, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

import GET_BEER_QUERY from '../graphql/queries/server/beer/get_all_beers';
import ADD_BEER_TO_TAPLIST from '../graphql/mutations/server/add_beer_to_taplist';

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
    const { data } = this.props;
    const { beers, loading, error } = data;
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

const mutateProps = ({ mutate }) => {
  const phone = '2314090332';
  const addBeerToTaplist = beer => mutate({ variables: { phone, beer } });
  return { addBeerToTaplist };
};

export default compose(
  graphql(GET_BEER_QUERY),
  graphql(ADD_BEER_TO_TAPLIST, {
    props: mutateProps,
  }),
)(SwipeScreen);
