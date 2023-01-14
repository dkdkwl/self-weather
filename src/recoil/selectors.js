import axios from "axios";
import { selector } from "recoil";
import {api} from "./api"

const apiKey = process.env.REACT_APP_API_KEY;

export const getWeatherApi = selector({
    key : 'weatherApi11',
    default : '',
    get : async ({get})=>{
        let weatherApi = await api.get(`/weather?q=Seoul&appid=${apiKey}`);
        let weatherData = weatherApi.data;
        return weatherData
    }
})