import {
  FETCH_RESTAURANTS_START,
  FETCH_RESTAURANTS_FINISH,
  TOGGLE_SELECTED,
  UPDATED_CHOSEN_RESTAURANT,
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_FINISH
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
      return { ...state, fetching: false, restaurantsResults: action.payload };
    case FETCH_REVIEWS_START:
      return { ...state, fetching: true, reviews: [] };
    case FETCH_REVIEWS_FINISH:
      return {
        ...state,
        fetching: false,
        reviews: action.payload,
        selectedRestaurants: []
      };
    case TOGGLE_SELECTED:
      // If the clicked element exists in the array, remove it.
      if (state.selectedRestaurants.includes(action.payload)) {
        return {
          ...state,
          selectedRestaurants: state.selectedRestaurants.filter(
            selected => selected != action.payload
          )
        };
      }
      // If the clicked element does not exist in the array, add it.
      return {
        ...state,
        selectedRestaurants: [...state.selectedRestaurants, action.payload]
      };
    case UPDATED_CHOSEN_RESTAURANT:
      return {
        ...state,
        chosenRestaurant: action.payload,
        selectedRestaurants: []
      };
    default:
      return state;
  }
};
