import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { compose } from 'react-apollo';
import {
  View, StyleSheet, Text, AsyncStorage, Alert,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';

import saveCurrentUserMutation from '../graphql/mutations/client/save_current_user';
import deleteUserMutation from '../graphql/mutations/server/delete_account';
import updateAuthStage from '../graphql/mutations/client/update_auth_stage';

class AccountScreen extends Component {
  deleteUser = async () => {
    const { deleteUser, onAuthStageChange, saveCurrentUser } = this.props;

    try {
      const phone = await AsyncStorage.getItem('TAPLIST_AUTH_TOKEN');
      onAuthStageChange('LOGGED_OUT');
      deleteUser(phone);
      await AsyncStorage.removeItem('TAPLIST_AUTH_TOKEN');
      await saveCurrentUser('');
      return Actions.reset('auth');
    } catch (error) {
      return error;
    }
  };

  openAlert = () => {
    Alert.alert(
      'Delete Account',
      'You will lose your taplist if you delete your account. Are you sure you want to delete?',
      [
        { text: 'Yes, delete my account', onPress: () => this.deleteUser() },
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      ],
      { cancelable: false },
    );
  };

  render() {
    const { loading, error } = this.props;
    const { container, textStyle } = styles;

    if (error) {
      return (
        <View>
          <Text>Error</Text>
        </View>
      );
    }
    if (loading) {
      return <View />;
    }

    return (
      <View style={container}>
        <View style={{ alignItems: 'center' }}>
          <Icon
            raised
            name="account"
            type="material-community"
            color="black"
            size={80}
            onPress={() => this.openAlert()}
          />
          <Text style={textStyle}>DELETE ACCOUNT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    width: '100%',
    marginLeft: 0,
    padding: 0,
  },
  textStyle: {
    fontSize: 24,
    marginTop: 10,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});

export default compose(
  deleteUserMutation,
  updateAuthStage,
  saveCurrentUserMutation,
)(AccountScreen);
