import React, { useState } from "react";
import "./WeatherApp.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./actions/WeatherActions";
import { BsWind } from "react-icons/bs";
import { RiFahrenheitFill, RiCelsiusFill, RiPercentFill } from "react-icons/ri";

const WeatherApp = () => {
  const [city, setCity] = useState("");

  const weather = useSelector((state) => state.weather);

  console.log(weather);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity("");
  };

  return (
    <div className="App">
      <form id="search" onSubmit={handleSubmit}>
        <input
          placeholder="enter the city"
          type="text"
          id="searchInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button id="searchBtn" type="submit">
          Search
        </button>
      </form>

      {weather && (
        <div id="weather-data">
          <h1>
            {weather.name}, <span>{weather.sys.country}</span>
          </h1>
          <p id="description">
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            </span>
            <br />
            <span>{weather.weather[0].description}</span>
          </p>
          <div id="wrapper">
            <p>
              Celcius <br />
              <span>
                {Math.round(weather.main.temp - 273.15)}
                <sup>
                  <RiCelsiusFill id="icon" />
                </sup>
              </span>
            </p>
            <p>
              Fahrenheit <br />
              <span>
                {Math.round((weather.main.temp - 273.15) * 1.8 + 32)}
                <sup>
                  <RiFahrenheitFill id="icon" />
                </sup>
              </span>
            </p>
            <p>
              Wind Speed <br />
              <span>
                {weather.wind.speed}

                <BsWind id="icon" />
              </span>
            </p>
            <p>
              Humidity <br />
              <span>
                {weather.main.humidity}

                <RiPercentFill id="icon" />
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
