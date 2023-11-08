const API_KEY: string = "56f7e7fb66556ac07611d68de8a4a6c3";

async function getData(){
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${API_KEY}`)
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-20">
      <h1 className='text-xl text-slate-600 drop-shadow-md'>Weather in Denmark</h1>
      
    </div>
  )
}
