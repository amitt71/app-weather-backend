import Express from 'express';
import ForecastsController from '../routes/Forecasts';
import AutoCompleteController from '../routes/AutoComplete';

export const routesMiddleware = (router: Express.Router) => {
    router.use('/search', [ForecastsController,AutoCompleteController]);
    router.use('/home', (req: Express.Request, res: Express.Response) => {
        res.status(200).json('Server is Ready...');
    });
    router.use('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        res.redirect('/home');
    });
};
