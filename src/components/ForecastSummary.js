import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

import "../styles/ForecastSummary.css";

function ForecastSummary({
  date,
  icon,
  temperature,
  description,
  handleForecastSelect,
}) {
  return (
    <article className="forecast-summary">
      <div className="forecast-summary__date">
        <p>{moment(date).format("ddd Do MMM")}</p>
      </div>

      <div className="forecast-summary__icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>

      <div className="forecast-summary__temperature">
        <p>{temperature.max} &deg;C</p>
      </div>

      <div className="forecast-summary__description">
        <p>{description}</p>
      </div>

      <div className="forecast-summary__more-details">
        <button type="button" data-date={date} onClick={handleForecastSelect}>
          More Details
        </button>
      </div>
    </article>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
