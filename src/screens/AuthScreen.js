import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import { graphql, compose } from 'react-apollo';
import getAuthStage from '../graphql/queries/client/get_auth_stage';
import updateAuthStage from '../graphql/mutations/client/update_auth_stage';
import SignUpForm from '../components/Forms/SignUpForm';
import SignInForm from '../components/Forms/SignInForm';

const AuthScreen = (props) => {
  const { container, formContainer } = styles;
  const { authStage, onAuthStageChange } = props;

  const Form = authStage === 'SIGN_IN' ? (
    <SignInForm onAuthStageChange={onAuthStageChange} />
  ) : (
    <SignUpForm onAuthStageChange={onAuthStageChange} />
  );

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

const queryProps = ({ data: { authStage } }) => ({ authStage });
const mutateProps = ({ mutate }) => {
  const onAuthStageChange = authStage => mutate({ variables: { authStage } });
  return { onAuthStageChange };
};

export default compose(
  graphql(getAuthStage, { props: queryProps }),
  graphql(updateAuthStage, { props: mutateProps }),
)(AuthScreen);
