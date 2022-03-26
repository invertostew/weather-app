import axios from "axios";

const getForecast = (setSelectedDate, setForecasts, setLocation) => {
  const ENDPOINT = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  axios
    .get(ENDPOINT)
    .then((res) => {
      setSelectedDate(res.data.forecasts[0].date);
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getForecast;
