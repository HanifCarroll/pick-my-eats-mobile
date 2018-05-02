import React, { Component } from "react";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import { Container, Content, Button } from "native-base";
import { connect } from "react-redux";

import SearchBar from "../components/SearchBar";
import LocationSearchBar from "../components/LocationSearchBar";
import SearchButtons from "../components/SearchButtons";
import * as actions from "../actions";

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

  onChangeText = (prop, value) =>
    this.props.updateQuery({
      prop,
      value
    });

  onClearText = prop =>
    this.props.updateQuery({
      prop,
      value: ""
    });

  render() {
    const { textStyle } = styles;

    return (
      <Container>
        <Content>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View>
              <View>
                <Text style={textStyle}>WHAT ARE YOU LOOKING FOR?</Text>
              </View>

              <SearchBar
                placeholder="Search for..."
                value={this.props.query.query}
                onChangeText={value => this.onChangeText("query", value)}
                onClearText={() => this.onClearText("query")}
              />
              <LocationSearchBar
                placeholder="Near..."
                value={this.props.query.location}
                onChangeText={value => this.onChangeText("location", value)}
                onClearText={() => this.onClearText("location")}
                gps={this.props.query.gpsEnabled}
              />

              <SearchButtons
                onSubmit={this.onSubmit}
                fetching={this.props.restaurants.fetching}
                query={this.props.query.query}
                location={this.props.query.location}
                updateQuery={this.props.updateQuery}
              />
            </View>
          </TouchableWithoutFeedback>
        </Content>
      </Container>
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
  }
});

export default connect(mapStateToProps, actions)(SearchScreen);
