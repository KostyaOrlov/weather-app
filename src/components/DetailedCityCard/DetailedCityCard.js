import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default class DetailedCityCard extends Component {
  render() {
    const {
      weatherData: { main, dt, weather, wind }
    } = this.props;
    const date = moment.unix(dt).format("D MMMM");
    const time = moment.unix(dt).format("HH:mm");
    return (
      <div className="city-card shadowed">
        <div className="city-card__container">
          <h3 className="city-card__date">{date}</h3>
          <h3 className="city-card__time">{time} UTC</h3>
        </div>
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
      </div>
    );
  }
}

DetailedCityCard.propTypes = {
  weatherData: PropTypes.object.isRequired
};
