import axios from "axios";
import {
  UPDATE_QUERY,
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_FINISH,
  TOGGLE_SELECTED,
  UPDATED_CHOSEN_RESTAURANT,
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_FINISH
} from "./types";
import { ENDPOINT } from "../env";

export const updateQuery = ({ prop, value }) => {
  return {
    type: UPDATE_QUERY,
    payload: { prop, value }
  };
};

export const fetchRestaurants = navigation => async (dispatch, getState) => {
  dispatch({ type: FETCH_RESTAURANTS_START });

  const {
    query,
    location,
    radius,
    resultsLimit,
    openNow,
    price1,
    price2,
    price3,
    price4
  } = getState().query;

  const prices = [price1, price2, price3, price4];

  let finalPrices = [];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i]) {
      finalPrices.push(i + 1);
    }
  }

  let results = await axios.post(ENDPOINT, {
    term: query,
    location,
    radius: radius * 1600,
    resultsLimit,
    openNow,
    price: finalPrices.toString()
  });

  dispatch({
    type: FETCH_RESTAURANTS_FINISH,
    payload: results.data.businesses
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

export const toggleSelected = restaurant => {
  return { type: TOGGLE_SELECTED, payload: restaurant };
};

export const updateChosenRestaurant = restaurant => {
  return { type: UPDATED_CHOSEN_RESTAURANT, payload: restaurant };
};
