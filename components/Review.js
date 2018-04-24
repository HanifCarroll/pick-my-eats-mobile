import React from "react";
import {
  Text,
  View,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Card, CardItem } from "native-base";
import StarRating from "react-native-star-rating";

import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

const Review = ({ review }) => {
  const { text, rating, user, url } = review;
  const {
    cardStyle,
    firstCardItemStyle,
    secondCardItemStyle,
    imageStyle,
    infoStyle,
    reviewTextViewStyle,
    nameTextStyle,
    footerStyle,
    buttonStyle,
    buttonTextStyle,
    justifyContentCenter
  } = styles;

  return (
    <Card style={cardStyle}>
      <CardItem style={firstCardItemStyle}>
        <View style={{ flexDirection: "row" }}>
          <Image style={imageStyle} source={{ uri: user.image_url }} />
          <View style={infoStyle}>
            <Text style={nameTextStyle}>{user.name}</Text>
            <StarRating
              disabled
              maxStars={5}
              starSize={20}
              rating={rating}
              fullStarColor="orange"
              emptyStarColor="orange"
            />
          </View>
        </View>
      </CardItem>
      <CardItem bordered style={secondCardItemStyle}>
        <View style={reviewTextViewStyle}>
          <Text>{text}</Text>
        </View>
      </CardItem>
      <CardItem style={footerStyle}>
        <View>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => Linking.openURL(url)}
          >
            <View style={justifyContentCenter}>
              <Text style={buttonTextStyle}>Read More!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: SCREEN_WIDTH * 0.95
  },
  firstCardItemStyle: {},
  secondCardItemStyle: {
    bottom: 5,
    paddingTop: 0
  },
  imageStyle: { width: 55, height: 55, borderRadius: 5 },
  infoStyle: { marginLeft: 15 },
  nameTextStyle: { fontSize: 16, marginBottom: 5 },
  reviewTextViewStyle: { marginTop: 10 },
  justifyContentCenter: { justifyContent: "center" },
  buttonContainerStyle: {
    marginTop: 5,
    marginBottom: -7,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  buttonStyle: {
    backgroundColor: "#99b6e5",
    flexDirection: "row",
    elevation: 5,
    height: SCREEN_HEIGHT * 0.05,
    width: SCREEN_WIDTH * 0.66,
    marginBottom: 10,
    justifyContent: "center",
    alignSelf: "center"
  },
  footerStyle: {
    justifyContent: "center"
  }
});

export default Review;
