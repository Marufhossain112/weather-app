import { useState } from "react";
import WeatherForecast from "./components/ForeCast/ForeCast";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [search, setSearch] = useState("Paris");
  return (
    <div>
      <Navbar />
      <Location search={search} setSearch={setSearch} />
      {/* <WeatherForecast /> */}
    </div>
  );
}

export default App;
