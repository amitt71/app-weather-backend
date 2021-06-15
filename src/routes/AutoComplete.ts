import express from 'express';
import controller from '../controllers/autoComplete';

const router = express.Router();

router.post('/autoComplete', controller.setAutoComplete);
router.get('/autoComplete', controller.getAutoComplete);
export = router;
