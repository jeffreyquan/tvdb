import express from 'express';
import * as showBuilder from '../controllers/showController';

const router = express.Router();

router.get('/search', showBuilder.listSearchResults)

export default router;