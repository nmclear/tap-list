import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { propTypes, defaultProps } from './propTypes';

const RouteBackBtn = (props) => {
  const { color, size } = props;

  return (
    <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => Actions.pop()}>
      <Icon
        name="arrow-left"
        type="material-community"
        color={color}
        size={size}
        underlayColor="transparent"
      />
    </TouchableOpacity>
  );
};

RouteBackBtn.propTypes = propTypes;
RouteBackBtn.defaultProps = defaultProps;

export default RouteBackBtn;
