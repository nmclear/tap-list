import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

class AccountBar extends Component {
  viewSwipe = () => {
    const { activeKey } = this.props;
    if (activeKey !== 'swipe') {
      // Actions.reset('swipe');
      Actions.swipe();
    }
  };

  viewTapList = (taplist) => {
    const { activeKey } = this.props;
    if (activeKey !== 'taplist') {
      Actions.taplist({ taplist });
    }
  };

  render() {
    const {
      container, tabStyle, activeStyle, tabContainerStyle,
    } = styles;
    const { activeKey } = this.props;

    return (
      <View style={container}>
        <View style={tabContainerStyle}>
          <TouchableOpacity style={tabStyle} onPress={() => this.viewSwipe()}>
            <View style={activeKey === 'swipe' ? activeStyle : ''}>
              <Icon name="home" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={tabContainerStyle}>
          <TouchableOpacity style={tabStyle} onPress={() => this.viewTapList()}>
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

const mapStateToProps = ({ scene }) => {
  const { activeKey } = scene;
  return { activeKey };
};

AccountBar.propTypes = {
  activeKey: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  {},
)(AccountBar);
