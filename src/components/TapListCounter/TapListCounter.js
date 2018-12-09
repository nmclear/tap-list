import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import styles from './styles';

const TapListCounter = ({ count }) => {
  const { container, textStyle } = styles;
  return (
    <TouchableWithoutFeedback onPress={() => Actions.taplist()}>
      <View style={container}>
        <Text style={textStyle}>{`TAP LIST: ${count} BEERS`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

TapListCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default TapListCounter;
