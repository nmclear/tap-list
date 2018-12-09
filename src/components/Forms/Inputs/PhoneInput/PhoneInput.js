import React from 'react';
import { View } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const PhoneInput = ({ phone, onChangeText }) => {
  const { inputStyle, iconStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Icon name="phone" containerStyle={iconStyle} />
      <FormInput
        value={phone}
        onChangeText={onChangeText}
        placeholder="555-555-5555"
        returnKeyType="done"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        maxLength={15}
        containerStyle={{ flex: 5 }}
        inputStyle={inputStyle}
      />
    </View>
  );
};

PhoneInput.propTypes = {
  phone: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default PhoneInput;
