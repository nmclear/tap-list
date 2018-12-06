import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { StyleSheet, View, Text } from 'react-native';

import { likedBeer, dislikedBeer } from '../redux/actions';

import GET_BEER_QUERY from '../graphql/queries/beer/get_all_beers';

import SwipeHeader from '../components/SwipeHeader';
import SwipeContainer from '../components/SwipeContainer';
import TapListCounter from '../components/TapListCounter';
import Loading from '../components/Loading';

class SwipeScreen extends Component {
  handleLiked = (item) => {
    this.props.likedBeer(item);
  };

  handleDisliked = (item) => {
    this.props.dislikedBeer(item);
  };

  render() {
    const { taplist, data } = this.props;
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

    return (
      <View style={container}>
        <SwipeHeader />
        <SwipeContainer
          data={beers}
          onSwipeRight={this.handleLiked}
          onSwipeLeft={this.handleDisliked}
        />
        <TapListCounter count={taplist.length || 0} />
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

const mapStateToProps = ({ beerlist }) => {
  const { beerData, taplist } = beerlist;
  return { beerData, taplist };
};

export default connect(
  mapStateToProps,
  { likedBeer, dislikedBeer },
)(graphql(GET_BEER_QUERY)(SwipeScreen));
