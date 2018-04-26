import { Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "search" })]
});

export const headerText = (length, index) => {
  return length - index === 1 ? "Card Remaining" : "Cards Remaining";
};

// Turn prices from [true, true, false, true] to [1, 2, 4] for yelp API
export const makeFinalPrices = pricesArray => {
  let finalPrices = [];

  for (let i = 0; i < pricesArray.length; i++) {
    if (pricesArray[i]) {
      finalPrices.push(i + 1);
    }
  }
  return finalPrices;
};
