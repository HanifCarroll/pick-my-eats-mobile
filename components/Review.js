import React, { Component } from "react";
import { Text, View, Image, Linking, StyleSheet } from "react-native";
import { Card, Rating, Button } from "react-native-elements";

const Review = ({ review }) => {
  const { text, rating, user, url } = review;
  const {
    imageStyle,
    infoStyle,
    reviewTextViewStyle,
    buttonContainerStyle,
    ratingStyle
  } = styles;

  return (
    <Card>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Image style={imageStyle} source={{ uri: user.image_url }} />
          <View style={infoStyle}>
            <Text>{user.name}</Text>
            <Rating
              style={ratingStyle}
              readonly
              imageSize={20}
              startingValue={rating}
            />
          </View>
        </View>
        <View style={reviewTextViewStyle}>
          <Text>{text}</Text>
        </View>
        <View style={buttonContainerStyle}>
          <Button
            backgroundColor="#99b6e5"
            title="Read more!"
            onPress={() => Linking.openURL(url)}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageStyle: { width: 50, height: 50, borderRadius: 5 },
  infoStyle: { marginLeft: 15 },
  reviewTextViewStyle: { marginTop: 10 },
  buttonContainerStyle: { marginTop: 15, justifyContent: "center" },
  ratingStyle: { marginTop: 5 }
});

export default Review;
