import {
  FETCH_CITY,
  SUCCESS_FETCH,
  FAILURE_FETCH,
  REMOVE_ERROR
} from "./types";
import { APIKEY } from "../../config";

export const fetchCity = cityName => dispatch => {
  dispatch({
    type: FETCH_CITY
  });
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&cnt=5&APPID=${APIKEY}`
  )
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then(data => {
      dispatch({
        type: SUCCESS_FETCH,
        payload: data
      });
    })
    .catch(err => {
      return dispatch({
        type: FAILURE_FETCH,
        payload: err.message
      });
    });
};

export const removeError = () => dispatch => {
  return dispatch({
    type: REMOVE_ERROR
  });
};
