import { selector } from "recoil";
import {api} from "./api"
import { cityState } from "./atom";

const apiKey = process.env.REACT_APP_API_KEY;
export const getWeatherApi = selector({
    key : 'weatherApi',
    default : '',
    get : async ({get})=>{
        let cityName = get(cityState);
        let weatherApi = await api.get(`/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        let weatherData = await weatherApi.data;
        return weatherData
    }
}) 