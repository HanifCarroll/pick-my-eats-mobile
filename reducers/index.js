import { combineReducers } from 'redux';
import query from './queryReducer';
import restaurants from './restaurantsReducer';

export default combineReducers({ query, restaurants });
