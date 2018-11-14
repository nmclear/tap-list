import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Router from './src/Router';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Router />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;