import React from 'react';
import {
  ScrollView, View, Text, StyleSheet,
} from 'react-native';
import BeerTile from '../components/BeerTile';
import BeerRating from '../components/BeerRating';
import LearnMoreBtn from '../components/LearnMoreBtn';

const BeerScreen = ({ beer }) => {
  const {
    id, uri, name, genre, brewery, bio, description, rating, link,
  } = beer;

  const {
    container, textBox, descrStyle, headerStyle,
  } = styles;
  return (
    <View style={container} key={id}>
      <View>
        <BeerTile uri={uri} title={name} caption={brewery} />
      </View>
      <ScrollView>
        <View style={textBox}>
          <Text style={headerStyle}>{genre}</Text>
          <Text style={descrStyle}>{description}</Text>
        </View>
        <BeerRating rating={rating} />
        <View style={textBox}>
          <Text style={headerStyle}>
            About
            {brewery}
          </Text>
          <Text style={descrStyle}>{bio || 'No Bio Available'}</Text>
        </View>
      </ScrollView>
      <LearnMoreBtn name={name} link={link} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  textBox: {
    backgroundColor: 'white',
    padding: 20,
  },
  descrStyle: {
    fontSize: 16,
    textAlign: 'justify',
  },
  headerStyle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BeerScreen;
