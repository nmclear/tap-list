import React, { Component } from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

class AuthScreen extends Component {
  // add authStage to redux
  // also add phone number to redux after sign up
  // so it automatically fills in on the sign in
  state = { authStage: 'signUp' };

  render() {
    const { container, formContainer } = styles;
    const { authStage } = this.state;

    const Form = authStage === 'signIn' ? <SignInForm /> : <SignUpForm />;

    return (
      <View style={container}>
        <View>
          <Text>Hello from Auth Screen</Text>
        </View>
        <KeyboardAvoidingView style={formContainer} behavior="padding" enabled>
          {Form}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
