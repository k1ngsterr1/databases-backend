"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirtableService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AirtableService = class AirtableService {
    constructor() {
        this.apiKey = process.env.AIRTABLE_API_KEY;
        this.baseURL = 'https://api.airtable.com/v0';
    }
    async getTables(baseID) {
        try {
            const response = await axios_1.default.get(`https://api.airtable.com/v0/meta/bases/${baseID}/tables`, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
            });
            return response.data.tables.map((table) => table.name);
        }
        catch (error) {
            throw new common_1.HttpException(`Failed to fetch tables: ${error.response?.data?.error?.message || error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AirtableService = AirtableService;
exports.AirtableService = AirtableService = __decorate([
    (0, common_1.Injectable)()
], AirtableService);
//# sourceMappingURL=airtable.service.js.map