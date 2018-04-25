import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = props => (
  <View>
    <TextInput
      clearButtonMode="always"
      style={styles.searchBarStyle}
      placeholder={props.placeholder}
      placeholderTextColor="#86939e"
      underlineColorAndroid="white"
      onChangeText={props.onChangeText}
      onClearText={props.onClearText}
      value={props.value}
    />
  </View>
);

const styles = StyleSheet.create({
  searchBarStyle: {
    backgroundColor: "white",
    color: "#6b6b47",
    height: 60,
    marginTop: 10,
    paddingLeft: 25,
    paddingRight: 15
  }
});

export default SearchBar;
