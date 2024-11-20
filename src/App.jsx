import { useState } from "react";
import LocationAccess from "./components/location-access";

const App = () => {
  const [locationData, setLocationData] = useState(null);

  console.log(locationData);

  return locationData === null ? (
    <LocationAccess setLocationData={setLocationData} />
  ) : (
    <div>App</div>
  );
};

export default App;
