import React from "react";
import locationIcon from "../src/assets/location.svg";
import searchIcon from "../src/assets/Search Icon.svg";

const Home = () => {
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
        <div class="search-container">
          <input
            type="text"
            class="search-input"
            placeholder="Search your city here..."
          />
          <div class="search-icon">
            <img src={searchIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
