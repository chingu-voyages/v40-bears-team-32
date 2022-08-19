// src: https://nodkz.github.io/mongodb-memory-server/docs/guides/integration-examples/test-runners/
export default async function globalTeardown() {
  const instance = global.__MONGOD__;
  await instance.stop();
}
