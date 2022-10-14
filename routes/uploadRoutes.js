import express from 'express';
import { uploadBody, welcomeRoute, getreceipt } from '../controllers/upload.js';

const router = express.Router();

router.get('/:email', uploadBody);
router.get('/', welcomeRoute)
router.get('/get/getreceipts', getreceipt)

export default router;