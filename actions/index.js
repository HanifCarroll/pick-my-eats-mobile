import axios from 'axios';
import {
  UPDATE_QUERY,
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_FINISH,
  TOGGLE_SELECTED,
  UPDATED_CHOSEN_RESTAURANT,
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_FINISH
} from './types';

export const updateQuery = ({ prop, value }) => {
  return {
    type: UPDATE_QUERY,
    payload: { prop, value }
  };
};

export const fetchRestaurants = navigation => async (dispatch, getState) => {
  dispatch({ type: FETCH_RESTAURANTS_START });

  const { query, location } = getState().query;

  let results = await axios.post('https://pick-my-eats.herokuapp.com/api', {
    term: query,
    location
  });

  dispatch({
    type: FETCH_RESTAURANTS_FINISH,
    payload: results.data.businesses
  });

  navigation.navigate('results');
};

export const fetchReviews = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_REVIEWS_START });

  const { id } = getState().restaurants.chosenRestaurant;

  let results = await axios.get(
    `https://pick-my-eats.herokuapp.com/api/reviews/${id}`
  );

  dispatch({ type: FETCH_REVIEWS_FINISH, payload: results.data });
};

export const toggleSelected = restaurant => {
  return { type: TOGGLE_SELECTED, payload: restaurant };
};

export const updateChosenRestaurant = restaurant => {
  return { type: UPDATED_CHOSEN_RESTAURANT, payload: restaurant };
};
