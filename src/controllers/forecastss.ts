import express from 'express';
import controller from '../controllers/forecasts';

const router = express.Router();

router.get('/forecasts/:cityKey', controller.setForecast);

export = router;
