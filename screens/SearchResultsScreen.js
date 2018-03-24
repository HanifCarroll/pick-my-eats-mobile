import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class SearchResultsScreen extends Component {
  static navigationOptions = {
    title: 'Results',
    headerTitleStyle: { textAlign: 'center', flex: 1 }
  };

  render() {
    return (
      <View>
        <Text>
          There are {this.props.restaurants.restaurantsResults.length} results
        </Text>
        <Button
          title="Pick!"
          onPress={() => this.props.navigation.navigate('chosen')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, null)(SearchResultsScreen);
