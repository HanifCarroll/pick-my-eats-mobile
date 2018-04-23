import React, { Component } from "react";
import { StyleSheet, Image, Button, Dimensions } from "react-native";
import {
  Container,
  Content,
  Header,
  View,
  DeckSwiper,
  CardItem,
  Card,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Icon
} from "native-base";
import StarRating from "react-native-star-rating";

const screen = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width
};

export default class DeckSwiperExample extends Component {
  renderRECard = item => (
    <Card title={item.name}>
      <View style={imageContainerStyle}>
        <Image style={imageStyle} source={{ uri: item.image_url }} />
      </View>
      <View style={infoContainerStyle}>
        <Rating
          imageSize={20}
          readonly
          startingValue={item.rating}
          style={ratingStyle}
        />
        <Text style={textStyle}>{item.review_count} Reviews</Text>
        <Text style={textStyle}>{item.price}</Text>
        <Text style={textStyle}>{item.location.address1}</Text>
      </View>
      <View style={buttonStyle}>
        <Button
          title="View Restaurant"
          backgroundColor="#99b6e5"
          onPress={() => Linking.openURL(item.url)}
        />
      </View>
    </Card>
  );

  renderNBCard = item => console.log(hi);

  render() {
    const {
      headerStyle,
      headerTextStyle,
      cardStyle,
      titleTextStyle,
      imageStyle,
      cardBodyTextStyle,
      alignItemsCenter,
      footerStyle
    } = styles;

    return (
      <View>
        <CardItem style={headerStyle}>
          <Text style={headerTextStyle}>25 Cards Remaining</Text>
        </CardItem>
        <DeckSwiper
          dataSource={this.props.restaurants}
          looping={false}
          onSwipeLeft={item => console.log(item)}
          onSwipeRight={item => console.log(item)}
          renderEmpty={() => console.log("finished")}
          renderItem={item => {
            const {
              name,
              image_url,
              rating,
              review_count,
              price,
              location,
              url
            } = item;

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
                      <Image source={{ uri: image_url }} style={imageStyle} />
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
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    width: screen.width * 0.85,
    alignSelf: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom: 5
  },
  headerTextStyle: { fontSize: 14 },
  titleTextStyle: { fontSize: 24, textAlign: "center" },
  cardStyle: {
    width: screen.width * 0.85,
    alignItems: "center"
  },
  imageStyle: {
    height: screen.height * 0.28,
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
