import Video from "../models/videoSchema.js";
import Comment from "../models/commentSchema.js";
import { logger } from "../config/index.js";

// Get all comments
export const getComments = async (req, res) => {
  try {
    const { userId } = req.body;
    const comments = await Comment.find({ userId });
    res.send(comments);
  } catch (error) {
    logger.info(error);
    res
      .status(404)
      .send("User does not exist or user has not posted any comments");
  }
};

// Post new comment
export const newComment = async (req, res) => {
  try {
    const { videoId, userId, comment } = req.body;
    const video = await Video.findById(videoId);
    if (!video)
      return res.status(400).send("Comment post failed: video does not exist");

    const newComment = await Comment.create({ videoId, userId, comment });
    video.comments.push(newComment);
    video.save();
    res.status(200).send(newComment);
  } catch (error) {
    logger.info(error);
    res.status(400).send("Comment post failed: video does not exist");
  }
};
