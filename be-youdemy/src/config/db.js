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

const modelFactory = (name, paths) => {
  const transformer = {
    transform: (doc, result) => {
      result.id = result._id.toString();
      delete result._id;
      delete result.__v;

      // for users
      if (result.password) delete result.password;
    },
  };

  const schema = mongoose.Schema(paths);

  schema.set("toJSON", transformer);
  schema.set("toObject", transformer);
  schema.set("timestamps", true);

  return mongoose.model(name, schema);
};

const extractRequiredAttributes = (model) => model.schema.requiredPaths();

const extractAttributes = (model) => model.schema.paths;

export {
  connectDB,
  disconnectDB,
  modelFactory,
  extractAttributes,
  extractRequiredAttributes,
};
