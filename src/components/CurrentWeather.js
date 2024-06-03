// src/components/CurrentWeather.js
import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../services/weatherService';

const CurrentWeather = ({ city }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await getCurrentWeather(city);
                setWeather(data);
            } catch (error) {
                console.error('Error fetching current weather:', error);
            }
        };

        fetchWeather();
    }, [city]);

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Current Weather in {weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default CurrentWeather;
