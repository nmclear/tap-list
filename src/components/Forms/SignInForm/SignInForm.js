import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { FormValidationMessage } from 'react-native-elements';

import { compose } from 'react-apollo';
import authorizeUserMutation from '../../../graphql/mutations/server/authorize_new_user';
import saveCurrentUserMutation from '../../../graphql/mutations/client/save_current_user';

import SubmitButton from '../../Buttons/SubmitButton';
import PhoneInput from '../Inputs/PhoneInput';
import CodeInput from '../Inputs/CodeInput';

class SignInForm extends Component {
  state = {
    phone: '',
    code: '',
    errorMessage: '',
    submitLoading: false,
  };

  handleSubmit = async () => {
    const { phone } = this.state;
    const code = parseInt(this.state.code, 10);
    const { signInWithPhoneAndCode, saveCurrentUser, onAuthStageChange } = this.props;
    this.setState({ submitLoading: true });
    try {
      this.onLoading();
      await signInWithPhoneAndCode({ phone, code });
      await saveCurrentUser(phone);
      return onAuthStageChange('LOGGED_IN');
    } catch (err) {
      return this.onFailSignIn(err);
    }
  };

  onLoading = () => this.setState({
    submitLoading: true,
    errorMessage: '',
  });

  onFailSignIn = err => this.setState({
    errorMessage: 'Something went wrong. Please try again.',
    code: '',
    submitLoading: false,
  });

  render() {
    const {
      phone, code, errorMessage, submitLoading,
    } = this.state;
    const { formContainer, headerStyle } = styles;

    return (
      <View style={formContainer}>
        <Text style={headerStyle}>Log In</Text>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Text style={{ textAlign: 'center' }}>1. Enter phone number</Text>
          <Text style={{ textAlign: 'center' }}>2. Enter code</Text>
        </View>
        <PhoneInput phone={phone} onChangeText={phone => this.setState({ phone })} />
        <CodeInput code={code} onChangeText={code => this.setState({ code })} />

        <FormValidationMessage>{errorMessage}</FormValidationMessage>
        <TouchableOpacity onPress={() => this.props.onAuthStageChange('SIGN_UP')}>
          <Text style={{ textAlign: 'center' }}>No code?</Text>
        </TouchableOpacity>
        <SubmitButton
          title={submitLoading ? '' : 'SUBMIT'}
          loading={submitLoading}
          onPress={this.handleSubmit}
          disabled={!phone || !code}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    backgroundColor: 'white',
    width: '90%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default compose(
  authorizeUserMutation,
  saveCurrentUserMutation,
)(SignInForm);
