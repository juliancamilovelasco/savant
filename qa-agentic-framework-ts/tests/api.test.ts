
import { APIClient } from '../src/utils/apiClient';
import Ajv from 'ajv';
 
const ajv = new Ajv();
const schema = {
  type: 'object',
  properties: {
    intent: { type: 'string' },
    response: { type: 'string' }
  },
  required: ['intent', 'response']
};
 
const client = new APIClient('http://localhost:5000'); //API client pointing to mock server
 
test('Valid response', async () => {
  const start = Date.now();
  const res = await client.sendMessage('Savant');
  const duration = Date.now() - start;
  expect(res.status).toBe(200);  // Check status code 200
  expect(duration).toBeLessThan(500); // Check response time under 500ms
  expect(ajv.validate(schema, res.data)).toBe(true); // Validate response schema
});
 
test('Invalid payload', async () => {
  const res = await client.sendMessage('');
  expect(res.status).toBe(400);
});