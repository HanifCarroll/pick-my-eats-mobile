import { UPDATE_QUERY } from '../actions/types';

const INITIAL_STATE = { query: '', location: '' };

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
