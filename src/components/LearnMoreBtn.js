import React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';

const LearnMoreBtn = ({ name = 'this beer', link }) => (
  <Button
    onPress={() => Linking.openURL(link)}
    title="Learn More"
    color="white"
    disabled={!link}
    backgroundColor="black"
    buttonStyle={{ marginBottom: 5, marginTop: 5 }}
    accessibilityLabel={`Learn more about ${name}`}
  />
);

export default LearnMoreBtn;
