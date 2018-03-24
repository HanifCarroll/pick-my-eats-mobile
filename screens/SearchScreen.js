import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import {
  Card,
  FormLabel,
  FormInput,
  Button,
  Text
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
    this.props.fetchRestaurants(navigation);
    //this.props.navigation.navigate('results');
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
          <FormLabel>Search for...</FormLabel>
          <FormInput
            onChangeText={value =>
              this.props.updateQuery({
                prop: 'query',
                value
              })
            }
            value={this.props.query.query}
          />
        </View>
        <View>
          <FormLabel>Near...</FormLabel>
          <FormInput
            onChangeText={value =>
              this.props.updateQuery({
                prop: 'location',
                value
              })
            }
            value={this.props.query.location}
          />
        </View>
        <Button
          title="SEARCH!"
          onPress={this.onSubmit}
          loading={this.props.restaurants.fetching}
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
