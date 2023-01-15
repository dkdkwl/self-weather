import { useRecoilState } from 'recoil';
import { cityState }from '../recoil/atom'

const WeatherButton = () => {
    let [city,setCity] = useRecoilState(cityState);
  return (
    <ul className='buttonList'>
        <li className='buttonList--item' onClick={()=>{setCity('India')}}>인도</li>
        <li className='buttonList--item' onClick={()=>{setCity('China')}}>중국</li>
        <li className='buttonList--item' onClick={()=>{setCity('france')}}>프랑스</li>
        <li className='buttonList--item' onClick={()=>{setCity('Pakistan')}}>파키스탄</li>
        <li className='buttonList--item' onClick={()=>{setCity('Kazakhstan')}}>카자흐스탄</li>
        <li className='buttonList--item' onClick={()=>{setCity('Uzbekistan')}}>우즈베키스탄</li>
        <li className='buttonList--item' onClick={()=>{setCity('Mexico')}}>멕시코</li>
    </ul>
  )
}

export default WeatherButton