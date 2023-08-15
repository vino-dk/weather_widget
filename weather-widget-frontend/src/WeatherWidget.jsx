import { useEffect, useState } from "react"
import SearchBar from "./SeachBar";
import './WeatherWidget.css'
import './utils.js'

export default function WeatherWidget() {

    const [weatherData, setWeatherData] = useState({ city: "", temp: "", hum: "", wind: "" });

    async function getCityWeather(city = 'Copenhagen') {
        const res = await fetch(`http://localhost:3000/weather?city=${city}`)
        const cityWeather = await res.json();
        console.log(cityWeather);
        setWeatherData(
            {
                city: cityWeather.name,
                temp: Math.floor(cityWeather.main.temp - 273.15),
                hum: cityWeather.main.humidity,
                wind: cityWeather.wind.speed
            })
    }

    useEffect(() => {
        getCityWeather();
    }, [])

    return (
        <div className="WeatherWidget">
            <table>
                <thead>
                    <tr>
                        <th>Weather in {weatherData.city}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Temperature:</td>
                        <td>{weatherData.temp} °C</td>
                    </tr>
                    <tr>
                        <td>Humidity:</td>
                        <td>{weatherData.hum} %</td>
                    </tr>
                    <tr>
                        <td>Wind:</td>
                        <td>{weatherData.wind} m/s</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <SearchBar
                                searchPlaceHolder={"cityname"}
                                getSearchTerm={getCityWeather} />
                        </td>
                    </tr>
                </tfoot>
            </table>


        </div>
    )
}