import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const DeckCard = props => {
  const { item } = props;
  return (
    <Card
      key={item.id}
      title={item.text}
      image={{ uri: item.uri }}
    >
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>
        Yes or No
      </Text>
      <Button 
        icon={{ name: 'code' }}
        backgroundColor="#03A9F4"
        title="View Now"
      />
    </Card>
  )
}

export default DeckCard;