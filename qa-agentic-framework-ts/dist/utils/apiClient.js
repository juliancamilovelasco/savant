"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIClient = void 0;
const axios_1 = __importDefault(require("axios"));
class APIClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async sendMessage(message) {
        try {
            const res = await axios_1.default.post(`${this.baseUrl}/agent/respond`, { message }, {
                validateStatus: () => true, // 👈 evita que Axios lance errores
            });
            return {
                status: res.status,
                data: res.data,
            };
        }
        catch (err) {
            return {
                status: 500,
                data: { error: 'Unexpected error' },
            };
        }
    }
}
exports.APIClient = APIClient;
//# sourceMappingURL=apiClient.js.map