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
    <article className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        <p className="forecast-summary__content forecast-summary__content--date">
          {moment(date).format("ddd Do MMM")}
        </p>
      </div>

      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon
          name="owm"
          iconId={icon}
          className="forecast-summary__content forecast-summary__content--icon"
        />
      </div>

      <div className="forecast-summary__temperature">
        <p className="forecast-summary__content forecast-summary__content--temperature">
          {temperature.max} &deg;C
        </p>
      </div>

      <div className="forecast-summary__description">
        <p className="forecast-summary__content forecast-summary__content--description">
          {description}
        </p>
      </div>

      <div className="forecast-summary__more-details">
        <button
          type="button"
          className="forecast-summary__button"
          data-date={date}
          onClick={handleForecastSelect}
        >
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
