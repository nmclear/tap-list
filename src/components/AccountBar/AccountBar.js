import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import getActiveKey from '../../graphql/queries/client/get_active_key';
import styles from './styles';

const AccountBar = (props) => {
  const {
    container, tabStyle, activeStyle, tabContainerStyle,
  } = styles;
  const { activeKey } = props;

  return (
    <View style={container}>
      <View style={tabContainerStyle}>
        <TouchableOpacity
          style={tabStyle}
          disabled={activeKey === 'swipe'}
          onPress={() => Actions.swipe()}
        >
          <View style={activeKey === 'swipe' ? activeStyle : ''}>
            <Icon name="home" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={tabContainerStyle}>
        <TouchableOpacity
          style={tabStyle}
          disabled={activeKey === 'taplist'}
          onPress={() => Actions.taplist()}
        >
          <View style={activeKey === 'taplist' ? activeStyle : ''}>
            <Icon name="beer" type="material-community" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={tabContainerStyle}>
        <TouchableOpacity
          style={tabStyle}
          disabled={activeKey === 'account'}
          onPress={() => Actions.account()}
        >
          <View style={activeKey === 'account' ? activeStyle : ''}>
            <Icon name="account-circle" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

AccountBar.propTypes = {
  activeKey: PropTypes.string.isRequired,
};

export default getActiveKey(AccountBar);
