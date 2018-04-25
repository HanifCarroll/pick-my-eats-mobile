import React from "react";
import { StyleSheet } from "react-native";
import { Container, CardItem, Text } from "native-base";
import { SCREEN_WIDTH } from "../Utils";

const NoResults = () => {
  const { containerStyle, cardStyle, textStyle } = styles;
  return (
    <Container style={containerStyle}>
      <CardItem style={cardStyle}>
        <Text style={textStyle}>No Results Found</Text>
      </CardItem>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center"
  },
  cardStyle: {
    width: SCREEN_WIDTH * 0.85,
    alignSelf: "center",
    justifyContent: "center",
    elevation: 5
  },
  textStyle: {
    textAlign: "center",
    fontSize: 14
  }
});

export default NoResults;
