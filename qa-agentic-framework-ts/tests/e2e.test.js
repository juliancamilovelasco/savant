"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Flujo completo de chat (HTTP)', async ({ page }) => {
    await page.goto('http://localhost:3000/chat.html');
    await page.fill('#user-input', 'hello');
    await page.click('#send-btn');
    // Esperar que aparezca la respuesta del bot
    await (0, test_1.expect)(page.locator('#chat-box .bot')).toContainText(/Hello|Hi|Hey/, { timeout: 10000 });
});
//# sourceMappingURL=e2e.test.js.map