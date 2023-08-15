import { useEffect, useState } from "react"
import SearchBar from "./SeachBar";
import './WeatherWidget.css'

export default function WeatherWidget() {

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
        <div className="WeatherWidget">
            <p>Weather in {weatherData.city}</p>
            <p>Temperature: {weatherData.temp}</p>
            <p>Humidity: {weatherData.hum}</p>
            <p>Wind: {weatherData.wind}</p>
            <SearchBar
                searchPlaceHolder={"cityname"}
                getSearchTerm={getCityWeather} />
        </div>
    )
}