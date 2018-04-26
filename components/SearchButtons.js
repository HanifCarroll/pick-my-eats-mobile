import React from "react";
import { View, StyleSheet } from "react-native";
import SearchButton from "./SearchButton";
import GeolocateButton from "./GeolocateButton";

const SearchButtons = props => {
  const { onSubmit, fetching, query, location, updateQuery } = props;
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <SearchButton
        onPress={onSubmit}
        fetching={fetching}
        query={query}
        location={location}
      />
      <GeolocateButton updateQuery={updateQuery} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center"
  }
});

export default SearchButtons;
