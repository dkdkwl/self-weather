import { selector } from "recoil";
import {api} from "./api"
import { cityState } from "./atom";

const apiKey = process.env.REACT_APP_API_KEY;
export const getWeatherApi = selector({
    key : 'weatherApi',
    default : '',
    get : async ({get})=>{
        let cityName = get(cityState);
        try {
            let weatherApi = await api.get(`/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            let weatherData = await weatherApi.data;
            return weatherData
          }
          catch (error) {
            if(cityName === ''){
                alert("도시 이름을 입력해주세요")
            }else{
                alert("도시 이름을 정확하게 작성해주세요")
            }
            let weatherApi = await api.get(`/weather?q=Seoul&appid=${apiKey}&units=metric`)
            let weatherData = await weatherApi.data;
            console.log(weatherApi)
            return weatherData
          }  
    }
}) 