import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ChosenRestaurantScreen extends Component {
  static navigationOptions = {
    title: 'And the winner is...',
    headerTitleStyle: { textAlign: 'center', flex: 1 }
  };
  render() {
    return (
      <View>
        <Text>ChosenRestaurantScreen</Text>
        <Text>ChosenRestaurantScreen</Text>
        <Text>ChosenRestaurantScreen</Text>
        <Text>ChosenRestaurantScreen</Text>
        <Text>ChosenRestaurantScreen</Text>
      </View>
    );
  }
}

export default connect(null, null)(ChosenRestaurantScreen);
