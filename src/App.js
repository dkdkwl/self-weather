import { Suspense } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import SearchBox from './component/SearchBox'
 

function App() {
  return (
    <div className="App">
       <Suspense fallback={<div>Loading...</div>}>
        <SearchBox></SearchBox>        
        <WeatherBox></WeatherBox>
        <WeatherButton></WeatherButton>
       </Suspense>
    </div>
  );
}

export default App;
