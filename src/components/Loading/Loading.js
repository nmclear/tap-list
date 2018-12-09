import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Loading = ({ label }) => {
  const { container, labelStyle } = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

Loading.propTypes = {
  label: PropTypes.string,
};

Loading.defaultProps = {
  label: 'Loading',
};

export default Loading;
