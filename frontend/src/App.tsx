import './App.css'
import WeatherWidget from './components/WeatherWidget'
import React from 'react'

function App() {
  return (
    <>
      <h1>Weather in Denmark</h1>
      <div className='App justify-center'>
        <WeatherWidget city="Copenhagen" />
        <WeatherWidget city="Odense" />
        <WeatherWidget city="Århus" />
        <WeatherWidget city="Faaborg" />
      </div>
    </>
  )
}

export default App
