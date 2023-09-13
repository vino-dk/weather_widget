import './App.css'
import WeatherWidget from './components/WeatherWidget'

function App() {
  return (
    <>
      <h1>Weather in Denmark</h1>
      <div className='App'>
        <WeatherWidget city="Copenhagen" />
        <WeatherWidget city="Odense" />
        <WeatherWidget city="Århus" />
        <WeatherWidget city="Faaborg" />
      </div>
    </>
  )
}

export default App
