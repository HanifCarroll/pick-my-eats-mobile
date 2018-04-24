import React from "react";
import { View, Image, Text, Button, Linking, StyleSheet } from "react-native";
import { Card, CardItem, Body } from "native-base";
import StarRating from "react-native-star-rating";

import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

const ChosenRestaurant = ({ restaurant }) => {
  const {
    cardStyle,
    titleTextStyle,
    imageStyle,
    cardBodyTextStyle,
    alignItemsCenter,
    footerStyle
  } = styles;

  const {
    name,
    rating,
    review_count,
    price,
    location,
    image_url,
    url
  } = restaurant;

  return (
    <Card style={cardStyle}>
      <CardItem bordered>
        <Body style={alignItemsCenter}>
          <Text style={titleTextStyle}>{name}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Image source={{ uri: image_url }} style={imageStyle} />
      </CardItem>
      <CardItem bordered>
        <Body style={cardBodyTextStyle}>
          <StarRating
            disabled
            maxStars={5}
            starSize={30}
            rating={rating}
            fullStarColor="orange"
            emptyStarColor="orange"
          />
          <Text>{review_count} Reviews</Text>
          <Text>{price}</Text>
          <Text>{location.address1}</Text>
          <Text>
            {location.city}, {location.state} {location.zip_code}
          </Text>
        </Body>
      </CardItem>
      <CardItem style={footerStyle}>
        <Body style={alignItemsCenter}>
          <View>
            <Button
              title="View Restaurant"
              color="#99b6e5"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    width: SCREEN_WIDTH * 0.85,
    alignSelf: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom: 5
  },
  headerTextStyle: { fontSize: 14 },
  titleTextStyle: { fontSize: 24, textAlign: "center" },
  cardStyle: {
    width: SCREEN_WIDTH * 0.85,
    alignItems: "center",
    marginBottom: 15
  },
  imageStyle: {
    height: SCREEN_HEIGHT * 0.28,
    width: null,
    flex: 1
  },
  cardBodyTextStyle: { alignItems: "center", bottom: 10 },
  alignItemsCenter: {
    alignItems: "center"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  footerStyle: {
    marginTop: 5,
    paddingBottom: 20
  }
});

export default ChosenRestaurant;
