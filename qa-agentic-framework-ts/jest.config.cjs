// /** @type {import('ts-jest').JestConfigWithTsJest} */
// export default {
//   preset: 'ts-jest/presets/default-esm', // Soporte para ES Modules
//   testEnvironment: 'node',
//   transform: {
//     '^.+\\.ts$': ['ts-jest', { useESM: true }]
//   },
//   extensionsToTreatAsEsm: ['.ts'],
//   globals: {
//     'ts-jest': {
//       useESM: true
//     }
//   },
//   moduleFileExtensions: ['ts', 'js', 'json'],
//   testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
//   verbose: true
// };



/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }]
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  verbose: true
};