import Video from '../models/videoSchema.js';
import Comment from '../models/commentSchema.js';
import { logger } from '../config/index.js';

// Post new comment
export const newComment = async (req, res) => {
  try {
    const { videoId, userId, comment } = req.body;
    const video = await Video.findById(videoId);
    if (!video)
      return res
        .status(400)
        .send({ error: 'Comment post failed: video does not exist' });

    const newComment = await Comment.create({ videoId, userId, comment });
    video.comments.push(newComment);
    video.save();
    res.status(200).send(newComment);
  } catch (error) {
    logger.info(error);
    res
      .status(400)
      .send({ error: 'Comment post failed: video does not exist' });
  }
};
