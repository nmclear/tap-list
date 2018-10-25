import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Avatar } from 'react-native-elements';

const MiniCard = ({ item }) => {
  const { id, uri, name, brewery } = item;
  const { container, textContainer, title, subtitle } = styles;


  return (

    <View key={id} flexDirection="row" style={container}>
        <Avatar
            large
            rounded
            source={{uri: uri}}
            activeOpacity={0.7}
        />
        <View style={textContainer}>
          <Text style={title}>
              {name}
          </Text>
          <Text style={subtitle}>
              {brewery}
          </Text>
        </View>
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
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 15
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 14
  }
})

export default MiniCard;