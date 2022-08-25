import mongoose from 'mongoose'

const videoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        videoSource: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        user_id: {
            type: Number
        },
    },
    {
    timestamps: true,
  }    
);

const Video = mongoose.model('Video', videoSchema);

export default videoSchema;