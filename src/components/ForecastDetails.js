import PropTypes from "prop-types";
import moment from "moment";

import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;

  return (
    <section className="forecast-details">
      <article className="forecast-details__date">
        <p>
          <strong>{moment(date).format("ddd Do MMM")}</strong>
        </p>
      </article>

      <article className="forecast-details__temperature">
        <p>Min Temp: {temperature.min} &deg;C</p>
        <p>Max Temp: {temperature.max} &deg;C</p>
      </article>

      <article className="forecast-details__humidity">
        <p>Humidity: {humidity}%</p>
      </article>

      <article className="forecast-details__wind">
        <p>Wind Speed: {wind.speed} mph</p>
        <p>Wind Direction: {wind.direction}</p>
      </article>
    </section>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
