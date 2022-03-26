import { useState, useEffect } from "react";

import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import SearchForm from "./SearchForm";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleCitySearch = () => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  };

  const handleForecastSelect = (event) => {
    setSelectedDate(parseInt(event.target.dataset.date, 10));
  };

  useEffect(() => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  }, []);

  return (
    <main className="weather-app">
      <LocationDetails city={location.city} country={location.country} />

      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        handleCitySearch={handleCitySearch}
      />

      <ForecastSummaries
        forecasts={forecasts}
        handleForecastSelect={handleForecastSelect}
      />

      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </main>
  );
}

export default App;
