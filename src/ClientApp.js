import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { fetchCurrentUser } from './redux/actions';
import Router from './Router';
import AccountBar from './components/AccountBar';

class ClientApp extends React.Component {
  state = { loading: true };

  componentDidMount = () => {
    this.verifyUser();
    // AsyncStorage.removeItem('TAPLIST_AUTH_TOKEN');
  };

  verifyUser = async () => {
    try {
      await this.props.fetchCurrentUser();
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
        <Router />
        {currentUser && <AccountBar />}
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

const mapStateToProps = ({ auth }) => {
  const { currentUser } = auth;
  return { currentUser };
};

export default connect(
  mapStateToProps,
  { fetchCurrentUser },
)(ClientApp);
