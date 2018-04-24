import React, { Component } from "react";
import { ScrollView, BackHandler } from "react-native";
import { Container } from "native-base";
import { connect } from "react-redux";
import { withNavigationFocus } from "react-navigation";

import * as actions from "../actions";
import ChosenRestaurant from "../components/ChosenRestaurant";
import Reviews from "../components/Reviews";
import StartOverButton from "../components/StartOverButton";
import { resetAction } from "../Utils";

class ChosenRestaurantScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "And the winner is...",
    headerStyle: {
      height: 40,
      bottom: -10,
      paddingBottom: 10,
      paddingRight: 10
    },
    headerLeft: null,
    headerRight: <StartOverButton navigation={navigation} />
  });

  listenForBackPress = () => {
    if (this.props.isFocused) {
      BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    } else {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        this.handleBackPress
      );
    }
  };

  handleBackPress = () => {
    this.props.navigation.dispatch(resetAction);
    return true;
  };

  render() {
    return (
      <Container>
        {this.listenForBackPress()}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <ChosenRestaurant
            restaurant={this.props.restaurants.chosenRestaurant}
          />
          <Reviews data={this.props.restaurants.reviews} />
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, actions)(
  withNavigationFocus(ChosenRestaurantScreen)
);
