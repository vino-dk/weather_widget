import { error } from "console";
import ListView from '../app/components/ListView'

const API_KEY: string = "56f7e7fb66556ac07611d68de8a4a6c3";

async function getData(city = 'Copenhagen') {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${API_KEY}`);
    if (!res.ok) throw Error('failed to fetch weather data');
    const weather_data = await res.json();
    console.log(weather_data);
    return weather_data;
  }
  catch (error) {
    console.log(`Could not fetch data from end-point, ${error}`);
  }
}

export default async function Home() {
  const weather_data = await getData();
  return (
    <div className="flex min-h-screen flex-col items-center p-20">
      <h1 className='text-xl text-slate-600 drop-shadow-md'>Weather in Denmark</h1>
      <div className="grid">
        <ListView weather_data={weather_data}/>
      </div>
    </div>
  )
}
