import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import Review from './Review';

class Reviews extends Component {
  renderItem = ({ item }) => <Review review={item} />;

  keyExtractor = (item, index) => item.id;

  render() {
    const { data } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default Reviews;
