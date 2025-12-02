import { test, expect } from '@playwright/test';

 
test('Flujo completo de chat (HTTP)', async ({ page }) => {
  await page.goto('http://localhost:3000/chat.html');
 
  await page.fill('#user-input', 'hello');
  await page.click('#send-btn');
 
  // Esperar que aparezca la respuesta del bot
  await expect(page.locator('#chat-box .bot')).toContainText(/Hello|Hi|Hey/, { timeout: 10000 });
});
 