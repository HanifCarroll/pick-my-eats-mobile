import { UPDATE_QUERY, START_OVER } from "../actions/types";

const INITIAL_STATE = {
  location: "Tampa",
  query: "Tacos",
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
    case UPDATE_QUERY:
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    case START_OVER:
      return { ...state, location: "", query: "" };
    default:
      return state;
  }
};
