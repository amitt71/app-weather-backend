import redis from 'redis';
import { DAY_IN_SECONDS } from '../../types/const';
import { getAsync } from './index';
import { REDIS_PORT } from '../config/config';
import { CityForecast, ICityToKey } from '../../types/forecasts';

const dbRef: redis.RedisClient = redis.createClient(REDIS_PORT);

export const setCity = (cityForecast: CityForecast) => {
    dbRef.setex(cityForecast.cityKey, DAY_IN_SECONDS, JSON.stringify(cityForecast));
};

export const getCity = async (cityKey: string) => {
    const stringifyCityForecast = await getAsync(cityKey);
    const cityForecast: CityForecast = JSON.parse(stringifyCityForecast);
    return cityForecast;
};


export const setSuggestions =  (str:string,suggestions : ICityToKey[]) => {
    dbRef.setex(str, DAY_IN_SECONDS, JSON.stringify(suggestions));
}

export const getSuggestions = async (str: string) => {
    const stringifySuggestion = await getAsync(str);
    const suggestions : ICityToKey[] = JSON.parse(stringifySuggestion);
    return suggestions;
};