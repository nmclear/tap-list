import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import updateActiveKey from './graphql/mutations/client/update_active_key';
import RouteBackBtn from './components/Buttons/RouteBackBtn';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import SwipeScreen from './screens/SwipeScreen';
import TapListScreen from './screens/TapListScreen';
import BeerScreen from './screens/BeerScreen';

const RouterComponent = ({ currentUser, onSceneChange }) => {
  const { navBarStyle, titleStyle } = styles;
  return (
    <Router navigationBarStyle={navBarStyle} titleStyle={titleStyle} navBarButtonColor="white">
      <Scene key="root" hideNavBar>
        <Scene initial={!currentUser} key="auth">
          <Scene key="signup" component={AuthScreen} title="TAP LIST" />
        </Scene>
        <Scene initial={currentUser} key="main">
          <Scene key="home" component={HomeScreen} title="TAP LIST" />

          <Scene
            initial
            key="swipe"
            left={() => null}
            component={SwipeScreen}
            title="DESIGN YOUR TAP LIST"
            on={() => onSceneChange('swipe')}
          />
          <Scene
            key="taplist"
            component={TapListScreen}
            title="MY TAP LIST"
            renderBackButton={() => <RouteBackBtn />}
            on={() => onSceneChange('taplist')}
          />
          <Scene
            key="beer"
            component={BeerScreen}
            title="ABOUT THE BEER"
            renderBackButton={() => <RouteBackBtn />}
            on={() => onSceneChange('beer')}
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

export default updateActiveKey(RouterComponent);
