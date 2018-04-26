import React from "react";
import { StyleSheet, Image, View, Button, Linking } from "react-native";
import { Content, Container, Card, CardItem, Body, Text } from "native-base";
import StarRating from "react-native-star-rating";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

const CardDeckItem = ({ item }) => {
  const {
    cardStyle,
    titleTextStyle,
    imageStyle,
    cardBodyTextStyle,
    alignItemsCenter,
    footerStyle
  } = styles;

  const { name, image_url, rating, review_count, price, location, url } = item;

  return (
    <Container>
      <Content contentContainerStyle={alignItemsCenter}>
        <Card style={cardStyle}>
          <CardItem bordered>
            <Body style={alignItemsCenter}>
              <Text style={titleTextStyle}>{name}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Image
              source={
                image_url === ""
                  ? require("../assets/placeholder-image.png")
                  : { uri: image_url }
              }
              style={imageStyle}
            />
          </CardItem>
          <CardItem bordered>
            <Body style={cardBodyTextStyle}>
              <StarRating
                disabled
                maxStars={5}
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
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  titleTextStyle: { fontSize: 24, textAlign: "center" },
  cardStyle: {
    width: SCREEN_WIDTH * 0.85,
    alignItems: "center"
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
  footerStyle: {
    marginTop: 5,
    paddingBottom: 20
  }
});

export default CardDeckItem;
