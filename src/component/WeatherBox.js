import React from 'react'
import { useRecoilValue } from 'recoil';
import { getWeatherApi } from '../recoil/selectors'
import { weatherKR } from "../recoil/weatherKR"


const WeatherBox = () => {
  const weatherInfo = useRecoilValue(getWeatherApi);
  const weatherText = weatherKR;
  return (
    <div className='weatherBox'>
        <h4>{weatherInfo.name}</h4>
        <p>{weatherInfo.main.temp}℃</p>
        <p>{weatherText[weatherInfo.weather[0].id]}</p>
    </div>
  )
}

export default WeatherBox