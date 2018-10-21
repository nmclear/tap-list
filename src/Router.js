import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Main from './Main';
import TapList from './components/TapList';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="main">
        <Scene
            initial
            key="swipe"
            component={Main}
            title="Main"
        />
        <Scene
            key="taplist"
            component={TapList}
            title="TapList"
        />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
