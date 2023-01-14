import React from 'react'
import { useRecoilValue } from 'recoil';
import { getWeatherApi } from '../recoil/selectors'

const WeatherBox = () => {
  const weatherInfo = useRecoilValue(getWeatherApi);
  
  return (
    <div className='weatherBox'>
        <h4>{weatherInfo.name}</h4>
        <p>{weatherInfo.main.temp}℃</p>
        <p>{weatherInfo.weather[0].description}</p>
    </div>
  )
}

export default WeatherBox