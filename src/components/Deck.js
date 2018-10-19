import React, { Component } from 'react';
import { 
    View, Animated, PanResponder, Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Deck extends Component {

    constructor(props) {
        super(props);

        this.position = new Animated.ValueXY();
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gesture) => {
                this.position.setValue({x: gesture.dx, y: gesture.dy})
            },
            onPanResponderRelease: (evt, gesture) => {}

        });
    }

    getCardStyle = () => {
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

        return data.map(item => {

            return (
                <Animated.View
                    key={item.id}
                    {...this._panResponder.panHandlers}
                    style={[this.getCardStyle()]}
                >
                    {renderCard(item)}
                </Animated.View>
            )

        })
    }

    render(){
        return(
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

export default Deck;