import { useEffect, useState } from "react"
import WeatherMetrics from "./WeatherMetrics";
import '../utils.js'

export default function WeatherWidget() {

    const [weatherData, setWeatherData] = useState({ city: "", temp: 0, hum: 0, wind: 0 });
    const [errorInvalidCity, setErrorInvalidCity] = useState<boolean>(false);

    async function getCityWeather(city: string = 'Copenhagen') {
        if (city !== "") {
            setErrorInvalidCity(false);
            try {
                const res = await fetch(`http://localhost:3000/weather?city=${city}`)
                const cityWeather = await res.json();
                setWeatherData(
                    {
                        city: cityWeather.name,
                        temp: Math.floor(cityWeather.main.temp - 273.15),
                        hum: cityWeather.main.humidity,
                        wind: cityWeather.wind.speed
                    })
            } catch (error) {
                setErrorInvalidCity(true);
                console.log("Could not fetch data from end-point", error);
            }
        }
    }

    useEffect(() => {
        getCityWeather();
    }, [])

    return (
        <>
            <WeatherMetrics weatherData={weatherData} getCityWeather={getCityWeather} errorInvalidCity={errorInvalidCity} />
        </>
    )
}