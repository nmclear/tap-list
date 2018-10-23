import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  iconContainerStyle: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

const IconBtn = (props) => {
  const { color, size, bgColor } = props;

  return (
    <View style={styles.iconContainerStyle}>
      <Icon.Button
        name="arrow-left"
        solid
        color={color}
        size={size}
        // backgroundColor={bgColor}
        backgroundColor="transparent"
        borderRadius={0}
        onPress={() => Actions.pop()}
      />
    </View>
  );
};

IconBtn.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.number,
};

IconBtn.defaultProps = {
  color: 'white',
  size: 25,
  bgColor: 'transparent',
};

export default IconBtn;
