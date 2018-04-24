import { UPDATE_SETTINGS } from "../actions/types";

const INITIAL_STATE = {
  radius: 15,
  resultsLimit: 1,
  openNow: false,
  price1: true,
  price2: true,
  price3: true,
  price4: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    default:
      return state;
  }
};
