import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import DetailedCityCard from "../components/DetailedCityCard/DetailedCityCard";

class DetailedWeather extends Component {
  constructor(props) {
    super(props);

    this.selectedCity = props.cities.find(
      city => city.city.id === Number(props.match.params.id)
    );
  }
  render() {
    return this.selectedCity ? (
      <div className="App">
        <Link to="/" className="btn previous">
          Back
        </Link>
        <h3 className="main-title">{this.selectedCity.city.name}</h3>
        <div className="details-container">
          {this.selectedCity.list.map(item => (
            <DetailedCityCard weatherData={item} key={item.dt} />
          ))}
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

DetailedWeather.propTypes = {
  cities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cities: state.weatherData.cities
});

export default connect(mapStateToProps)(DetailedWeather);
