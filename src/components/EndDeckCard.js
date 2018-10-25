import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const EndDeckCard = props => {
  const { title, text, yesBtnText, noBtnText, onYesPress, onNoPress } = props;
  const { textStyle, buttonGroup, buttonContainerStyle, buttonStyle } = styles;
  return (
    <Card title={title}>
      <Text style={textStyle}>{text}</Text>

      <View style={buttonGroup}>
      
        <Button
          backgroundColor="#03A9F4"
          title={noBtnText}
          onPress={onNoPress}
          containerViewStyle={buttonContainerStyle}
          buttonStyle={buttonStyle}
        />
        <Button
          backgroundColor="#03A9F4"
          title={yesBtnText}
          onPress={onYesPress}
          containerViewStyle={buttonContainerStyle}
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
    buttonContainerStyle: {
      flex: 1,
    },
    buttonStyle: {
      width: 130,
    }
})

export default EndDeckCard;