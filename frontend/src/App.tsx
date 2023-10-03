import './App.css'
import WeatherWidget from './components/WeatherWidget'

function App() {
  return (
    <div>
      <h1 className='text-xl text-blue-600 '>Weather in Denmark</h1>
      <div className='App justify-center'>
        <WeatherWidget city="Copenhagen" />
        <WeatherWidget city="Odense" />
        <WeatherWidget city="Århus" />
        <WeatherWidget city="Faaborg" />
      </div>
    </div>
  )
}

export default App
