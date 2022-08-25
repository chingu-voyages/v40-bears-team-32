import Video from '../../models/videoSchema'
import { logger } from '../../config/index.js'

// All videos
export const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find() 
        res.json(videos)
    }
    catch(error){
        logger.info(error.message);
        res.status(500).send('Error' + error);
    }
}

// Create Video
export const createVideo = async (req, res) => {
    try { 
        const { title, description, videoSource, comment } = req.body;
    
        const video = await Video.create({
            title,
            description,
            videoSource,
            comment,
        });
    
        const newVideo = {
            "title": video.title,
            "description": video.description,
            "videoSource": video.videoSource,
            "comment": video.comment
        }
    
        res.json(newVideo);
    } 
    catch (error) {
        logger.info(error.message);
        res.status(500).send('Server error');
    }

};
