import express from 'express';
import * as showBuilder from '../controllers/showController';

const router = express.Router();

router.get('/search', showBuilder.listSearchResults);

router.post('/add', showBuilder.addShow);

export default router;