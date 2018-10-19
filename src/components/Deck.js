import React, { Component } from 'react';
import {
    View, Text,
} from 'react-native';

class Deck extends Component {

    renderCards = () => {
        const { data, renderCard } = this.props;

        return data.map(item => {

            return (
                <View key={item.id}>
                    {renderCard(item)}
                </View>
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