import { useEffect, useState } from "react";
import LocationAccess from "./components/location-access";
import { getWeather } from "./lib/api";

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (locationData) {
      getWeather(locationData?.latitude, locationData?.longitude).then((data) =>
        setWeatherData(data)
      );
    }
  }, [locationData]);

  const buttonBottom = () => {
    window.Telegram.WebApp.MainButton.text = "Developed by Asqarbek";
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.onClick(() => {
      window.Telegram.WebApp.openTelegramLink("https://t.me/asqarb3k");
    });
  };

  return locationData === null ? (
    <LocationAccess setLocationData={setLocationData} />
  ) : (
    weatherData && (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center justify-center p-6 bg-[#192728] shadow-md rounded-xl border-2 border-white/10">
            <h2 className="text-xl font-bold text-center mb-4">
              Weather in {weatherData.name}, {weatherData.sys.country}
            </h2>
            <div className="flex items-center justify-center mb-4">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt="Weather Icon"
                className="w-20 h-20"
              />
            </div>

            <div>
              <p className="text-4xl font-bold">{weatherData.main.temp}°C</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-600">
                {weatherData.weather[0].main},{" "}
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>
        </div>

        {buttonBottom()}
      </>
    )
  );
};

export default App;
