import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { signUpWithPhone } from '../../../redux/actions';
import SubmitButton from '../../Buttons/SubmitButton';
import PhoneInput from '../Inputs/PhoneInput';

class SignUpForm extends Component {
  state = {
    phone: '',
    errorMessage: '',
    submitLoading: false,
  };

  handleSubmit = async () => {
    const { phone } = this.state;
    try {
      this.onLoading();
      return this.props.signUpWithPhone(phone);
    } catch (error) {
      return this.onFailSignUp(error);
    }
  };

  onLoading = () => this.setState({
    submitLoading: true,
    errorMessage: '',
  });

  onFailSignUp = err => this.setState({
    errorMessage: 'Something went wrong. Please try again.',
    phone: '',
    submitLoading: false,
  });

  render() {
    const { phone, errorMessage, submitLoading } = this.state;
    const { formContainer, headerStyle } = styles;

    return (
      <View style={formContainer}>
        <Text style={headerStyle}>Sign Up</Text>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Text style={{ textAlign: 'center' }}>1. Enter phone number</Text>
          <Text style={{ textAlign: 'center' }}>2. Get code to verify number</Text>
        </View>
        <PhoneInput phone={phone} onChangeText={phone => this.setState({ phone })} />
        <FormValidationMessage>{errorMessage}</FormValidationMessage>

        <SubmitButton
          title={submitLoading ? '' : 'GET CODE'}
          loading={submitLoading}
          onPress={this.handleSubmit}
          disabled={!phone}
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
  { signUpWithPhone },
)(SignUpForm);
