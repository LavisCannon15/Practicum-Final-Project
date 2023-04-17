import React from "react";
import "./Main.css";

import WeatherCard from "../WeatherCard/WeatherCard";
import Map  from "../Map/Map";

export default function Main({
  currentWeather,
  currentTemperature,
  currentWind,
  currentVisibility,
  currentGust,
  currentHumidity,
  flightStatus,
  cardColors,
  location
}) {
  return (
    <main className="main">
      <WeatherCard
        currentWeather={currentWeather}
        currentTemperature={currentTemperature}
        currentWind={currentWind}
        currentVisibility={currentVisibility}
        currentGust={currentGust}
        currentHumidity={currentHumidity}
        flightStatus={flightStatus}
        cardColors={cardColors}
        location={location}
      />
      <Map location={location} />
    </main>
  );
}
