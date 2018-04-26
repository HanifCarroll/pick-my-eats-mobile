import {
  UPDATE_QUERY,
  START_OVER,
  FETCH_LOCATION_START,
  FETCH_LOCATION_FINISH,
  TURN_OFF_LOCATION
} from "../actions/types";

const INITIAL_STATE = {
  location: "",
  query: "",
  latitude: null,
  longitude: null,
  fetchingLocation: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    case FETCH_LOCATION_START:
      return { ...state, fetchingLocation: true };
    case FETCH_LOCATION_FINISH:
      return {
        ...state,
        fetchingLocation: false,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        location: "Current Location"
      };
    case TURN_OFF_LOCATION:
      return {
        ...state,
        latitude: null,
        longitude: null,
        location: ""
      };
    case START_OVER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
