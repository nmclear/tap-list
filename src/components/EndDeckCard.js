import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const EndDeckCard = props => {
  const { title, text, btnText, onPress } = props;
  const { textStyle } = styles;
  return (
    <Card title={title}>
      <Text style={textStyle}>{text}</Text>
      <Button 
        icon={{ name: 'code' }}
        backgroundColor="#03A9F4"
        title={btnText}
        onPress={onPress}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginBottom: 10,
    }
})

export default EndDeckCard;