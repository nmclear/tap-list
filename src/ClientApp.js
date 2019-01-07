import React, { Component } from 'react';
import {
  View, StatusBar, StyleSheet, AsyncStorage,
} from 'react-native';

import { compose } from 'react-apollo';
import saveCurrentUserMutation from './graphql/mutations/client/save_current_user';
import currentUserQuery from './graphql/queries/client/get_current_user';
import Router from './Router';
import AccountBar from './components/AccountBar';

class ClientApp extends Component {
  state = { loading: true };

  componentDidMount = () => {
    this.verifyUser();
    // AsyncStorage.removeItem('TAPLIST_AUTH_TOKEN');
  };

  verifyUser = async () => {
    const { saveCurrentUser } = this.props;
    try {
      const user = await AsyncStorage.getItem('TAPLIST_AUTH_TOKEN');
      if (user) {
        await saveCurrentUser(user);
      }

      return this.setState({ loading: false });
    } catch (error) {
      return this.setState({ loading: false });
    }
  };

  render() {
    const { container } = styles;
    const { loading } = this.state;
    const { currentUser } = this.props;

    if (loading) {
      return (
        <View style={container}>
          <StatusBar barStyle="dark-content" />
        </View>
      );
    }

    return (
      <View style={container}>
        <StatusBar barStyle="light-content" />
        <Router currentUser={currentUser} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
});

export default compose(
  currentUserQuery,
  saveCurrentUserMutation,
)(ClientApp);
