import React from "react";
import ReactDOM from "react-dom";

import forecast from "./data/forecast.json";

import App from "./components/App";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App location={forecast.location} forecasts={forecast.forecasts} />
  </React.StrictMode>,
  document.querySelector("#root")
);
