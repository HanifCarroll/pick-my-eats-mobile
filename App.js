import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Font, AppLoading } from "expo";
import { Root } from "native-base";

import reducers from "./reducers";
import SearchScreen from "./screens/SearchScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import ChosenRestaurantScreen from "./screens/ChosenRestaurantScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default class App extends React.Component {
  state = { loading: true };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const MainNavigator = StackNavigator({
      search: { screen: SearchScreen },
      settings: { screen: SettingsScreen },
      results: { screen: SearchResultsScreen },
      chosen: { screen: ChosenRestaurantScreen }
    });

    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
