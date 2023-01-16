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

  let [getCity,setGetCity] = useRecoilState(cityState);
  console.log(getCity)
  

  return (
    <div className="input-group">
        <div className='inputArea'>
          <input type="search" placeholder="도시 이름 입력"
          onChange={(e)=>{ setSearchTerm(e.target.value.toLowerCase()); }}/>  
          <button>검색</button>
        </div>
        <div className='outArea'>
          {searched.map((item,i) => ( <div key={i}>{item}</div> ))}
        </div>
    </div>
  )
}

export default SearchBox