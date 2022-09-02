import express from 'express';
import {
  getComments,
  newComment,
} from '../../controllers/commentsControllers.js';

const router = express.Router();

router.route('/').get(getComments).post(newComment);

export default router;
