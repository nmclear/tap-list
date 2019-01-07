import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import { compose } from 'react-apollo';
import getAuthStage from '../graphql/queries/client/get_auth_stage';
import updateAuthStage from '../graphql/mutations/client/update_auth_stage';
import SignUpForm from '../components/Forms/SignUpForm';
import SignInForm from '../components/Forms/SignInForm';

const AuthScreen = (props) => {
  const { container, formContainer, headerStyle } = styles;
  const { authStage, onAuthStageChange } = props;

  const Form = authStage === 'SIGN_IN' ? (
    <SignInForm onAuthStageChange={onAuthStageChange} />
  ) : (
    <SignUpForm onAuthStageChange={onAuthStageChange} />
  );

  return (
    <View style={container}>
      <KeyboardAvoidingView style={formContainer} behavior="padding" enabled>
        {Form}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle: {
    fontSize: 30,
    letterSpacing: 2,
  },
});

export default compose(
  getAuthStage,
  updateAuthStage,
)(AuthScreen);
