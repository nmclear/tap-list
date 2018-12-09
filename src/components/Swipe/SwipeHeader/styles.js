import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    justifyContent: 'center',
    // backgroundColor: '#21C293',
    backgroundColor: '#E0E0E0',
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    textAlign: 'center',
    color: '#404040',
    fontSize: 16,
    letterSpacing: 1,
  },
  arrowText: {
    fontSize: 25,
    color: '#303030',
  },
});

export default styles;
