export const getForecastWeather = (location, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const getWeatherStatus = (weatherData) => {
  const temperature = weatherData.main.temp;
  const windSpeed = weatherData.wind.speed;
  const windGust = weatherData.wind.gust || windSpeed;
  const visibility = weatherData.visibility / 1000; // convert to km
  //const humidity = weatherData.main.humidity;
  const weatherConditions = weatherData.weather[0].main;

  let status = "N/A";
  let colorCode = "gray";
  let reason = "";

  // Determine the status and color code based on weather conditions
  if (temperature > 104) {
    status = "High temperature";
    colorCode = "red";
    reason = "The temperature is above the recommended limit for safe flying.";
  } else if (windSpeed > 20) {
    status = "High winds";
    colorCode = "red";
    reason = "The wind speed is above the recommended limit for safe flying.";
  } else if (windGust > 20) {
    status = "Gusty conditions";
    colorCode = "red";
    reason =
      "The wind gust speed is above the recommended limit for safe flying.";
  } else if (visibility < 3) {
    status = "Low visibility";
    colorCode = "red";
    reason = "The visibility is below the recommended limit for safe flying.";
  } else if (
    ["Thunderstorm", "Rain", "Snow", "Mist"].includes(weatherConditions)
  ) {
    status = weatherConditions;
    colorCode = "red";
    reason = `The weather condition is ${weatherConditions}.`;
  } else if (temperature < 32) {
    status = "Low temperature";
    colorCode = "orange";
    reason =
      "Temperature is likely to reduce the flight time of the drone and affect the performance of the battery";
  } else if (windSpeed > 10) {
    status = "Moderate winds";
    colorCode = "orange";
    reason =
      "The wind speed is moderate but may affect the stability of the drone.";
  } else if (windGust > 15) {
    status = "Moderate gusts";
    colorCode = "orange";
    reason =
      "The wind gust speed is moderate but may affect the stability of the drone.";
  } else if (visibility < 5) {
    status = "Moderate visibility";
    colorCode = "orange";
    reason =
      "The visibility is moderate and may affect the visibility of the drone.";
  }
   else {
    status = "Good to fly";
    colorCode = "#71da71";
    reason = "The weather conditions are optimal for safe flying.";
  }

  return { status, colorCode, reason };
};


export const getCardColorCode = (weatherData) => {
  const temperature = weatherData.main.temp;
  const windSpeed = weatherData.wind.speed;
  const windGust = weatherData.wind.gust;
  const visibility = weatherData.visibility / 1000 ; // convert to km
  const humidity = weatherData.main.humidity;
  const weatherConditions = weatherData.weather[0].main;

  const colorCodes = {
    temperature: "gray",
    wind: "gray",
    gusts: "gray",
    visibility: "gray",
    humidity: "gray",
  };
  
  if (temperature > 104) {
    colorCodes.temperature = "red";
  } else if (temperature < 32) {
    colorCodes.temperature = "orange";
  } else if (temperature) {
    colorCodes.temperature = "#71da71";
  } else {
    colorCodes.temperature = "gray";
  }
  if (windSpeed > 20) {
    colorCodes.wind = "red";
  } else if (windSpeed > 10) {
    colorCodes.wind = "orange";
  } else if (windSpeed) {
    colorCodes.wind = "#71da71";
  } else {
    colorCodes.wind = "gray";
  }
  if (windGust > 20) {
    colorCodes.gusts = "red";
  } else if (windGust > 15) {
    colorCodes.gusts = "orange";
  } else if (windGust) {
    colorCodes.gusts = "#71da71";
  } else {
    colorCodes.gusts = "gray";
  }

  if (visibility < 3) {
    colorCodes.visibility = "red";
  } else if (visibility < 5) {
    colorCodes.visibility = "orange";
  } else if (visibility) {
    colorCodes.visibility = "#71da71";
  } else {
    colorCodes.visibility = "gray";
  }


  if (humidity > 80) {
    colorCodes.humidity = "red";
  } else if (humidity > 60) {
    colorCodes.humidity = "orange";
  } else if (humidity) {
    colorCodes.humidity = "#71da71";
  } else {
    colorCodes.humidity = "gray";
  }

  if (
    weatherConditions === "Thunderstorm" ||
    weatherConditions === "Drizzle" ||
    weatherConditions === "Rain" ||
    weatherConditions === "Mist"
  ) {
    colorCodes.weatherConditions = "red";
  } else if (weatherConditions === "Snow") {
    colorCodes.weatherConditions = "orange";
  } else if (
    weatherConditions !== "Thunderstorm" &&
    weatherConditions !== "Drizzle" &&
    weatherConditions !== "Rain" &&
    weatherConditions !== "Mist"
  ) {
    colorCodes.weatherConditions = "#71da71";
  } else {
    colorCodes.weatherConditions = "gray";
  }

  console.log(weatherConditions);

  return colorCodes;
};
