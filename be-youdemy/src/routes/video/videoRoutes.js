import express from 'express';
import {
  getAllVideos,
  createVideo,
} from '../../controllers/video/videosController.js';

const router = express.Router();

router.route('/').get(getAllVideos);
router.route('/new').post(createVideo);

export default router;
