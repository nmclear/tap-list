import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { propTypes, defaultProps } from './propTypes';
import styles from './styles';

const EndDeckCard = (props) => {
  const {
    title, text, yesBtnText, noBtnText, onYesPress, onNoPress,
  } = props;
  const { textStyle, buttonGroup, buttonStyle } = styles;
  return (
    <Card title={title}>
      <Text style={textStyle}>{text}</Text>
      <View style={buttonGroup}>
        <Button
          backgroundColor="black"
          title={noBtnText}
          onPress={onNoPress}
          buttonStyle={buttonStyle}
        />
        <Button
          backgroundColor="black"
          title={yesBtnText}
          onPress={onYesPress}
          buttonStyle={buttonStyle}
        />
      </View>
    </Card>
  );
};

EndDeckCard.propTypes = propTypes;
EndDeckCard.defaultProps = defaultProps;

export default EndDeckCard;
