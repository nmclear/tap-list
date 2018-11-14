import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import BackBtn from './components/BackBtn';
import AccountBar from './components/AccountBar';

import HomeScreen from './screens/HomeScreen';
import SwipeScreen from './screens/SwipeScreen';
import TapListScreen from './screens/TapListScreen';
import BeerScreen from './screens/BeerScreen';

const RouterComponent = () => {
  const { container, navBarStyle, titleStyle } = styles;
  return (
    <View style={container}>
    
    
    <Router navigationBarStyle={navBarStyle} titleStyle={titleStyle} navBarButtonColor="white">
    <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene
            initial
            key="home"
            component={HomeScreen}
            title="Tap List"
          />
          <Scene
            initial
            key="swipe"
            component={SwipeScreen}
            title="Fill Your Tap List"
          />
          <Scene
            key="taplist"
            component={TapListScreen}
            title="My Tap List"
            renderBackButton={() => <BackBtn color="white" size={25} bgColor="#54C571" />}
          />
          <Scene
            key="beer"
            component={BeerScreen}
            title="Beer Name"
            renderBackButton={() => <BackBtn color="white" size={25} bgColor="#54C571" />}
          />
        </Scene>
      </Scene>
    </Router>
    <AccountBar />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    flexDirection: 'column'
  },
  navBarStyle: {
    // backgroundColor: '#616D7E',
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default RouterComponent;
