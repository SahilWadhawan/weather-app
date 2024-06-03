// src/components/WeatherForecast.js
import React, { useEffect, useState } from 'react';
import { getWeatherForecast } from '../services/weatherService';

const WeatherForecast = ({ city }) => {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const data = await getWeatherForecast(city);
                setForecast(data);
            } catch (error) {
                console.error('Error fetching weather forecast:', error);
            }
        };

        fetchForecast();
    }, [city]);

    if (!forecast) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Weather Forecast for {city}</h2>
            <ul>
                {forecast.list.map((item) => (
                    <li key={item.dt}>
                        <p>{new Date(item.dt * 1000).toLocaleString()}</p>
                        <p>Temperature: {item.main.temp}°C</p>
                        <p>Weather: {item.weather[0].description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherForecast;
