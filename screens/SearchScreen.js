import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";

import * as actions from "../actions";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

const SearchButton = props => {
  const {
    finishButtonStyle,
    justifyContentCenter,
    searchButtonTextStyle
  } = styles;

  const { fetching, onPress } = props;

  return (
    <TouchableOpacity style={finishButtonStyle} onPress={onPress}>
      <View style={justifyContentCenter}>
        {fetching && <ActivityIndicator color="white" />}
      </View>
      {!fetching && (
        <View style={justifyContentCenter}>
          <Text style={searchButtonTextStyle}>SEARCH!</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Search",
    headerRight: (
      <Button
        transparent
        onPress={() => {
          navigation.navigate("settings");
        }}
      >
        <Text style={styles.settingsButtonStyle}>Settings</Text>
      </Button>
    ),
    headerStyle: { height: 40, bottom: -10, paddingBottom: 10 }
  });

  onSubmit = () => {
    const { navigation } = this.props;
    Keyboard.dismiss();
    this.props.fetchRestaurants(navigation);
  };

  render() {
    const { textStyle, searchBarStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View>
            <Text style={textStyle}>WHAT ARE YOU LOOKING FOR?</Text>
          </View>
          <View>
            <TextInput
              clearButtonMode="always"
              style={searchBarStyle}
              placeholder="Search for..."
              placeholderTextColor="#86939e"
              underlineColorAndroid="white"
              onChangeText={value =>
                this.props.updateQuery({
                  prop: "query",
                  value
                })
              }
              onClearText={() =>
                this.props.updateQuery({
                  prop: "query",
                  value: ""
                })
              }
              value={this.props.query.query}
            />
          </View>
          <View>
            <TextInput
              style={searchBarStyle}
              placeholder="Near..."
              placeholderTextColor="#86939e"
              underlineColorAndroid="white"
              onChangeText={value =>
                this.props.updateQuery({
                  prop: "location",
                  value
                })
              }
              onClearText={() =>
                this.props.updateQuery({
                  prop: "location",
                  value: ""
                })
              }
              value={this.props.query.location}
            />
          </View>
          <SearchButton
            onPress={this.onSubmit}
            fetching={this.props.restaurants.fetching}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  query: state.query,
  restaurants: state.restaurants
});

const styles = StyleSheet.create({
  settingsButtonStyle: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    marginBottom: 10,
    paddingRight: 15
  },
  textStyle: {
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonStyle: {
    marginTop: 20
  },
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
  searchButtonTextStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  searchBarStyle: {
    backgroundColor: "white",
    color: "#6b6b47",
    height: 60,
    marginTop: 10,
    paddingLeft: 25,
    paddingRight: 15
  }
});

export default connect(mapStateToProps, actions)(SearchScreen);
