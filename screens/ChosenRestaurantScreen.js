import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";

import ChosenRestaurant from "../components/ChosenRestaurant";
import Reviews from "../components/Reviews";

class ChosenRestaurantScreen extends Component {
  static navigationOptions = {
    title: "And the winner is...",
    headerStyle: { height: 40, bottom: -10, paddingBottom: 10 }
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <ChosenRestaurant
          restaurant={this.props.restaurants.chosenRestaurant}
        />
        <Reviews data={this.props.restaurants.reviews} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, null)(ChosenRestaurantScreen);
