import React,{useState} from 'react';
import { countryList } from '../recoil/country';

const SearchBox = () => {
  const test = countryList ;
  console.log(test);
  const [searchTerm, setSearchTerm] = useState("");
  

  return (
    <div className="input-group">
        <input type="search" placeholder="도시 이름 입력"
        onChange={ (e)=>{ setSearchTerm(e.target.value); }}/>
        <button></button>
{}
    </div>
  )
}

export default SearchBox