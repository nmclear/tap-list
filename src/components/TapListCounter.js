import React from 'react';
import {
  View, Text, StyleSheet, TouchableWithoutFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const TapListCounter = ({ count }) => {
  const { container, text } = styles;
  return (
    <TouchableWithoutFeedback onPress={() => Actions.taplist()}>
      <View style={container}>
        <Text style={text}>{`TAP LIST: ${count} BEERS`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 60,
    letterSpacing: 2,
  },
});

export default TapListCounter;
