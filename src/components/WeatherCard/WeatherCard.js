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

      <div className="dropdown__cards">
        <div className="dropdown__card-list">
          <li
            className="dropdown__card dropdown__card-weather"
            style={{ background: cardColors.weather }}
          >
            <p className="dropdown__card-text">Weather</p>
            <p className="dropdown__card-value">{currentWeather}</p>
          </li>
          <li
            className="dropdown__card dropdown__card-temperature"
            style={{ background: cardColors.temperature }}
          >
            <p className="dropdown__card-text">Temperature</p>
            <p className="dropdown__card-value">{currentTemperature}</p>
          </li>
          <li
            className="dropdown__card dropdown__card-wind"
            style={{ background: cardColors.wind }}
          >
            <p className="dropdown__card-text">Wind</p>
            <p className="dropdown__card-value">{currentWind}</p>
          </li>
          <li
            className="dropdown__card dropdown__card-visibility"
            style={{ background: cardColors.visibility }}
          >
            <p className="dropdown__card-text">Visibility</p>
            <p className="dropdown__card-value">{currentVisibility}</p>
          </li>
          <li
            className="dropdown__card dropdown__card-gusts"
            style={{ background: cardColors.gusts }}
          >
            <p className="dropdown__card-text">Gusts</p>
            <p className="dropdown__card-value">{currentGust}</p>
          </li>
          <li
            className="dropdown__card dropdown__card-humidity"
            style={{ background: cardColors.humidity }}
          >
            <p className="dropdown__card-text">Humidity</p>
            <p className="dropdown__card-value">{currentHumidity}</p>
          </li>
        </div>
      </div>
    </section>
  );
}
