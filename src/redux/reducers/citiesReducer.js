import { combineReducers } from "redux";
import {
  FAILURE_FETCH,
  FETCH_CITY,
  SUCCESS_FETCH,
  REMOVE_ERROR
} from "../actions/types";

export default combineReducers({
  loading(state = false, action) {
    switch (action.type) {
      case FETCH_CITY:
        return true;
      case SUCCESS_FETCH:
        return false;
      case FAILURE_FETCH:
        return false;
      default:
        return state;
    }
  },
  cities(state = [], action) {
    switch (action.type) {
      case SUCCESS_FETCH:
        const cityExist = state.findIndex(
          city => city.city.id === action.payload.city.id
        );

        if (cityExist === -1) {
          if (state.length >= 5) {
            return [action.payload, ...state.splice(0, state.length - 1)];
          } else {
            return [action.payload, ...state];
          }
        } else {
          return state.map(
            (city, index) =>
              index === cityExist ? { ...city, ...action.payload } : city
          );
        }

      default:
        return state;
    }
  },
  error(state = null, action) {
    switch (action.type) {
      case SUCCESS_FETCH:
      case REMOVE_ERROR:
        return null;
      case FAILURE_FETCH:
        return action.payload;
      default:
        return state;
    }
  }
});
