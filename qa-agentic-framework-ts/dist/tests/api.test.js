"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiClient_js_1 = require("../src/utils/apiClient.js");
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
const client = new apiClient_js_1.APIClient('http://localhost:5000'); //API client pointing to mock server
test('Valid response', () => __awaiter(void 0, void 0, void 0, function* () {
    const start = Date.now();
    const res = yield client.sendMessage('Julian_1');
    const duration = Date.now() - start;
    expect(res.status).toBe(200); // Check status code 200
    expect(duration).toBeLessThan(500); // Check response time under 500ms
    expect(ajv.validate(schema, res.data)).toBe(true); // Validate response schema
}));
test('Invalid payload', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.sendMessage('');
    expect(res.status).toBe(400);
}));
//# sourceMappingURL=api.test.js.map