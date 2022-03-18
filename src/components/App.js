import PropTypes from "prop-types";

import LocationDetails from "./LocationDetails";

import "../styles/App.css";

function App({ location }) {
  const { city, country } = location;

  return (
    <main className="App">
      <LocationDetails city={city} country={country} />
    </main>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
