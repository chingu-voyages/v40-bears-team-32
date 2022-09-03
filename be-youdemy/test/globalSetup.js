import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// src: https://nodkz.github.io/mongodb-memory-server/docs/guides/integration-examples/test-runners/
export default async function globalSetup() {
  const instance = await MongoMemoryServer.create();
  const uri = instance.getUri();
  // prevents creating global mongodb instance for each tests
  global.__MONGOD__ = instance;
  process.env.TEST_URI = uri.slice(0, uri.lastIndexOf("/"));

  // clears database contents before test starts
  await mongoose.connect(`${process.env.TEST_URI}/test-db`);
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
}
