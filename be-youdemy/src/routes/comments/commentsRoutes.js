import express from 'express';
import { newComment } from '../../controllers/commentsControllers.js';

const router = express.Router();

router.route('/').post(newComment);

export default router;
