import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
  {
    videoId: {
      driver: mongoose.ObjectId,
    },
    userId: {
      driver: mongoose.ObjectId,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
