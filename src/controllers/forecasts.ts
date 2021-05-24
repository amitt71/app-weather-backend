import { NextFunction, Request, Response } from 'express';
import { CityForecast } from '../../types/forecasts';
import { getCity, setCity } from '../redis/wrapper';
const setForecast = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cityForecast: CityForecast = JSON.parse(req.body.city);
        const forecasts = await setCity(cityForecast);

        return res.status(200).json({
            forecasts: `${forecasts}`
        });
        next();
    } catch (error) {
        console.error(error);
    }
};

const getForecast = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cityKey = req.query.cityKey?.toString() ?? '';
        const cityForecast = await getCity(cityKey);

        return res.status(200).json({ cityForecast });
        next();
    } catch (error) {
        console.error(error);
    }
};

export default {
    setForecast,
    getForecast
};
