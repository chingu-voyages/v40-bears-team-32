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
