import { useEffect, useState } from "react"
import './WeatherModule.css'

export default function WeatherModule() {

    const [weatherData, setWeatherData] = useState({ city: "", temp: "", hum: "", wind: "" });

    async function getCityWeather(city = 'Copenhagen') {
        const res = await fetch(`http://localhost:3000/weather?city=${city}`)
        const cityWeather = await res.json();
        setWeatherData(
            {
                city: cityWeather.name,
                temp: cityWeather.main.temp,
                hum: cityWeather.main.humidity,
                wind: cityWeather.wind.speed
            })
    }

    useEffect(() => {
        getCityWeather();
    }, [])

    return (
        <div className="WeatherModule">
            <p>Weather in {weatherData.city}</p>
            <p>Temperature: {weatherData.temp}</p>
            <p>Humidity: {weatherData.hum}</p>
            <p>Wind: {weatherData.wind}</p>
        </div>
    )
}