import React, { Component } from "react";
import { Button } from "react-native";
import { connect } from "react-redux";

import * as actions from "../actions";

class StartOverButton extends Component {
  onPress = () => {
    this.props.startOver();
    this.props.navigate();
  };

  render() {
    return <Button title="Start Over" color="#99b6e5" onPress={this.onPress} />;
  }
}

export default connect(null, actions)(StartOverButton);
