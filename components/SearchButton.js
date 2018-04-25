import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";

import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

const SearchButton = props => {
  const {
    finishButtonStyle,
    searchButtonTextStyle,
    disabledButtonStyle,
    disabledTextStyle
  } = styles;

  const { fetching, onPress } = props;

  const disabled = !props.query || !props.location;

  return (
    <TouchableOpacity
      style={
        disabled ? [finishButtonStyle, disabledButtonStyle] : finishButtonStyle
      }
      onPress={onPress}
      disabled={disabled}
    >
      <View>{fetching && <ActivityIndicator color="white" />}</View>
      {!fetching && (
        <View>
          <Text
            style={
              disabled
                ? [searchButtonTextStyle, disabledTextStyle]
                : searchButtonTextStyle
            }
          >
            SEARCH!
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  finishButtonStyle: {
    backgroundColor: "#99b6e5",
    flexDirection: "row",
    elevation: 5,
    height: SCREEN_HEIGHT * 0.07,
    width: SCREEN_WIDTH * 0.5,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  disabledButtonStyle: {
    backgroundColor: "#b2aba7"
  },
  disabledTextStyle: {
    color: "#efe9e6"
  },
  searchButtonTextStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  }
});

export default SearchButton;
