import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Avatar } from 'react-native-elements';

const MiniCard = props => {
  const { item } = props;
  const { container, text } = styles;


  return (

    <View key={item.id} flexDirection="row" style={container}>
        <Avatar
            large
            rounded
            source={{uri: item.uri}}
            activeOpacity={0.7}
        />
        <Text style={text}>
            {item.text}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 8,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
    backgroundColor: 'white'
    // paddingRight: 15
  },
  text: {
      paddingLeft: 15
  }
})

export default MiniCard;