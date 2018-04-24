import { combineReducers } from "redux";
import query from "./queryReducer";
import restaurants from "./restaurantsReducer";
import settings from "./settingsReducer";

export default combineReducers({ query, restaurants, settings });
