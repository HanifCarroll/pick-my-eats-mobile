import axios from "axios";
import {
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_FINISH,
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_FINISH
} from "./types";
import { ENDPOINT } from "../env";
import { shuffleArray } from "../Utils";

export const fetchRestaurants = navigation => async (dispatch, getState) => {
  dispatch({ type: FETCH_RESTAURANTS_START });

  const { query, location } = getState().query;

  const {
    radius,
    resultsLimit,
    openNow,
    price1,
    price2,
    price3,
    price4
  } = getState().settings;

  const prices = [price1, price2, price3, price4];

  let finalPrices = [];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i]) {
      finalPrices.push(i + 1);
    }
  }

  const results = await axios.post(ENDPOINT, {
    term: query,
    location,
    radius: radius * 1600,
    resultsLimit: 50, // Give back the max amount, and we'll filter from there
    openNow,
    price: finalPrices.toString()
  });

  const restaurants = shuffleArray(results.data.businesses).slice(
    0,
    resultsLimit
  );

  dispatch({
    type: FETCH_RESTAURANTS_FINISH,
    payload: restaurants
  });

  navigation.navigate("results");
};

export const fetchReviews = navigation => async (dispatch, getState) => {
  dispatch({ type: FETCH_REVIEWS_START });

  const { id } = getState().restaurants.chosenRestaurant;

  let results = await axios.get(`${ENDPOINT}/reviews/${id}`);

  dispatch({ type: FETCH_REVIEWS_FINISH, payload: results.data });

  navigation.navigate("chosen");
};
