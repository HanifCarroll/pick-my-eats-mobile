import React, { Component } from "react";
import { ScrollView, BackHandler } from "react-native";
import { Container } from "native-base";
import { connect } from "react-redux";

import * as actions from "../actions";
import ChosenRestaurant from "../components/ChosenRestaurant";
import Reviews from "../components/Reviews";
import StartOverButton from "../components/StartOverButton";

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
    headerRight: (
      <StartOverButton navigate={() => navigation.navigate("search")} />
    )
  });

  handleReset = () => {
    this.props.startOver();
    this.props.navigation.navigate("search");
  };

  componentDidMount() {
    BackHandler.addEventListener("backPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("backPress", this.handleBackButton);
  }

  handleBackButton = () => true;

  render() {
    return (
      <Container>
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

export default connect(mapStateToProps, actions)(ChosenRestaurantScreen);
