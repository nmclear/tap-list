import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

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

export default SwipeHeader;
