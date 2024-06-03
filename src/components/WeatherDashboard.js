// src/components/WeatherDashboard.js
import React, { useState } from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

const WeatherDashboard = () => {
    const [city, setCity] = useState('London');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div>
            <h1>Weather Dashboard</h1>
            <input
                type="text"
                value={city}
                onChange={handleCityChange}
                placeholder="Enter city name"
            />
            <CurrentWeather city={city} />
            <WeatherForecast city={city} />
        </div>
    );
};

export default WeatherDashboard;
