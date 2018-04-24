import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { Font, AppLoading } from "expo";
import { Root } from "native-base";

import reducers from "./reducers";
import SearchScreen from "./screens/SearchScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import ChosenRestaurantScreen from "./screens/ChosenRestaurantScreen";
import SettingsScreen from "./screens/SettingsScreen";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

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
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
