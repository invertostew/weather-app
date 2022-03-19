import PropTypes from "prop-types";

function ForecastSummary({ date, icon, temperature, description }) {
  return (
    <article className="ForecastSummary">
      <div className="ForecastSummary__date">{date}</div>
      <div className="ForecastSummary__icon">{icon}</div>
      <div className="ForecastSummary__temperature">
        {temperature.max} &deg;C
      </div>
      <div className="ForecastSummary__description">{description}</div>
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
