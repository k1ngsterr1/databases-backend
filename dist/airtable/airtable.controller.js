"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirtableController = void 0;
const common_1 = require("@nestjs/common");
const airtable_service_1 = require("./airtable.service");
let AirtableController = class AirtableController {
    constructor(airtableService) {
        this.airtableService = airtableService;
    }
    async getTables(baseID) {
        if (!baseID) {
            throw new Error('Base ID is required');
        }
        console.log('lol');
        return this.airtableService.getTables(baseID);
    }
};
exports.AirtableController = AirtableController;
__decorate([
    (0, common_1.Get)('tables'),
    __param(0, (0, common_1.Query)('baseID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirtableController.prototype, "getTables", null);
exports.AirtableController = AirtableController = __decorate([
    (0, common_1.Controller)('airtable'),
    __metadata("design:paramtypes", [airtable_service_1.AirtableService])
], AirtableController);
//# sourceMappingURL=airtable.controller.js.map