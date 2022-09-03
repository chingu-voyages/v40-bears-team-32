import Video from "../../models/videoSchema.js";
import { logger } from "../../config/index.js";

// All videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    logger.info(error.message);
    res.status(500).send("Error" + error);
  }
};

// Create Video
export const createVideo = async (req, res) => {
  try {
    const { title, thumbnail, description, url, comments, userId } = req.body;

    const video = await Video.create({
      title,
      thumbnail,
      description,
      url,
      comments,
      userId,
    });

    res.json(video);
  } catch (error) {
    logger.info(error.message);
    res.status(500).send("Server error");
  }
};
