module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/',
    '^@components/(.*)$': '<rootDir>/src/components/',
    '^@screens/(.*)$': '<rootDir>/src/screens/',
    '^@services/(.*)$': '<rootDir>/src/services/',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/',
    '^@utils/(.*)$': '<rootDir>/src/utils/',
    '^@types/(.*)$': '<rootDir>/src/types/',
    '^@config/(.*)$': '<rootDir>/src/config/',
  },
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
  ],
};
