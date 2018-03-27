import React, { Component } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
  Button,
  Text,
  SearchBar
} from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
    headerTitleStyle: { textAlign: 'center', flex: 1 }
  };

  state = {
    query: '',
    location: ''
  };

  onSubmit = () => {
    const { navigation } = this.props;
    Keyboard.dismiss();
    this.props.fetchRestaurants(navigation);
  };

  render() {
    const { textStyle } = styles;

    return (
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
            containerStyle={{ backgroundColor: 'white' }}
            inputStyle={{ backgroundColor: 'white' }}
            placeholder="Search for..."
            onChangeText={value =>
              this.props.updateQuery({
                prop: 'query',
                value
              })
            }
            onClearText={() =>
              this.props.updateQuery({
                prop: 'query',
                value: ''
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
            containerStyle={{ backgroundColor: 'white', marginTop: 20 }}
            inputStyle={{ backgroundColor: 'white' }}
            placeholder="Near..."
            onChangeText={value =>
              this.props.updateQuery({
                prop: 'location',
                value
              })
            }
            onClearText={() =>
              this.props.updateQuery({
                prop: 'location',
                value: ''
              })
            }
            value={this.props.query.location}
          />
        </View>
        <Button
          title="SEARCH!"
          backgroundColor="#99b6e5"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.onSubmit}
          loading={this.props.restaurants.fetching}
          disabled={!this.props.query.query || !this.props.query.location}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  query: state.query,
  restaurants: state.restaurants
});

const styles = {
  textStyle: {
    textAlign: 'center'
  }
};

export default connect(mapStateToProps, actions)(SearchScreen);
