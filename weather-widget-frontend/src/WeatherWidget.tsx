import { useEffect, useState } from "react"
import SearchBar from "./SeachBar";
import './WeatherWidget.css'
import './utils.js'

interface WeatherData {
    city: string;
    temp: number;
    hum: number;
    wind: number;
}

export default function WeatherWidget() {

    const [weatherData, setWeatherData] = useState<WeatherData>({ city: "", temp: 0, hum: 0, wind: 0 });
    const [error, setError] = useState<Boolean>(false);

    async function getCityWeather(city: string = 'Copenhagen') {
        setError(false);
        try{
            const res = await fetch(`http://localhost:3000/weather?city=${city}`)
            const cityWeather = await res.json();
            setWeatherData(
                {
                    city: cityWeather.name,
                    temp: Math.floor(cityWeather.main.temp - 273.15),
                    hum: cityWeather.main.humidity,
                    wind: cityWeather.wind.speed
                })
        } catch(error){
            setError(true);
            console.log("Could not fetch data from end-point", error);
        }
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
                        <td colSpan={2}>
                            <SearchBar
                                searchPlaceHolder={"cityname"}
                                getSearchTerm={getCityWeather} />
                        </td>
                    </tr>
                </tfoot>
            </table>
            {error && <p>Please enter a valid city</p>}
        </div>
    )
}