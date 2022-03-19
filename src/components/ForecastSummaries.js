import PropTypes from "prop-types";

import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <section className="ForecastSummaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          icon={forecast.icon}
          temperature={forecast.temperature}
          description={forecast.description}
        />
      ))}
    </section>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ForecastSummaries;
