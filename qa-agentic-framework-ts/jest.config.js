/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm', // soporte ES Modules
  testEnvironment: 'node',
  testMatch: ['**/tests/jest/**/*.test.ts'], // solo tests de Jest
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  verbose: true,
};
