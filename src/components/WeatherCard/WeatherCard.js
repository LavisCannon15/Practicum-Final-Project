//import React, { useState } from "react";

import "./WeatherCard.css";

export default function WeatherCard({
  currentWeather,
  currentTemperature,
  currentWind,
  currentVisibility,
  currentGust,
  currentHumidity,
  flightStatus,
  cardColors,
}) {
 
  return (
    <section className="weather__card">
      <div
        className="weather__status-reason"
        style={{ background: flightStatus.colorCode }}
      >
        <h1 className="weather__status">{flightStatus.status}</h1>
        <h3 className="weather__reason">{flightStatus.reason}</h3>
      </div>

      <div className="weather__dropdown">
        <ul className="weather__dropdown-list">
          <li
            className="weather__dropdown-card weather__dropdown-card-weather"
            style={{ background: cardColors.weather }}
          >
            <p className="weather__dropdown-card-text">Weather</p>
            <p className="weather__dropdown-card-value">{currentWeather}</p>
          </li>
          <li
            className="weather__dropdown-card weather__dropdown-card-temperature"
            style={{ background: cardColors.temperature }}
          >
            <p className="weather__dropdown-card-text">Temperature</p>
            <p className="weather__dropdown-card-value">{currentTemperature}</p>
          </li>
          <li
            className="weather__dropdown-card weather__dropdown-card-wind"
            style={{ background: cardColors.wind }}
          >
            <p className="weather__dropdown-card-text">Wind</p>
            <p className="weather__dropdown-card-value">{currentWind}</p>
          </li>
          <li
            className="weather__dropdown-card weather__dropdown-card-visibility"
            style={{ background: cardColors.visibility }}
          >
            <p className="weather__dropdown-card-text">Visibility</p>
            <p className="weather__dropdown-card-value">{currentVisibility}</p>
          </li>
          <li
            className="weather__dropdown-card weather__dropdown-card-gusts"
            style={{ background: cardColors.gusts }}
          >
            <p className="weather__dropdown-card-text">Gusts</p>
            <p className="weather__dropdown-card-value">{currentGust}</p>
          </li>
          <li
            className="weather__dropdown-card weather__dropdown-card-humidity"
            style={{ background: cardColors.humidity }}
          >
            <p className="weather__dropdown-card-text">Humidity</p>
            <p className="weather__dropdown-card-value">{currentHumidity}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
