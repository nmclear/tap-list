import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { propTypes, defaultProps } from './propTypes';
import styles from './styles';

const MiniCard = (props) => {
  const {
    id, title, subtitle, uri, onPress, titleStyle, subtitleStyle, cardColor,
  } = props;
  const { container, textContainer } = styles;

  return (
    <TouchableOpacity
      key={id}
      style={[container, { backgroundColor: cardColor || 'white' }]}
      onPress={onPress}
    >
      <Avatar large rounded source={{ uri }} activeOpacity={0.7} />
      <View style={textContainer}>
        <Text style={[{ fontSize: 20 }, titleStyle]}>{title}</Text>
        <Text style={[{ fontSize: 14 }, subtitleStyle]}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

MiniCard.propTypes = propTypes;
MiniCard.defaultProps = defaultProps;

export default MiniCard;
