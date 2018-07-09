import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DETAILES } from "../../constants/routes";
import "./CityCard.css";

export default class CityCard extends Component {
  render() {
    const { city, list } = this.props.weatherData;
    const { main, weather, wind } = list[0];

    return (
      <div className="city-card shadowed">
        <h3 className="city-card__title">{city.name}</h3>
        <div className="city-card__container">
          <div className="city-card__info">
            <h3 className="city-card__weather">{weather[0].main}</h3>
            <div className="city-card__temp">{Math.round(main.temp)}°C</div>
          </div>
          <div className="city-card__info add-info">
            <div className="add-info__item">
              Pressure: {Math.round(main.pressure)} hPa
            </div>
            <div className="add-info__item">
              Humidity: {Math.round(main.humidity)} %
            </div>
            <div className="add-info__item">
              Wind: {Math.round(wind.deg)} deg {Math.round(wind.speed)} m/s
            </div>
          </div>
        </div>
        <Link className="link-detailes" to={`${DETAILES}${city.id}`}>
          Details
        </Link>
      </div>
    );
  }
}

CityCard.propTypes = {
  weatherData: PropTypes.object.isRequired
};
