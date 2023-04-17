import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";

import {
  getForecastWeather,
  getWeatherStatus,
  getCardColorCode,
} from "../../utils/weatherApi";

import { getGeocodeData } from "../../utils/geocodeApi";

import { GeoAPIkey, WeatherAPIkey } from "../../utils/apiKeys";

import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState("N/A");
  const [currentTemperature, setCurrentTemperature] = useState("N/A");
  const [currentWind, setCurrentWind] = useState("N/A");
  const [currentVisibility, setCurrentVisibility] = useState("N/A");
  const [currentGust, setCurrentGust] = useState("N/A");
  const [currentHumidity, setCurrentHumidity] = useState("N/A");

  const [cardColors, setCardColors] = useState({
    weather: "gray",
    temperature: "gray",
    wind: "gray",
    visibility: "gray",
    gusts: "gray",
    humidity: "gray",
  });

  const [flightStatus, setFlightStatus] = useState({
    status: "N/A",
    colorCode: "gray",
    reason: "N/A",
  });


  const [location, setLocation] = useState({
    latitude: "0",
    longitude: "0",
  });

  const handleSearch = (searchTerm) => {
    fetchGeoData(searchTerm)
    fetchWeatherData(location)
  };

  const fetchGeoData = (location) => {
    
    getGeocodeData(location, GeoAPIkey)
      .then((data) => {
        const lat = data.results[0].geometry.lat;
        const lng = data.results[0].geometry.lng;

        setLocation({
          latitude: lat,
          longitude: lng,
        });

      })
      .catch((error) => console.log(error));
  };

  const fetchWeatherData = (location) => {

    getForecastWeather(location, WeatherAPIkey)
      .then((data) => {
        setCurrentWeather(data.weather[0].main || "N/A");
        setCurrentTemperature(data.main.temp || "N/A");
        setCurrentWind(data.wind.speed || "N/A");
        setCurrentVisibility(data.visibility || "N/A");
        setCurrentGust(data.wind.gust || "N/A");
        setCurrentHumidity(data.main.humidity || "N/A");

        //Sets color and status for weathercard
        const { status, colorCode, reason } = getWeatherStatus(data);
        setFlightStatus({ status, colorCode, reason });

        //Sets color for dropdown cards
        const {
          temperature: temperatureColorCode,
          wind: windColorCode,
          gusts: gustColorCode,
          visibility: visibilityColorCode,
          humidity: humidityColorCode,
          weather: weatherColorCode,
        } = getCardColorCode(data);

        setCardColors({
          temperature: temperatureColorCode,
          wind: windColorCode,
          gusts: gustColorCode,
          visibility: visibilityColorCode,
          humidity: humidityColorCode,
          weather: weatherColorCode,
        });
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="app">
      <Router>
        <Header handleSearch={handleSearch} />
        <Routes>
          <Route
            path="/Practicum-Final-Project"
            element={
              <Main
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
            }
          />
          <Route path="/Practicum-Final-Project/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
