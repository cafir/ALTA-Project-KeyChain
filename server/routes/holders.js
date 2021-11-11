import express from 'express';
import { getHolders, createHolder } from '../controllers/holders.js';

const router = express.Router();

//read
router.get('/', getHolders);
//create
router.post('/', createHolder);

export default router;