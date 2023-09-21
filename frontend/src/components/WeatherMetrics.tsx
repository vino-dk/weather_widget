import './WeatherMetrics.css'
import SearchBar from "./SeachBar";
import React from 'react';

type WeatherData = {
    city: string;
    temp: number;
    hum: number,
    wind: number,
    icon: any
}

type WeatherMetricsProps = {
    weatherData: WeatherData;
    getCityWeather(city: string): void;
    errorInvalidCity: boolean;
  }
  
const WeatherMetrics:React.FC<WeatherMetricsProps> = ({weatherData, getCityWeather, errorInvalidCity}) => {
    return(
        <div className="WeatherMetrics">
            <table>
                <thead>
                    <tr>
                        <th>Weather in {weatherData.city}</th>
                        <th><img src={weatherData.icon} alt="weather"/></th>
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
            {errorInvalidCity && <p>Please enter a valid city</p>}
        </div>
    )
}

export default WeatherMetrics