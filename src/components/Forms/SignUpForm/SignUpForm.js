import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { FormValidationMessage } from 'react-native-elements';
import { graphql } from 'react-apollo';

import CREATE_USER_MUTATION from '../../../graphql/mutations/server/create_new_user';

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
    const { onCreateUserSubmit, onAuthStageChange } = this.props;
    try {
      this.onLoading();
      await onCreateUserSubmit(phone);
      return onAuthStageChange('SIGN_IN');
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
    const { onAuthStageChange } = this.props;

    return (
      <View style={formContainer}>
        <Text style={headerStyle}>Sign Up</Text>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Text style={{ textAlign: 'center' }}>1. Enter phone number</Text>
          <Text style={{ textAlign: 'center' }}>2. Get code to verify number</Text>
        </View>
        <PhoneInput phone={phone} onChangeText={phone => this.setState({ phone })} />
        <FormValidationMessage>{errorMessage}</FormValidationMessage>
        <TouchableOpacity onPress={() => onAuthStageChange('SIGN_IN')}>
          <Text style={{ textAlign: 'center' }}>Have code?</Text>
        </TouchableOpacity>

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

const mapResultsToProps = ({ mutate }) => {
  const onCreateUserSubmit = phone => mutate({ variables: { phone } });
  return { onCreateUserSubmit };
};

export default graphql(CREATE_USER_MUTATION, { props: mapResultsToProps })(SignUpForm);
