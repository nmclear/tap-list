import React from 'react';
import { Button } from 'react-native-elements';
import { propTypes, defaultProps } from './propTypes';

const SubmitButton = (props) => {
  const {
    title, loading, onPress, disabled, textColor, bgColor,
  } = props;
  return (
    <Button
      title={title}
      loading={loading}
      onPress={onPress}
      color={textColor}
      disabled={disabled}
      backgroundColor={bgColor}
      buttonStyle={{ marginBottom: 5, marginTop: 5 }}
    />
  );
};

SubmitButton.propTypes = propTypes;
SubmitButton.defaultProps = defaultProps;

export default SubmitButton;
