import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const SwipeHeader = () => {
  const {
    container, arrowContainer, header, arrowText,
  } = styles;

  return (
    <View style={container}>
      <Text style={header}>SWIPE RIGHT FOR A CHEERS</Text>
      <View style={arrowContainer}>
        <Icon name="arrow-back" color="#404040" />
        <Text style={arrowText}> SWIPE </Text>
        <Icon name="arrow-forward" color="#404040" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    justifyContent: 'center',
    // backgroundColor: '#21C293',
    backgroundColor: '#E0E0E0',
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    textAlign: 'center',
    color: '#404040',
    fontSize: 16,
    letterSpacing: 1,
  },
  arrowText: {
    fontSize: 25,
    color: '#303030',
  },
});

export default SwipeHeader;
