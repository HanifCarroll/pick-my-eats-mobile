import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { CardItem, Body } from "native-base";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

const FinishButton = props => {
  const {
    finishButtonContainerStyle,
    finishButtonStyle,
    finishButtonTextStyle,
    justifyContentCenter
  } = styles;

  const { selectedNum, fetching, onFinish, restart } = props;

  const createView = () => {
    if (fetching) {
      return (
        <TouchableOpacity style={finishButtonStyle}>
          <View style={justifyContentCenter}>
            <ActivityIndicator color="white" />
          </View>
        </TouchableOpacity>
      );
    }
    if (selectedNum === 0) {
      return (
        <TouchableOpacity style={finishButtonStyle} onPress={restart}>
          <View style={justifyContentCenter}>
            <Text style={finishButtonTextStyle}>{"None Selected"}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      if (!fetching) {
        return (
          <TouchableOpacity style={finishButtonStyle} onPress={onFinish}>
            <View style={justifyContentCenter}>
              <Text style={finishButtonTextStyle}>PICK!</Text>
            </View>
          </TouchableOpacity>
        );
      }
    }
  };

  return (
    <CardItem style={finishButtonContainerStyle}>
      <Body style={justifyContentCenter}>{createView()}</Body>
    </CardItem>
  );
};

const styles = StyleSheet.create({
  justifyContentCenter: {
    justifyContent: "center"
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
    alignItems: "center",
    alignSelf: "center"
  },
  finishButtonTextStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  }
});

export default FinishButton;
