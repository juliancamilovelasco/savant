"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiClient_1 = require("../src/utils/apiClient");
const ajv_1 = __importDefault(require("ajv"));
const ajv = new ajv_1.default();
const schema = {
    type: 'object',
    properties: {
        intent: { type: 'string' },
        response: { type: 'string' }
    },
    required: ['intent', 'response']
};
const client = new apiClient_1.APIClient('http://localhost:5000'); //API client pointing to mock server
test('Valid response', async () => {
    const start = Date.now();
    const res = await client.sendMessage('Julian_1');
    const duration = Date.now() - start;
    expect(res.status).toBe(200); // Check status code 200
    expect(duration).toBeLessThan(500); // Check response time under 500ms
    expect(ajv.validate(schema, res.data)).toBe(true); // Validate response schema
});
test('Invalid payload', async () => {
    const res = await client.sendMessage('');
    expect(res.status).toBe(400);
});
//# sourceMappingURL=api.test.js.map