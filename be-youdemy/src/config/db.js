import mongoose from "mongoose";
import { logger } from "../config/index.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const disconnectDB = async () => await mongoose.connection.close();

export {
  connectDB,
  disconnectDB
};
