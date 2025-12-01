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
exports.APIClient = void 0;
const axios_1 = __importDefault(require("axios"));
class APIClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.post(`${this.baseUrl}/agent/respond`, { message }, {
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
        });
    }
}
exports.APIClient = APIClient;
//# sourceMappingURL=apiClient.js.map