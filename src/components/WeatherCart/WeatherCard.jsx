import React from "react";
import "./WeatherCard.css";
import sunny from "../../assets/sunny.svg";
import calender from "../../assets/calender.svg";
const WeatherCard = () => {
  return (
    <div className="weather-card-container">
      <div>
        <div className="calender-container">
          <span>Select Date:</span>
          <div className="calender">
            <img src={calender} alt="" />
            <span>20 Jan 2023</span>
          </div>
          <div className="weather-details-title">
            <span>High Temperature</span>
            <span>Low Temperature</span>
            <span>Humidity</span>
            <span>Sunrise Time</span>
            <span>Sunset Time</span>
          </div>
        </div>
      </div>
      <div className="card-parent">
        <div className="date">20 Jan 2023</div>
        <div className="main-card-body">
          <div className="weather-condition">
            <img src={sunny} alt="" />
            <span>Sunny</span>
          </div>
          <div className="weather-details">
            <span>23°C / 63°F</span>
            <span>17°C / 43°F</span>
            <span>76%</span>
            <span>06:21 AM</span>
            <span>05:93 PM</span>
          </div>
        </div>
      </div>
      <div className="card-parent">
        <div className="date">20 Jan 2023</div>
        <div className="main-card-body">
          <div className="weather-condition">
            <img src={sunny} alt="" />
            <span>Sunny</span>
          </div>
          <div className="weather-details">
            <span>23°C / 63°F</span>
            <span>17°C / 43°F</span>
            <span>76%</span>
            <span>06:21 AM</span>
            <span>05:93 PM</span>
          </div>
        </div>
      </div>
      <div className="card-parent">
        <div className="date">20 Jan 2023</div>
        <div className="main-card-body">
          <div className="weather-condition">
            <img src={sunny} alt="" />
            <span>Sunny</span>
          </div>
          <div className="weather-details">
            <span>23°C / 63°F</span>
            <span>17°C / 43°F</span>
            <span>76%</span>
            <span>06:21 AM</span>
            <span>05:93 PM</span>
          </div>
        </div>
      </div>
      <div className="card-parent">
        <div className="date">20 Jan 2023</div>
        <div className="main-card-body">
          <div className="weather-condition">
            <img src={sunny} alt="" />
            <span>Sunny</span>
          </div>
          <div className="weather-details">
            <span>23°C / 63°F</span>
            <span>17°C / 43°F</span>
            <span>76%</span>
            <span>06:21 AM</span>
            <span>05:93 PM</span>
          </div>
        </div>
      </div>
      <div className="card-parent">
        <div className="date">20 Jan 2023</div>
        <div className="main-card-body">
          <div className="weather-condition">
            <img src={sunny} alt="" />
            <span>Sunny</span>
          </div>
          <div className="weather-details">
            <span>23°C / 63°F</span>
            <span>17°C / 43°F</span>
            <span>76%</span>
            <span>06:21 AM</span>
            <span>05:93 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
