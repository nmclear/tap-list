import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Router from './src/Router';
import AccountBar from './src/components/AccountBar';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <Router />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

// export default App;
class App extends React.Component {

  render(){
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Router />
      <AccountBar />
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    flexDirection: 'column'
  }
});

export default App;