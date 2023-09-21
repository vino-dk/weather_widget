import { FunctionComponent, useEffect, useState } from "react"
import WeatherMetrics from "./WeatherMetrics";
import '../utils.js'
import React from "react";

interface CityProp {
    city: string
}

const WeatherWidget: FunctionComponent<CityProp> = ({ city = "Copenhagen" }) => {

    const [weatherData, setWeatherData] = useState({ city: "", temp: 0, hum: 0, wind: 0, icon: "" });
    const [errorInvalidCity, setErrorInvalidCity] = useState<boolean>(false);

    const fetchIcon = async function (icon_id: string) {
        const icon_res = await fetch(`https://openweathermap.org/img/wn/${icon_id}@2x.png`)
        const icon_blob = await icon_res.blob();
        const icon_URL = URL.createObjectURL(icon_blob)
        return icon_URL 
    };

    async function getCityWeather(city: string) {
        if (city !== "") {
            setErrorInvalidCity(false);
            try {
                const res = await fetch(`http://localhost:3000/weather?city=${city}`)
                if (!res.ok) throw Error('failed to fetch weather data');
                const cityWeather = await res.json();

                const icon_id = cityWeather.weather[0]['icon'];
                const icon_URL = await fetchIcon(icon_id);

                setWeatherData(
                    {
                        city: cityWeather.name,
                        temp: Math.floor(cityWeather.main.temp - 273.15),
                        hum: cityWeather.main.humidity,
                        wind: cityWeather.wind.speed,
                        icon: icon_URL
                    })
            } catch (error) {
                setErrorInvalidCity(true);
                console.log("Could not fetch data from end-point", error);
            }
        }
    }

    // Get city weather on first render
    useEffect(() => {
        getCityWeather(city);
        return () => {
            URL.revokeObjectURL(weatherData.icon);
        }
    }, [])

    return (
        <>
            <WeatherMetrics weatherData={weatherData} getCityWeather={getCityWeather} errorInvalidCity={errorInvalidCity} />
        </>
    )
}

export default WeatherWidget