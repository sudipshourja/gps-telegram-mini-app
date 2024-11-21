export const getWeather = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`
  );
  const data = await response.json();
  return data;
};
