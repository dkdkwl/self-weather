import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cityState }from '../recoil/atom'

const WeatherButton = () => {
    let [city,setCity] = useRecoilState(cityState);
    
    useEffect(()=>{
    },[city])
    const weatherCity= ()=>{
      setCity('tokyo')
    }
  return (
    <ul className='buttonList'>
        <li className='buttonList--item'onClick={weatherCity('Seoul')}>서울</li>
        <li className='buttonList--item'onClick={weatherCity('tokyo')}>서울</li>
    </ul>
  )
}

export default WeatherButton