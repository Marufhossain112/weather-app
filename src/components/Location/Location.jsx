import React, { useEffect, useState } from "react";
import locationIcon from "../../assets/location.svg";
import searchIcon from "../../assets/Search Icon.svg";
import "./Location.css";
import WeatherCard from "../WeatherCart/WeatherCard";
const Location = ({ search, setSearch }) => {
  const [cityDetails, setCityDetails] = useState([]);
  const [convertedLatitude, setConvertedLatitude] = useState("");
  const [convertedLongitude, setConvertedLongitude] = useState("");
  const [convertedSunrise, setConvertedSunrise] = useState("");
  const [convertedSunset, setConvertedSunset] = useState("");
  const api_key = "017f848d544182b554ec443a1c0bbf1d";

  const convertToDMS = (decimalDegrees) => {
    const degrees = Math.floor(decimalDegrees);
    const minutesDecimal = (decimalDegrees - degrees) * 60;
    const minutes = Math.floor(minutesDecimal);
    const seconds = (minutesDecimal - minutes) * 60;
    return `${degrees}°${minutes}'${seconds.toFixed(2)}"`;
  };
  const formatTimeToAMPM = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format hours to 12-hour format
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    // Add leading zero to minutes if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Determine if it's AM or PM
    const period = hours < 12 ? "AM" : "PM";

    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  useEffect(() => {
    // Fetch forecast data and update state
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${api_key}`
        );
        const data = await response.json();
        setCityDetails(data);

        const latitude = data?.city?.coord?.lat;
        if (latitude) {
          const resultLatitude = convertToDMS(latitude);
          // console.log({ result });
          setConvertedLatitude(resultLatitude);
        }
        const longitude = data?.city?.coord?.lon;
        if (longitude) {
          const resultLongitude = convertToDMS(longitude);
          setConvertedLongitude(resultLongitude);
        }
        const sunrise = data?.city?.sunrise;
        if (sunrise) {
          const resultSunrise = formatTimeToAMPM(sunrise);
          setConvertedSunrise(resultSunrise);
        }
        const sunset = data?.city?.sunset;
        if (sunset) {
          const resultSunset = formatTimeToAMPM(sunset);
          setConvertedSunset(resultSunset);
        }
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchData();
  }, [search]);

  console.log({ cityDetails });

  return (
    <div className="main-body">
      <div className="location-search-container">
        <div className="location-container flex flex-col gap-1">
          <div className="flex gap-2">
            <img src={locationIcon} alt="" />
            <span className="location-name">
              {cityDetails?.city?.name}, {cityDetails?.city?.country}
            </span>
          </div>
          <div>
            <span className="location-address">
              {convertedLatitude} N & {convertedLongitude} E
            </span>
          </div>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search your city here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-icon">
            <img src={searchIcon} alt="" />
          </div>
        </div>
      </div>
      <WeatherCard
        setSearch={setSearch}
        search={search}
        sunrise={convertedSunrise}
        sunset={convertedSunset}
      />
    </div>
  );
};

export default Location;
