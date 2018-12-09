import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import { propTypes, defaultProps } from './propTypes';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 300;

class Deck extends Component {
  //   static defaultProps = {
  //     onSwipeRight: () => {},
  //     onSwipeLeft: () => {},
  //   };

  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetCardPosition();
        }
      },
    });
  }

  componentDidUpdate(prevProps) {
    const { resetCurrentIndex } = this.props;
    if (prevProps.data !== this.props.data) {
      resetCurrentIndex();
    }

    UIManager.setLayoutAnimationEnabledExperimental
      && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  onSwipeComplete = (direction) => {
    const {
      onSwipeLeft, onSwipeRight, data, updateCurrentIndex, currentIndex,
    } = this.props;
    const item = data[currentIndex];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.position.setValue({ x: 0, y: 0 });
    updateCurrentIndex(currentIndex);
  };

  forceSwipe = (direction) => {
    const exit = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x: exit, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.onSwipeComplete(direction));
  };

  resetCardPosition = () => {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 },
    }).start();
  };

  getCardPositionStyle = () => {
    const rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.7, 0, SCREEN_WIDTH * 1.7],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      ...this.position.getLayout(),
      transform: [{ rotate }],
    };
  };

  renderCards = () => {
    const {
      data, renderCard, renderNoMoreCards, currentIndex,
    } = this.props;
    const { cardStyle } = styles;

    if (currentIndex >= data.length) {
      return renderNoMoreCards();
    }

    return data
      .map((item, index) => {
        if (index < currentIndex) {
          return null;
        }
        if (index === currentIndex) {
          return (
            <Animated.View
              key={item.id}
              {...this._panResponder.panHandlers}
              style={[this.getCardPositionStyle(), cardStyle]}
            >
              {renderCard(item)}
            </Animated.View>
          );
        }

        return (
          <Animated.View key={item.id} style={[cardStyle, { top: 3 * (index - currentIndex) }]}>
            {renderCard(item)}
          </Animated.View>
        );
      })
      .reverse();
  };

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
});

Deck.propTypes = propTypes;
Deck.defaultProps = defaultProps;

export default Deck;
