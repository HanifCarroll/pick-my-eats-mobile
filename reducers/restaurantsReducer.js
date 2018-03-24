import {
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_FINISH
} from '../actions/types';

const INITIAL_STATE = {
  restaurantsResults: [],
  chosenRestaurant: {},
  selectedRestaurants: [],
  reviews: [],
  fetching: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_RESTAURANTS_START:
      return { ...state, fetching: true };
    case FETCH_RESTAURANTS_FINISH:
      return {
        ...state,
        fetching: false,
        restaurantsResults: action.payload
      };
    default:
      return state;
  }
};
