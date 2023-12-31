import React, { useEffect, useState } from "react";
import "./WeatherCard.css";
import calender from "../../assets/calender.svg";
import sunny from "../../assets/sunny.svg";
import rainy from "../../assets/rain-hail.svg";
import snowy from "../../assets/snowy.svg";
import windy from "../../assets/windy.svg";

const WeatherCard = ({ search, sunrise, sunset }) => {
  const [forecastData, setForecastData] = useState([]);
  useEffect(() => {
    // Fetch forecast data and update state
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=40&units=Metric&appid=017f848d544182b554ec443a1c0bbf1d`
        );
        const data = await response.json();
        // console.log(data);
        setForecastData(data.list);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };
    fetchData();
  }, [search]);
  // console.log(forecastData);

  // Function to group forecast data by day
  const groupForecastByDay = () => {
    const groupedData = {};
    forecastData &&
      forecastData?.forEach((item) => {
        const date = item.dt_txt.split(" ")[0]; // Extract date from dt_txt
        if (!groupedData[date]) {
          groupedData[date] = [];
        }
        groupedData[date].push(item);
      });
    return groupedData;
  };

  if (!forecastData) {
    return (
      <div
        className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div className="weather-card-container">
      <div className="calender-container">
        <span>Select Date:</span>
        <div className="calender">
          <img src={calender} alt="" />
          <span>06 Dec 2023</span>
        </div>
        <div className="weather-details-title">
          <span>High Temperature</span>
          <span>Low Temperature</span>
          <span>Humidity</span>
          <span>Sunrise Time</span>
          <span>Sunset Time</span>
        </div>
      </div>
      <div className="weather-cart-main">
        {forecastData.length > 0 &&
          Object.entries(groupForecastByDay())
            .slice(0, 5)
            .map(([date, hourlyData]) => {
              const dailyData = hourlyData[0];
              // Conditionally set icons based on weather condition
              let weatherIcon;
              switch (dailyData.weather[0].icon) {
                case "01d":
                case "01n":
                  weatherIcon = sunny;
                  break;
                case "02d":
                case "02n":
                  weatherIcon = rainy;
                  break;
                case "03d":
                case "03n":
                  weatherIcon = snowy;
                  break;
                case "04d":
                case "04n":
                  weatherIcon = snowy;
                  break;
                case "09d":
                case "09n":
                  weatherIcon = rainy;
                  break;
                case "10d":
                case "10n":
                  weatherIcon = rainy;
                  break;
                case "13d":
                case "13n":
                  weatherIcon = snowy;
                  break;
                case "50d":
                case "50n":
                  weatherIcon = windy;
                  break;
                default:
                  // Set a default icon in case the condition is not matched
                  weatherIcon = sunny;
              }

              const maxConvertCelsiusToFahrenheit = (celsius) => {
                return (celsius * 9) / 5 + 32;
              };
              const maxFahrenheit = maxConvertCelsiusToFahrenheit(
                dailyData.main.temp_max
              );

              const minConvertCelsiusToFahrenheit = (celsius) => {
                return (celsius * 9) / 5 + 32;
              };
              const minFahrenheit = minConvertCelsiusToFahrenheit(
                dailyData.main.temp_min
              );

              const options = {
                day: "numeric",
                month: "short",
                year: "numeric",
              };

              const formattedDate = new Date(
                dailyData.dt_txt
              ).toLocaleDateString("en-US", options);
              const adjustedFormattedDate = formattedDate.replace(",", "");
              // console.log("dataa", dailyData);
              return (
                <div key={date} className="card-parent">
                  <div className="date">{adjustedFormattedDate}</div>
                  <div className="main-card-body">
                    <div className="weather-condition">
                      <img src={weatherIcon} alt="" />
                      <span>{dailyData.weather[0].main}</span>
                    </div>
                    <div className="weather-details">
                      <span>
                        {dailyData.main.temp_max}°C / {maxFahrenheit.toFixed(2)}
                        °F
                      </span>
                      <span>
                        {dailyData.main.temp_min}°C / {minFahrenheit.toFixed(2)}
                        °F
                      </span>
                      <span> {dailyData.main.humidity}%</span>
                      <span>{sunrise}</span>
                      <span>{sunset}</span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default WeatherCard;
