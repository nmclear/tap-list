import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 40,
    backgroundColor: 'white',
  },
  tabStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    borderRightColor: '#C8C8C8',
    borderStyle: 'solid',
    borderRightWidth: 1,
  },
  activeStyle: {
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
});

export default styles;
