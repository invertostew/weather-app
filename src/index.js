import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import forecast from "./data/forecast.json";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App location={forecast.location} forecasts={forecast.forecasts} />
  </React.StrictMode>,
  document.querySelector("#root")
);
