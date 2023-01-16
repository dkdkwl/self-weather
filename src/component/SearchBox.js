import React,{useState} from 'react';
import { countryList } from '../recoil/country';
import { cityState } from '../recoil/atom';
import { useRecoilState } from 'recoil';

const SearchBox = () => {
  const countryData = countryList ;
  const [searchTerm, setSearchTerm] = useState("");
  const searched = countryData.filter((item) =>
    item.toLowerCase().includes(searchTerm)
  );
  const [getCity,setGetCity] = useRecoilState(cityState);
  const searchStart = ()=>{
    setGetCity(document.querySelector('.cityInput').value)
  }
  const enterKey = (e)=>{
    console.log(e)
    if(e.code === "Enter" || e.code === "NumpadEnter"){
      searchStart()
    }
    if(e.code === "Escape"){
      document.querySelector('.cityInput').value = '';
    }
  }
  const countryClick = (e) => {
    setGetCity(e.target.textContent);
    document.querySelector('.cityInput').value = e.target.textContent;

  }

  return (
    <div className="input-group">
        <div className='inputArea'>
          <input className='cityInput' type="search"
          onKeyUp={(e)=>{ enterKey(e) }}
          onChange={(e)=>{ setSearchTerm(e.target.value.toLowerCase()) }}/>  
          <button onClick={searchStart} >검색</button>
        </div>
        <div className='outArea'>
          {searched.map((item,i) => ( <div className='outAreaItem' onClick={(e)=>{
            countryClick(e);
          }} key={i}>{item}</div> ))}
        </div>
    </div>
  )
}

export default SearchBox