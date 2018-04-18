import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Linking
} from "react-native";
import { Card, Rating } from "react-native-elements";

class RestaurantCard extends React.Component {
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
            <Image
              style={{ width: 50, height: 50, borderRadius: 5 }}
              source={{ uri: image_url }}
            />
          </View>
          <View style={infoContainerStyle}>
            <Text style={textStyle}>{name}</Text>
            <Rating
              imageSize={20}
              readonly
              startingValue={rating}
              style={ratingStyle}
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

const styles = {
  imageContainerStyle: {
    justifyContent: "center"
  },
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
};

export default RestaurantCard;
