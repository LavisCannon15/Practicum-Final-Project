# Drone Forecast Application

The Drone Forecast Application is a web application that provides drone pilots with weather and other relevant data to help them determine whether it is safe to fly their drone. The application uses the Google Places JavaScript API and Google Maps API to retrieve location data and display a map, and the OpenCageData API to retrieve weather data.


## Features

Location search: Users can search for a location on a map by entering an address or coordinates in the search bar. 

Weather data: The application displays current weather conditions and forecasted weather at the selected location. 

Drone safety forecast: Based on the weather conditions at the selected location, the application provides a forecast on whether it is safe to fly a drone. The forecast takes into account factors such as wind speed, temperature, precipitation, and visibility.

## APIs Used

OpenCageData: Geocoding API used to convert user-entered location information into geographic coordinates.

Google Places JavaScript API: Used to implement the search bar and autocomplete functionality for location search.

Google Maps API: Used to provide a map view of the selected location.

OpenWeatherMap: Provides current weather conditions and 5-day weather forecast data for the selected location.


## Usage
To use the application, simply enter an address or coordinates in the search bar and hit the "Search" button. The application will display current weather conditions and a 5-day forecast for the selected location, as well as recommendations for whether it is safe to fly a drone based on the current weather conditions.