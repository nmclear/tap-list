import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormValidationMessage } from 'react-native-elements';

import { connect } from 'react-redux';
import { signInWithPhoneAndCode } from '../../../redux/actions';
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
    const { phone, code } = this.state;
    this.setState({ submitLoading: true });
    try {
      return this.props.signInWithPhoneAndCode(phone, code);
    } catch (err) {
      this.setState({
        submitLoading: false,
        errorMessage: 'Something went wrong. Please try again.',
      });
      return err;
    }
  };

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

export default connect(
  null,
  { signInWithPhoneAndCode },
)(SignInForm);
