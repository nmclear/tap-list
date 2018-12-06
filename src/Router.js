import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import { sceneChange } from './redux/actions';

import BackBtn from './components/BackBtn';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import SwipeScreen from './screens/SwipeScreen';
import TapListScreen from './screens/TapListScreen';
import BeerScreen from './screens/BeerScreen';

const RouterComponent = (props) => {
  const { navBarStyle, titleStyle } = styles;
  return (
    <Router navigationBarStyle={navBarStyle} titleStyle={titleStyle} navBarButtonColor="white">
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene initial key="auth" component={AuthScreen} title="TAP LIST" />
          <Scene key="home" component={HomeScreen} title="TAP LIST" />
          <Scene
            // initial
            key="swipe"
            left={() => null}
            component={SwipeScreen}
            title="DESIGN YOUR TAP LIST"
            on={() => props.sceneChange('swipe')}
          />
          <Scene
            key="taplist"
            component={TapListScreen}
            title="MY TAP LIST"
            renderBackButton={() => <BackBtn color="white" size={25} bgColor="#54C571" />}
            on={() => props.sceneChange('taplist')}
          />
          <Scene
            key="beer"
            component={BeerScreen}
            title="ABOUT THE BEER"
            renderBackButton={() => <BackBtn color="white" size={25} bgColor="#54C571" />}
            on={() => props.sceneChange('beer')}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 16,
    letterSpacing: 2,
  },
});

export default connect(
  null,
  { sceneChange },
)(RouterComponent);

// export default RouterComponent;
