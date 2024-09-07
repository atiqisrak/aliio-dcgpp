// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    // Use ts-jest to handle TypeScript files
    "^.+\\.(ts|tsx)$": "ts-jest",
    // Use babel-jest to handle JavaScript files with modern syntax
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    // Handle module aliases (if any)
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  transformIgnorePatterns: [
    // Ensure that Jest doesn't ignore these folders (if needed)
    "node_modules/(?!(@babel/runtime|other-package)/)",
  ],
};

// Export the config
module.exports = createJestConfig(customJestConfig);
