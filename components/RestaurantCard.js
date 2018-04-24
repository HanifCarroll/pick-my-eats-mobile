import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Linking,
  StyleSheet
} from "react-native";
import { Card } from "native-base";
import StarRating from "react-native-star-rating";

class RestaurantCard extends Component {
  state = {
    selected: false
  };

  handleLongPress = () => {
    Linking.openURL(this.props.restaurant.url);
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
    this.props.toggleSelected(this.props.restaurant);
  };

  render() {
    const {
      imageContainerStyle,
      imageStyle,
      cardContainerStyle,
      infoContainerStyle,
      addressContainerStyle,
      textStyle,
      ratingStyle
    } = styles;

    const {
      name,
      rating,
      review_count,
      price,
      location,
      url,
      image_url
    } = this.props.restaurant;

    return (
      <TouchableWithoutFeedback
        onPress={this.toggleSelected}
        onLongPress={this.handleLongPress}
      >
        <Card
          flexDirection="row"
          containerStyle={{
            backgroundColor: this.state.selected ? "red" : "white"
          }}
        >
          <View style={imageContainerStyle}>
            <Image style={imageStyle} source={{ uri: image_url }} />
          </View>
          <View style={infoContainerStyle}>
            <Text style={textStyle}>{name}</Text>
            <StarRating
              disabled
              maxStars={5}
              starSize={30}
              rating={rating}
              fullStarColor="orange"
              emptyStarColor="orange"
            />
            <Text style={textStyle}>{review_count} Reviews</Text>
            <Text style={textStyle}>{price}</Text>
          </View>
          <View style={addressContainerStyle}>
            <Text style={textStyle}>{location.address1}</Text>
          </View>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    justifyContent: "center"
  },
  imageStyle: { width: 50, height: 50, borderRadius: 5 },
  infoContainerStyle: {
    flex: 1
  },
  addressContainerStyle: {
    flex: 1,
    justifyContent: "center"
  },
  textStyle: {
    textAlign: "center"
  },
  ratingStyle: {
    alignItems: "center",
    marginTop: 5
  }
});

export default RestaurantCard;
