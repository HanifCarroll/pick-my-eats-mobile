import axios from 'axios';
import {
  UPDATE_QUERY,
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_FINISH
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
