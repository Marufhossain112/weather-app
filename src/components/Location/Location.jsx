import React, { useState } from "react";
import locationIcon from "../../assets/location.svg";
import searchIcon from "../../assets/Search Icon.svg";
import "./Location.css";
import WeatherCard from "../WeatherCart/WeatherCard";
const Location = () => {
  const api_key = "017f848d544182b554ec443a1c0bbf1d";
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = async () => {
    if (searchInput === "") {
      return 0;
    }
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${api_key}`;
    const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=${api_key}`;
    const response = await fetch(url);
    const forecastResponse = await fetch(forecastUrl);
    const data = await response.json();
    const forecastData = await forecastResponse.json();
    // console.log("data", data);
    // console.log("forcastData", forecastData);
    setSearchInput("");
  };
  return (
    <div className="main-body">
      <div className="location-search-container">
        <div className="location-container flex flex-col gap-1">
          <div className="flex gap-2">
            <img src={locationIcon} alt="" />
            <span className="location-name">Agra, Uttar Pradesh</span>
          </div>
          <div>
            <span className="location-address">27°10'36'' N & 78°0'29'' E</span>
          </div>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search your city here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="search-icon" onClick={() => handleSearch()}>
            <img src={searchIcon} alt="" />
          </div>
        </div>
      </div>
      <WeatherCard />
    </div>
  );
};

export default Location;
