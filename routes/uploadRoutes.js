import express from 'express';
import { uploadBody, welcomeRoute } from '../controllers/upload.js';

const router = express.Router();

router.get('/:email', uploadBody);
router.get('/', welcomeRoute)

export default router;