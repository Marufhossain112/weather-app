import { useState } from "react";
import WeatherForecast from "./components/ForeCast/ForeCast";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import CoordinateConverter from "./components/Coordinate/Coordinate";

function App() {
  const [search, setSearch] = useState("Paris");
  return (
    <div>
      <Navbar />
      <Location search={search} setSearch={setSearch} />
      {/* <CoordinateConverter /> */}
      {/* <WeatherForecast /> */}
    </div>
  );
}

export default App;
