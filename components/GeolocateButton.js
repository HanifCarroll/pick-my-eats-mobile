import React, { Component } from "react";
import { Location, Permissions } from "expo";
import { connect } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Icon } from "native-base";
import * as actions from "../actions";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

class GeolocateButton extends Component {
  state = { pressed: false };

  handlePress = async () => {
    if (!this.state.pressed) {
      const success = await this.getLocation();
      if (success) return this.setState({ pressed: true });
    }

    this.props.turnOffLocation();
    return this.setState({ pressed: false });
  };

  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      return false;
    }

    await this.props.fetchLocation();

    return true;
  };

  renderIcon = () => {
    const { iconStyle, enabledIconStyle } = styles;
    if (this.props.query.fetchingLocation) {
      return <ActivityIndicator color="black" />;
    }
    return (
      <Icon
        type="MaterialIcons"
        name="gps-fixed"
        style={this.state.pressed ? [iconStyle, enabledIconStyle] : iconStyle}
      />
    );
  };

  render() {
    const { buttonStyle } = styles;

    return (
      <TouchableOpacity style={buttonStyle} onPress={this.handlePress}>
        <View>{this.renderIcon()}</View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "white",
    elevation: 5,
    height: SCREEN_HEIGHT * 0.07,
    width: SCREEN_WIDTH * 0.15,
    alignItems: "center",
    justifyContent: "center"
  },
  iconStyle: {
    fontSize: 24
  },
  enabledIconStyle: {
    color: "#99b6e5"
  }
});

const mapStateToProps = state => ({
  query: state.query
});

export default connect(mapStateToProps, actions)(GeolocateButton);
