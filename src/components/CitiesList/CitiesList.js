import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CitiesList.css";

export default class CitiesList extends Component {
  render() {
    const { currentTab, cities } = this.props;
    return (
      <div className="cities-list">
        {cities.map((item, index) => (
          <div
            className={`city-item ${index === currentTab ? "active" : ""}`}
            key={item.city.id}
            onClick={() => this.props.changeCity(index)}
          >
            {item.city.name}
          </div>
        ))}
      </div>
    );
  }
}

CitiesList.propTypes = {
  currentTab: PropTypes.number.isRequired,
  cities: PropTypes.array.isRequired
};
