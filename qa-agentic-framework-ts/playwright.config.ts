import { defineConfig } from '@playwright/test';
 
export default defineConfig({
  testDir: './tests/platwright',
  testMatch: ['**/*.test.ts'],
  timeout: 30000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
});