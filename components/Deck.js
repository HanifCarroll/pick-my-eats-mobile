import React from "react";
import { StyleSheet } from "react-native";
import { Container, DeckSwiper, CardItem, Text } from "native-base";
import { SCREEN_WIDTH, headerText } from "../Utils";
import CardDeckItem from "./CardDeckItem";
import FinishButton from "./FinishButton";

const Deck = props => {
  const { headerStyle, headerTextStyle } = styles;

  const {
    restaurants,
    currentIndex,
    onSwipeLeft,
    onSwipeRight,
    onFinish,
    restart,
    fetching,
    selectedNum
  } = props;

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
        renderItem={item => <CardDeckItem item={item} />}
        renderEmpty={() => (
          <FinishButton
            fetching={fetching}
            selectedNum={selectedNum}
            onFinish={onFinish}
            restart={restart}
          />
        )}
      />
    </Container>
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
  headerTextStyle: { fontSize: 14 }
});

export default Deck;
