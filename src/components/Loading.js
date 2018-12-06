import React from 'react';
import {
  View, StyleSheet, ActivityIndicator, Text,
} from 'react-native';

const Loading = ({ label = 'Loading' }) => {
  const { container, labelStyle } = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  labelStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 18,
  },
});

export default Loading;
