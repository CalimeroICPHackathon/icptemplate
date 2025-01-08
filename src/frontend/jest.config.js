module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files using ts-jest
  },
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/__mocks__/**',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.module\\.(css|sass|scss|less)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$': `<rootDir>/__mocks__/fileMock.js`,
  },
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  verbose: true,
  testTimeout: 30000,
};
