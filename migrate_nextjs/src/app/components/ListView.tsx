import { FunctionComponent } from "react";
import kelvinToCelcius from '../utils/utils';

type WeatherData = {
    main: {
        temp: number;
        humidity: number;
    }
    name: string;
    wind: {
        speed: number;
        deg: number;
    }
};

type ListViewProps = {
    weather_data: WeatherData;
}

const ListView = ({ weather_data }: ListViewProps) => {
    return (
        <table className="w-full m-5 min-w-fit shadow-lg">
            <thead className="border-slate-300 border-x-3 border-y-2 bg-green-300">
                <tr>
                    <th>{weather_data.name}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="divide-y">
                <tr className="even:bg-gray-100  odd:bg-white">
                    <td className="px-3 py-2">Temperature:</td>
                    <td className="pl-3">{kelvinToCelcius(weather_data.main.temp)} °C</td>
                </tr>
                <tr className="even:bg-gray-100 odd:bg-white">
                    <td className="px-3" >Humidity:</td>
                    <td className="pl-3 py-2" >{weather_data.main.humidity} %</td>
                </tr>
                <tr className="even:bg-gray-100 odd:bg-white">
                    <td className="px-3" >Wind:</td>
                    <td className="pl-3 py-2" >{weather_data.wind.speed} m/s {weather_data.wind.deg}°</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ListView;
