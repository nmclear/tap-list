import React from 'react';
import {
  View, StatusBar, StyleSheet, AsyncStorage,
} from 'react-native';

import { graphql, compose } from 'react-apollo';
import SAVE_CURRENT_USER_MUTATION from './graphql/mutations/client/save_current_user';
import CURRENT_USER_QUERY from './graphql/queries/client/get_current_user';
import Router from './Router';
import AccountBar from './components/AccountBar';

class ClientApp extends React.Component {
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
        <AccountBar />
      </View>
    );
  }
}
// {currentUser && <AccountBar />}
const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
});

const queryProps = ({ data: { currentUser } }) => ({ currentUser });

const mutateProps = ({ mutate }) => {
  const saveCurrentUser = currentUser => mutate({ variables: { currentUser } });
  return { saveCurrentUser };
};

export default compose(
  graphql(CURRENT_USER_QUERY, { props: queryProps }),
  graphql(SAVE_CURRENT_USER_MUTATION, { props: mutateProps }),
)(ClientApp);
