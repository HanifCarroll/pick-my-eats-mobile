import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import SearchScreen from "./screens/SearchScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import ChosenRestaurantScreen from "./screens/ChosenRestaurantScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const MainNavigator = StackNavigator({
      search: { screen: SearchScreen },
      settings: { screen: SettingsScreen },
      results: { screen: SearchResultsScreen },
      chosen: { screen: ChosenRestaurantScreen }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
