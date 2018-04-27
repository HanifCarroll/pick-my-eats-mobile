import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Content } from "native-base";
import * as actions from "../actions";
import NoResults from "../components/NoResults";
import Deck from "../components/Deck";

class SearchResultsScreen extends Component {
  static navigationOptions = {
    title: "Results",
    headerStyle: { height: 40, bottom: -10, paddingBottom: 10 }
  };

  restart = () => {
    this.props.updateQuery({ prop: "query", value: "" });
    this.props.updateQuery({ prop: "location", value: "" });
    this.props.navigation.navigate("search");
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

  renderResults = () => {
    return this.props.restaurants.restaurantsResults.length === 0 ? (
      <NoResults />
    ) : (
      <Deck
        restaurants={this.props.restaurants.restaurantsResults}
        currentIndex={this.props.restaurants.swipeIndex}
        onSwipeLeft={this.onSwipeLeft}
        onSwipeRight={this.onSwipeRight}
        onFinish={this.onSubmit}
        restart={this.restart}
        fetching={this.props.restaurants.fetching}
        selectedNum={this.props.restaurants.selectedRestaurants.length}
      />
    );
  };

  render() {
    return (
      <Container>
        <Content>{this.renderResults()}</Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, actions)(SearchResultsScreen);
