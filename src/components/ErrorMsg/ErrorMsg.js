import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ErrorMsg.css";

import { removeError } from "../../redux/actions/citiesActions";

class ErrorMsg extends Component {
  componentWillUpdate(nextProps) {
    if (!this.props.error && nextProps.error) {
      setTimeout(this.props.removeError, 3000);
    }
  }

  render() {
    const { error } = this.props;
    return (
      <div className={`error-msg shadowed ${error ? "active" : ""}`}>
        {this.props.error}
      </div>
    );
  }
}

ErrorMsg.propTypes = {
  error: PropTypes.any,
  removeError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: state.weatherData.error
});

export default connect(
  mapStateToProps,
  { removeError }
)(ErrorMsg);
