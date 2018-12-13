import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import getActiveKey from '../../graphql/queries/client/get_active_key';
import styles from './styles';

class AccountBar extends Component {
  viewActiveTab = (active) => {
    const { activeKey } = this.props;

    if (activeKey !== active) {
      switch (active) {
        case 'swipe':
          return Actions.swipe();
        case 'taplist':
          return Actions.taplist();
        default:
          return null;
      }
    }
    return null;
  };

  render() {
    const {
      container, tabStyle, activeStyle, tabContainerStyle,
    } = styles;
    const { activeKey } = this.props;

    return (
      <View style={container}>
        <View style={tabContainerStyle}>
          <TouchableOpacity style={tabStyle} onPress={() => this.viewActiveTab('swipe')}>
            <View style={activeKey === 'swipe' ? activeStyle : ''}>
              <Icon name="home" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={tabContainerStyle}>
          <TouchableOpacity style={tabStyle} onPress={() => this.viewActiveTab('taplist')}>
            <View style={activeKey === 'taplist' ? activeStyle : ''}>
              <Icon name="beer" type="material-community" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={tabContainerStyle}>
          <TouchableOpacity style={tabStyle}>
            <View style={activeKey === 'account' ? activeStyle : ''}>
              <Icon name="account-circle" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AccountBar.propTypes = {
  activeKey: PropTypes.string.isRequired,
};

const mapResultsToProps = ({ data: { activeKey } }) => ({ activeKey });

export default graphql(getActiveKey, { props: mapResultsToProps })(AccountBar);
