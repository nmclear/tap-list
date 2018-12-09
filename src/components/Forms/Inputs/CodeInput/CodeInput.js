import React from 'react';
import { View } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const PhoneInput = ({ code, onChangeText }) => {
  const { inputStyle, iconStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Icon name="lock" containerStyle={iconStyle} />
      <FormInput
        value={code}
        onChangeText={onChangeText}
        placeholder="Enter code"
        returnKeyType="done"
        keyboardType="number-pad"
        maxLength={10}
        containerStyle={{ flex: 5 }}
        inputStyle={inputStyle}
      />
    </View>
  );
};

PhoneInput.propTypes = {
  code: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default PhoneInput;
