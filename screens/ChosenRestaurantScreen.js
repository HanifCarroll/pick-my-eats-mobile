import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ChosenRestaurant from '../components/ChosenRestaurant';

class ChosenRestaurantScreen extends Component {
  static navigationOptions = {
    title: 'And the winner is...',
    headerTitleStyle: { textAlign: 'center', flex: 1 }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ChosenRestaurant
          restaurant={this.props.restaurants.chosenRestaurant}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, null)(ChosenRestaurantScreen);
