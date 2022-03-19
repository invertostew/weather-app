import PropTypes from "prop-types";

import "../styles/ForecastSummary.css";

function ForecastSummary({ date, icon, temperature, description }) {
  return (
    <article className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecast-summary__temperature">
        {temperature.max} &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
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
};

export default ForecastSummary;
