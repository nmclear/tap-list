import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  FormInput, FormValidationMessage, Button, Icon,
} from 'react-native-elements';

import { connect } from 'react-redux';
import { signInWithPhoneAndCode } from '../redux/actions';

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
    const {
      formContainer,
      formRowStyle,
      inputStyle,
      headerStyle,
      iconStyle,
      inputConStyle,
    } = styles;

    return (
      <View style={formContainer}>
        <Text style={headerStyle}>Log In</Text>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Text style={{ textAlign: 'center' }}>1. Enter phone number</Text>
          <Text style={{ textAlign: 'center' }}>2. Enter code</Text>
        </View>
        <View style={formRowStyle}>
          <Icon name="phone" containerStyle={iconStyle} />
          <FormInput
            value={phone}
            onChangeText={phone => this.setState({ phone })}
            placeholder="555-555-5555"
            returnKeyType="done"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            maxLength={15}
            containerStyle={inputConStyle}
            inputStyle={inputStyle}
          />
        </View>
        <View style={formRowStyle}>
          <Icon name="lock" containerStyle={iconStyle} />
          <FormInput
            value={code}
            onChangeText={code => this.setState({ code })}
            placeholder="Enter code"
            returnKeyType="done"
            keyboardType="number-pad"
            maxLength={10}
            containerStyle={inputConStyle}
            inputStyle={inputStyle}
          />
        </View>
        <FormValidationMessage>{errorMessage}</FormValidationMessage>
        <Button
          title={submitLoading ? '' : 'SUBMIT'}
          loading={submitLoading}
          onPress={this.handleSubmit}
          color="white"
          disabled={!phone || !code}
          backgroundColor="black"
          buttonStyle={{ marginBottom: 5, marginTop: 5 }}
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
  formRowStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 0,
  },
  inputStyle: {
    fontSize: 20,
    color: 'black',
    height: 50,
    letterSpacing: 1,
  },
  inputConStyle: {
    flex: 5,
  },
});

export default connect(
  null,
  { signInWithPhoneAndCode },
)(SignInForm);
