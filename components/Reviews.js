import React, { Component } from "react";
import { View, FlatList } from "react-native";
import Review from "./Review";

class Reviews extends Component {
  renderItem = ({ item }) => <Review review={item} />;

  keyExtractor = item => item.id;

  render() {
    const { data } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          style={{ marginBottom: 30 }}
        />
      </View>
    );
  }
}

export default Reviews;
