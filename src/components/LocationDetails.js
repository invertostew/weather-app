import PropTypes from "prop-types";

import "../styles/LocationDetails.css";

function LocationDetails({ errorMessage, city, country }) {
  return (
    <section className="location-details">
      <h1 className="location-details__heading">
        {errorMessage || `${city}, ${country}`}
      </h1>
    </section>
  );
}

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  errorMessage: PropTypes.string,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
