import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import store from "./redux/store";
import Weather from "./pages/Weather";
import DetailedWeather from "./pages/DetailedWeather";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/" component={Weather} exact />
              <Route path="/details/:id" component={DetailedWeather} exact />
            </Switch>
            <ErrorMsg />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
