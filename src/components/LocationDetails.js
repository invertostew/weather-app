import PropTypes from "prop-types";

import "../styles/LocationDetails.css";

function LocationDetails({ city, country }) {
  return (
    <section className="LocationDetails">
      <h1 className="LocationDetails__heading">{`${city}, ${country}`}</h1>
    </section>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
