import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import SwipeContainer from './src/components/SwipeContainer';

// import TAP_LIST_DATA from './src/data/tapListData';

import Router from './src/Router';


// class App extends Component {

//   state = {
//     data: TAP_LIST_DATA,
//     liked: [],
//     disliked: []
//   }

//   handleLiked = item => {
//     const { liked } = this.state;
//     this.setState({
//       liked: [...liked, item]
//     })
//   }

//   handleDisliked = item => {
//     const { disliked } = this.state;
//     this.setState({
//       disliked: [...disliked, item]
//     })
//   }

//   render() {
//     const { data, liked, disliked } = this.state;
//     return (
//       <SwipeContainer
//         data={data}
//         onSwipeRight={this.handleLiked}
//         onSwipeLeft={this.handleDisliked}
//         likes={liked}
//         dislikes={disliked}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default App;


const App = () => {
  return (
    <Router />
  )
}

export default App;