import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';

import Deck from './Deck';
import DeckCard from './DeckCard';
import EndDeckCard from './EndDeckCard';

class SwipeContainer extends Component {
    
    renderCard = (item) => {
        return (
          <DeckCard item={item} />
        )
    }

    renderNoMoreCards = () => {
        const { likes } = this.props;
        return (
            <EndDeckCard 
                title='Empty Pint...'
                text='No more beers to see!'
                noBtnText='Restart'
                yesBtnText='View Tap List'
                onNoPress={() => {}}
                onYesPress={() => this.viewTapList(likes)}
            />
        )
    }

    viewTapList = taplist => {
        Actions.taplist({taplist});
    }

    render(){
        const { data, onSwipeRight, onSwipeLeft } = this.props;
        const { container } = styles;
        
        return (
            <View style={container}>
                <Deck 
                    data={data}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeRight={onSwipeRight}
                    onSwipeLeft={onSwipeLeft}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 4,
    },
  });

export default SwipeContainer;