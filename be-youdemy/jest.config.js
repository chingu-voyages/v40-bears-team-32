export default {
  testEnvironment: "node",
  globalSetup: "./test/globalSetup.js",
  globalTeardown: "./test/globalTeardown.js",
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {},
};
