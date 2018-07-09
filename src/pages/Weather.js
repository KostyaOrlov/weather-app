import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCity } from "../redux/actions/citiesAction";
import CitiesList from "../components/CitiesList/CitiesList";
import CityCard from "../components/CityCard/CityCard";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      currentTab: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cities.length !== this.props.cities.length) {
      this.setState({
        currentTab: 0
      });
    }
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSearchWeather = e => {
    e.preventDefault();
    this.props.fetchCity(this.state.inputValue);

    this.setState({
      inputValue: ""
    });
  };

  handleChangeCity = currentTab => {
    this.setState({
      currentTab
    });
  };

  render() {
    const { cities } = this.props;
    const { currentTab } = this.state;

    return (
      <div className="app">
        <h1 className="main-title">Enter city</h1>
        <form className="main-form" onSubmit={this.handleSearchWeather}>
          <input
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <CitiesList
          currentTab={currentTab}
          cities={cities}
          changeCity={this.handleChangeCity}
        />

        {cities.length >= 1 && <CityCard weatherData={cities[currentTab]} />}
      </div>
    );
  }
}

Weather.propTypes = {
  cities: PropTypes.array.isRequired,
  fetchCity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cities: state.weatherData.cities
});

export default connect(
  mapStateToProps,
  { fetchCity }
)(Weather);
