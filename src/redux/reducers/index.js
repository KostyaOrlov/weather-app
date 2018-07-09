import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";

export default combineReducers({
  weatherData: citiesReducer
});
