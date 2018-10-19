import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Deck from './Deck';
import DeckCard from './/DeckCard';

class SwipeContainer extends Component {
    
    renderCard = (item) => {
        return (
          <DeckCard item={item} />
        )
    }

    render(){
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <Deck 
                    data={data}
                    renderCard={this.renderCard}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

export default SwipeContainer;