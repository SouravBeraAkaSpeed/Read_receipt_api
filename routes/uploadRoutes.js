import express from 'express';
import { uploadBody, welcomeRoute } from '../controllers/upload.js';

const router = express.Router();

router.post('/:timestamp', uploadBody);
router.get('/', welcomeRoute)

export default router;