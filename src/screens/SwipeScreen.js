import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import SwipeHeader from './../components/SwipeHeader';
import SwipeContainer from './../components/SwipeContainer';
import TapListCounter from './../components/TapListCounter';

import TAP_LIST_DATA from './../data/tapListData';


class SwipeScreen extends Component {

  state = {
    data: TAP_LIST_DATA,
    liked: [],
    disliked: [],
    likeCount: 0,
  }

  handleLiked = item => {
    const { liked } = this.state;
    this.setState({
      liked: [...liked, item]
    })
    this.addLikeCount();
  }

  handleDisliked = item => {
    const { disliked } = this.state;
    this.setState({
      disliked: [...disliked, item]
    })
  }

  addLikeCount = () => {
    const {likeCount} = this.state;
    this.setState({
      likeCount: likeCount + 1
    })
  }

  render() {
    const { data, liked, disliked, likeCount } = this.state;
    const { container } = styles;

    return (
      <View style={container}>
        <SwipeHeader />
        <SwipeContainer
          data={data}
          onSwipeRight={this.handleLiked}
          onSwipeLeft={this.handleDisliked}
          likes={liked}
          dislikes={disliked}
        />
        <TapListCounter count={likeCount}/>
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

export default SwipeScreen;
