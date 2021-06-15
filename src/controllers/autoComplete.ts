import { NextFunction, Request, Response } from 'express';
import { CityForecast, ICityToKey } from '../../types/forecasts';
import { setSuggestions,getSuggestions } from '../redis/wrapper';

const setAutoComplete = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const suggestions : ICityToKey[] = JSON.parse(req.body.suggestions);
        const str = req.body.str;
        const response = await setSuggestions(str,suggestions);

        return res.status(200).json({
            response: `${response}`
        });
        next();
    } catch (error) {
        console.error(error);
    }
};

const getAutoComplete = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const str = req.query.str?.toString() ?? '';
        const autoComplete = await getSuggestions(str);

        return res.status(200).json({ autoComplete });
        next();
    } catch (error) {
        console.error(error);
    }
};

export default {
    setAutoComplete,
    getAutoComplete
};
