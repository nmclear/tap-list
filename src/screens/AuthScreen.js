import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from '../components/Forms/SignUpForm';
import SignInForm from '../components/Forms/SignInForm';

const AuthScreen = (props) => {
  const { container, formContainer } = styles;
  const { authStage } = props;

  const Form = authStage === 'SIGN_IN' ? <SignInForm /> : <SignUpForm />;

  return (
    <View style={container}>
      <View>
        <Text>Auth Screen</Text>
      </View>
      <KeyboardAvoidingView style={formContainer} behavior="padding" enabled>
        {Form}
      </KeyboardAvoidingView>
    </View>
  );
};

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

const mapStateToProps = ({ auth }) => {
  const { authStage } = auth;
  return { authStage };
};

export default connect(
  mapStateToProps,
  {},
)(AuthScreen);
