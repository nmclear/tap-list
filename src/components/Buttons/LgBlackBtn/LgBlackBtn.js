import React from 'react';
import { Button } from 'react-native-elements';
import { propTypes, defaultProps } from './propTypes';

const LgBlackBtn = ({ title, onPress, disabled }) => (
  <Button
    onPress={onPress}
    title={title}
    color="white"
    disabled={disabled}
    backgroundColor="black"
    buttonStyle={{ marginBottom: 5, marginTop: 5 }}
    accessibilityLabel={title}
  />
);

LgBlackBtn.propTypes = propTypes;
LgBlackBtn.defaultProps = defaultProps;

export default LgBlackBtn;
