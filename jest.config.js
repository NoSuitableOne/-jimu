const config = {
  verbose: true,
  testEnvironment: "jsdom",
  roots: [
    "<rootDir>/packages/comps"
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  transform: {
    "^.+\\.(ts|tsx|js)$": "./babel-jest.env.js"
  }
};

module.exports = config;
