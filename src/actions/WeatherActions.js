import axios from "axios";

export const fetchWeather = (city) => (dispatch) => {
  dispatch({
    type: "FETCH_WEATHER_REQUEST",
  });

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53fbaf275f0876b2466a0afdf4911e0f`
    )
    .then((response) => {
      dispatch({
        type: "FETCH_WEATHER_SUCCESS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_WEATHER_FAILURE",
        payload: error.message,
      });
    });
};
