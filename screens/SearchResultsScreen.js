import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { Card, CardItem } from "native-base";

import * as actions from "../actions";
import RestaurantCard from "../components/RestaurantCard";
import Deck from "../components/Deck";

class SearchResultsScreen extends Component {
  static navigationOptions = {
    title: "Results",
    headerStyle: { height: 40, bottom: -10, paddingBottom: 10 }
  };

  renderItem = ({ item }) => (
    <RestaurantCard
      restaurant={item}
      toggleSelected={this.props.toggleSelected}
      selected={this.props.restaurants.selectedRestaurants.includes(item)}
    />
  );

  keyExtractor = (item, index) => item.id;

  renderList = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          keyboardShouldPersistTaps="always"
          data={this.props.restaurants.restaurantsResults}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
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

  oldrender() {
    const { viewStyle, textStyle, buttonStyle } = styles;

    return (
      <View style={viewStyle}>
        <View>
          <Text style={textStyle}>Tap the restaurants that look good!</Text>
          <Text style={textStyle}>
            Longpress a restaurant to open its Yelp page in a new window!
          </Text>
        </View>
        {this.renderList()}
        <Button
          title="Pick!"
          backgroundColor="#99b6e5"
          onPress={this.onSubmit}
          buttonStyle={buttonStyle}
          loading={this.props.restaurants.fetching}
          disabled={this.props.restaurants.selectedRestaurants.length === 0}
        />
      </View>
    );
  }
  render() {
    return <Deck restaurants={this.props.restaurants.restaurantsResults} />;
  }
}

const styles = StyleSheet.create({
  viewStyle: { flex: 1 },
  textStyle: { textAlign: "center" },
  buttonStyle: {
    marginTop: 20,
    marginBottom: 30
  }
});
const mapStateToProps = state => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, actions)(SearchResultsScreen);
