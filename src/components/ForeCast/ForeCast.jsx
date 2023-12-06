import React, { useState, useEffect } from "react";

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    // Fetch forecast data and update state
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://api.openweathermap.org/data/2.5/forecast?q=Dhaka&cnt=40&appid=017f848d544182b554ec443a1c0bbf1d"
        );
        const data = await response.json();
        setForecastData(data.list);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  // Function to group forecast data by day
  const groupForecastByDay = () => {
    const groupedData = {};
    forecastData.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]; // Extract date from dt_txt
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(item);
    });
    return groupedData;
  };
  //   const result = groupForecastByDay();
  //   console.log({ result });

  // Render daily forecast
  const renderDailyForecast = () => {
    const groupedData = groupForecastByDay();

    return Object.entries(groupedData).map(([date, hourlyData]) => {
      const dailyData = hourlyData[0]; // Take the first item for each day
      return (
        <div key={date} className="card-parent">
          <div className="date">20 Jan 2023</div>
          <div className="main-card-body">
            <div className="weather-condition">
              {/* <img src={sunny} alt="" /> */}
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
      );
    });
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      {/* {renderDailyForecast()} */}
    </div>
  );
};

export default WeatherForecast;
