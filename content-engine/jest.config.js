module.exports = {
  testEnvironment: "jest-environment-jsdom", // Make sure this line points to the installed module
  //   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
