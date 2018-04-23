import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import Deck from "../components/Deck";

class SearchResultsScreen extends Component {
  static navigationOptions = {
    title: "Results",
    headerStyle: { height: 40, bottom: -10, paddingBottom: 10 }
  };

  onSubmit = () => {
    this.props.updateChosenRestaurant(this.chooseRandomRestaurant());
    this.props.fetchReviews(this.props.navigation);
  };

  chooseRandomRestaurant = () => {
    const random = Math.floor(
      Math.random() * this.props.restaurants.selectedRestaurants.length
    );
    return this.props.restaurants.selectedRestaurants[random];
  };

  onSwipeLeft = () => {
    this.props.changeIndex(this.props.restaurants.swipeIndex + 1);
  };

  onSwipeRight = restaurant => {
    this.props.changeIndex(this.props.restaurants.swipeIndex + 1);
    this.props.toggleSelected(restaurant);
  };

  render() {
    return (
      <Deck
        restaurants={this.props.restaurants.restaurantsResults}
        currentIndex={this.props.restaurants.swipeIndex}
        onSwipeLeft={this.onSwipeLeft}
        onSwipeRight={this.onSwipeRight}
        onFinish={this.onSubmit}
        fetching={this.props.restaurants.fetching}
        selectedNum={this.props.restaurants.selectedRestaurants.length}
      />
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, actions)(SearchResultsScreen);
