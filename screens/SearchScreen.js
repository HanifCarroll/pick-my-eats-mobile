import React, { Component } from "react";
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  BackHandler
} from "react-native";
import { Button, Text, SearchBar } from "react-native-elements";
import { connect } from "react-redux";

import * as actions from "../actions";

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Search",
    headerRight: (
      <Button
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
        title="Settings"
        onPress={() => {
          navigation.navigate("settings");
        }}
      />
    ),
    headerStyle: { height: 40, bottom: -10, paddingBottom: 10 }
  });

  componentWillMount() {}

  onSubmit = () => {
    const { navigation } = this.props;
    Keyboard.dismiss();
    this.props.fetchRestaurants(navigation);
    BackHandler.removeEventListener("backPress", () => true);
  };

  render() {
    const {
      textStyle,
      buttonStyle,
      searchBarInputStyle,
      searchBarContainerStyle1,
      searchBarContainerStyle2
    } = styles;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View>
            <Text h2 style={textStyle}>
              WHAT ARE YOU IN THE MOOD FOR?
            </Text>
          </View>
          <View>
            <SearchBar
              lightTheme
              round
              noIcon
              containerStyle={searchBarContainerStyle1}
              inputStyle={searchBarInputStyle}
              placeholder="Search for..."
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
            <SearchBar
              lightTheme
              round
              noIcon
              containerStyle={searchBarContainerStyle2}
              inputStyle={searchBarInputStyle}
              placeholder="Near..."
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
          <Button
            title="SEARCH!"
            backgroundColor="#99b6e5"
            buttonStyle={buttonStyle}
            onPress={this.onSubmit}
            loading={this.props.restaurants.fetching}
            disabled={!this.props.query.query || !this.props.query.location}
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
  textStyle: {
    textAlign: "center"
  },
  buttonStyle: {
    marginTop: 20
  },
  searchBarContainerStyle1: {
    backgroundColor: "white"
  },
  searchBarContainerStyle2: {
    backgroundColor: "white",
    marginTop: 20
  },
  searchBarInputStyle: {
    backgroundColor: "white"
  }
});

export default connect(mapStateToProps, actions)(SearchScreen);
