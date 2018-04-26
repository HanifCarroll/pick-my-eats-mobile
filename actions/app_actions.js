import {
  UPDATE_QUERY,
  UPDATE_SETTINGS,
  CHANGE_SWIPE_INDEX,
  TOGGLE_SELECTED,
  UPDATED_CHOSEN_RESTAURANT,
  START_OVER,
  TURN_OFF_LOCATION
} from "./types";

export const updateQuery = ({ prop, value }) => {
  return {
    type: UPDATE_QUERY,
    payload: { prop, value }
  };
};

export const updateSettings = ({ prop, value }) => {
  return {
    type: UPDATE_SETTINGS,
    payload: { prop, value }
  };
};

export const toggleSelected = restaurant => {
  return { type: TOGGLE_SELECTED, payload: restaurant };
};

export const updateChosenRestaurant = restaurant => {
  return { type: UPDATED_CHOSEN_RESTAURANT, payload: restaurant };
};

export const changeIndex = position => {
  return { type: CHANGE_SWIPE_INDEX, payload: position };
};

export const startOver = () => {
  return { type: START_OVER };
};

export const turnOffLocation = () => {
  return { type: TURN_OFF_LOCATION };
};
