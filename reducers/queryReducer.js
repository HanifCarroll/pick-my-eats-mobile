import { UPDATE_QUERY, START_OVER } from "../actions/types";

const INITIAL_STATE = {
  location: "",
  query: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    case START_OVER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
