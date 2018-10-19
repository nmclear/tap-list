import React, { Component } from 'react';
import { 
    StyleSheet, View, Animated, PanResponder, Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 300;

class Deck extends Component {

    constructor(props) {
        super(props);

        this.position = new Animated.ValueXY();
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gesture) => {
                this.position.setValue({x: gesture.dx, y: 0})
            },
            onPanResponderRelease: (evt, gesture) => {
                if(gesture.dx > SWIPE_THRESHOLD){
                    this.forceSwipe('right');
                } else if(gesture.dx < -SWIPE_THRESHOLD){
                    this.forceSwipe('left');
                } else {
                    this.resetCardPosition();
                }
            }
        });

        this.state = { currentIndex: 0 };
    }

    forceSwipe = (direction) => {
        const exit = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.position, {
            toValue: {x: exit, y: 0},
            duration: SWIPE_OUT_DURATION
        }).start();
    }

    resetCardPosition = () => {
        Animated.spring(this.position, {
            toValue: { x: 0, y: 0 }
        }).start();
    }

    getCardPositionStyle = () => {
        const rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.7, 0, SCREEN_WIDTH * 1.7],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return ({
            ...this.position.getLayout(),
            transform: [{ rotate }]
        })
    }

    renderCards = () => {
        const { data, renderCard } = this.props;
        const { currentIndex } = this.state;
        const { cardStyle } = styles;
        return data.map((item, index) => {

            if(index === currentIndex){
                return (
                    <Animated.View
                        key={item.id}
                        {...this._panResponder.panHandlers}
                        style={[this.getCardPositionStyle(), cardStyle]}
                    >
                        {renderCard(item)}
                    </Animated.View>
                )
            }

            return (
                <Animated.View key={item.id} style={[cardStyle]}>
                    {renderCard(item)}
                </Animated.View>
            )
        }).reverse();
    }

    render(){
        return(
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH
    }
})

export default Deck;