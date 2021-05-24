import express from 'express';
import controller from '../controllers/forecasts';

const router = express.Router();

router.post('/forecasts', controller.setForecast);
router.get('/forecasts', controller.getForecast);
export = router;
