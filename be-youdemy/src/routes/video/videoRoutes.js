import express from 'express';
import { getAllVideos, createVideo } from '../../controllers/video/videosController.js';

const router = express.Router();

router.route('/video').get(getAllVideos);
router.route('/video').post(createVideo);

export default router;