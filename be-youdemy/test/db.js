import mongoose from "mongoose";

const connect = () => mongoose.connect(process.env.TEST_URI);
const disconnect = () => mongoose.connection.close();

export { connect, disconnect };
