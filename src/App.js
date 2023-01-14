import { Suspense } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';


function App() {
  return (
    <div className="App">
       <Suspense fallback={<div>Loading...</div>}>
        <WeatherBox></WeatherBox>
        <WeatherButton></WeatherButton>
       </Suspense>
    </div>
  );
}

export default App;
