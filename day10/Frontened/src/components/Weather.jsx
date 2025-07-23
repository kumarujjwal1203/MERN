import { useState } from "react";
import axios from "axios";
import "./Weather.css"; // Import the CSS file

export default function Weather() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "f88e755f398a8552e99e3c9d0d21cfd9";

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!input) return;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  }

  return (
    <div className="weather-container">
      <form onSubmit={handleFormSubmit} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p className="temp">{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
