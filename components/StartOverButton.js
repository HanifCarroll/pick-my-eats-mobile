import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";

import * as actions from "../actions";

class StartOverButton extends Component {
  onPress = () => {
    this.props.startOver();
    this.props.navigate();
  };

  render() {
    const { buttonTextStyle } = styles;

    return (
      <Button transparent onPress={this.onPress}>
        <Text style={buttonTextStyle}>Start Over</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    marginBottom: 10,
    paddingRight: 15
  }
});

export default connect(null, actions)(StartOverButton);
