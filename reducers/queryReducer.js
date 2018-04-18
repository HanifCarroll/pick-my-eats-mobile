import { UPDATE_QUERY } from "../actions/types";

const INITIAL_STATE = {
  location: "",
  query: "",
  radius: 15,
  resultsLimit: 20,
  openNow: false,
  price1: true,
  price2: true,
  price3: true,
  price4: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      //return { ...state, [action.payload.prop]: [action.payload.value] };
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    default:
      return state;
  }
};
