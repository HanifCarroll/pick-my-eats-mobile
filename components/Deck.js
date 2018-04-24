import React from "react";
import {
  StyleSheet,
  Image,
  Button,
  Linking,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Content,
  View,
  DeckSwiper,
  CardItem,
  Card,
  Text,
  Body
} from "native-base";
import StarRating from "react-native-star-rating";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

const renderItem = item => {
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
};

const Deck = props => {
  const {
    headerStyle,
    headerTextStyle,
    finishButtonContainerStyle,
    finishButtonStyle,
    finishButtonTextStyle,
    justifyContentCenter
  } = styles;

  const {
    restaurants,
    currentIndex,
    onSwipeLeft,
    onSwipeRight,
    onFinish,
    fetching,
    selectedNum
  } = props;

  const FinishButton = () => (
    <CardItem style={finishButtonContainerStyle}>
      <Body style={justifyContentCenter}>
        <TouchableOpacity style={finishButtonStyle} onPress={onFinish}>
          <View style={justifyContentCenter}>
            {fetching && <ActivityIndicator color="white" />}
          </View>
          {!fetching && (
            <View style={justifyContentCenter}>
              <Text style={finishButtonTextStyle}>PICK!</Text>
            </View>
          )}
        </TouchableOpacity>
      </Body>
    </CardItem>
  );

  const StartOverButton = () => (
    <CardItem style={finishButtonContainerStyle}>
      <Body style={justifyContentCenter}>
        <TouchableOpacity style={finishButtonStyle} onPress={onFinish}>
          <View style={justifyContentCenter}>
            {fetching && <ActivityIndicator color="white" />}
          </View>
          {!fetching && (
            <View style={justifyContentCenter}>
              <Text style={finishButtonTextStyle}>NONE SELECTED!</Text>
            </View>
          )}
        </TouchableOpacity>
      </Body>
    </CardItem>
  );

  const renderEmpty = selectedNum => {
    return selectedNum === 0 ? <StartOverButton /> : <FinishButton />;
  };

  return (
    <Container>
      <CardItem style={headerStyle}>
        <Text style={headerTextStyle}>
          {restaurants.length - currentIndex}{" "}
          {headerText(restaurants.length, currentIndex)}
        </Text>
      </CardItem>
      <DeckSwiper
        dataSource={restaurants}
        looping={false}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        renderItem={item => renderItem(item)}
        renderEmpty={() => renderEmpty(selectedNum)}
      />
    </Container>
  );
};

const headerText = (length, index) => {
  return length - index === 1 ? "Card Remaining" : "Cards Remaining";
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
  justifyContentCenter: {
    justifyContent: "center"
  },
  footerStyle: {
    marginTop: 5,
    paddingBottom: 20
  },
  finishButtonContainerStyle: {
    height: SCREEN_HEIGHT * 0.72,
    width: SCREEN_WIDTH * 0.85,
    marginTop: 5,
    elevation: 5,
    alignSelf: "center"
  },
  finishButtonStyle: {
    backgroundColor: "#99b6e5",
    flexDirection: "row",
    elevation: 5,
    height: SCREEN_HEIGHT * 0.07,
    width: SCREEN_WIDTH * 0.33,
    justifyContent: "center",

    alignSelf: "center"
  },
  finishButtonTextStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  }
});

export default Deck;
