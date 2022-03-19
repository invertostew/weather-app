import PropTypes from "prop-types";

import "../styles/LocationDetails.css";

function LocationDetails({ city, country }) {
  return (
    <section className="location-details">
      <h1 className="location-details__heading">{`${city}, ${country}`}</h1>
    </section>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
