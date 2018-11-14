import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const EndDeckCard = props => {
  const { title, text, yesBtnText, noBtnText, onYesPress, onNoPress } = props;
  const { textStyle, buttonGroup, buttonStyle } = styles;
  return (
    <Card title={title}>
      <Text style={textStyle}>{text}</Text>
      <View style={buttonGroup}>
        <Button
          backgroundColor="black"
          title={noBtnText}
          onPress={onNoPress}
          buttonStyle={buttonStyle}
        />
        <Button
          backgroundColor="black"
          title={yesBtnText}
          onPress={onYesPress}
          buttonStyle={buttonStyle}
        />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginBottom: 10,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      width: 130,
    }
})

export default EndDeckCard;