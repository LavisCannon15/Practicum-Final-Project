import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import logoImage from "../../images/logo.svg";

import "./Header.css";

export default function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementsByClassName("header__search-input")[0]
    );


    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log("No details available for input: '" + place.name + "'");
        return;
      }

      setSearchTerm(place.formatted_address);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to={"/Practicum-Final-Project"}>
          <img
            src={logoImage}
            alt="Quadcopter Flight Planner"
            className="header__logo"
          />
        </Link>

        <form className="header__search-form" onSubmit={handleSubmit}>
          <input
            required
            className="header__search-input"
            type="text"
            placeholder="Enter address or coordinates"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button className="header__search-button" type="submit">
            Search
          </button>
        </form>

        <Link
          to={"/Practicum-Final-Project/about"}
          className="header__about-link"
        >
          <p className="header__about-us-button">About Us</p>
        </Link>
      </div>
    </header>
  );
}
