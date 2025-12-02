import { defineConfig } from '@playwright/test';
 
export default defineConfig({
  testDir: './qa-agentic-framework-ts/tests',
  testMatch: ['**/*.test.ts'],
  timeout: 30000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
});