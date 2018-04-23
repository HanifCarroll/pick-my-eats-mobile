import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet, Button } from "react-native";

import RestaurantCard from "../components/RestaurantCard";

class ListView extends Component {
  renderItem = ({ item }) => (
    <RestaurantCard
      restaurant={item}
      toggleSelected={this.props.toggleSelected}
      selected={this.props.restaurants.selectedRestaurants.includes(item)}
    />
  );

  keyExtractor = item => item.id;

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
          color="#99b6e5"
          onPress={this.onSubmit}
          buttonStyle={buttonStyle}
          loading={this.props.restaurants.fetching}
          disabled={this.props.restaurants.selectedRestaurants.length === 0}
        />
      </View>
    );
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

export default ListView;
