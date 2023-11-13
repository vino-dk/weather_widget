import { FunctionComponent } from "react";

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
            <tbody>
                <tr>
                    <td>Temperature:</td>
                    <td>{weather_data.main.temp} °C</td>
                </tr>
                <tr>
                    <td>Humidity:</td>
                    <td>{weather_data.main.humidity} %</td>
                </tr>
                <tr>
                    <td>Wind:</td>
                    <td>{weather_data.wind.speed} m/s</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ListView;
