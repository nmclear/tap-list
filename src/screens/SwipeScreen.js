import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { likedBeer, dislikedBeer, fetchBeerData } from '../redux/actions';

import SwipeHeader from '../components/SwipeHeader';
import SwipeContainer from '../components/SwipeContainer';
import TapListCounter from '../components/TapListCounter';

class SwipeScreen extends Component {
  handleLiked = (item) => {
    this.props.likedBeer(item);
  };

  handleDisliked = (item) => {
    this.props.dislikedBeer(item);
  };

  render() {
    const { beerData, taplist } = this.props;
    const { container } = styles;
    return (
      <View style={container}>
        <SwipeHeader />
        <SwipeContainer
          data={beerData}
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
  { likedBeer, dislikedBeer, fetchBeerData },
)(SwipeScreen);
