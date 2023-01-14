import React from 'react'
import { useRecoilValue } from 'recoil';
import { getWeatherApi } from '../recoil/selectors'

const WeatherButton = () => {

  const testdata = useRecoilValue(getWeatherApi);
  console.log(testdata);
  return (
    <ul className='buttonList'>
        <li className='buttonList--item'>서울</li>
        <li className='buttonList--item'>서울</li>
        <li className='buttonList--item'>서울</li>
        <li className='buttonList--item'>서울</li>
    </ul>
  )
}

export default WeatherButton