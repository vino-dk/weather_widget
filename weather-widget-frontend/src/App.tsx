import './App.css'
import WeatherWidget from './components/WeatherWidget'

function App() {
  return (
    <>
      <WeatherWidget city="Copenhagen"/>
      <WeatherWidget city="Odense"/>
    </>
  )
}

export default App
