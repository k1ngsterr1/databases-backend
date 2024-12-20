"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasesModule = void 0;
const common_1 = require("@nestjs/common");
const shared_module_1 = require("../shared/shared.module");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const databases_service_1 = require("./databases.service");
const databases_controller_1 = require("./databases.controller");
let DatabasesModule = class DatabasesModule {
};
exports.DatabasesModule = DatabasesModule;
exports.DatabasesModule = DatabasesModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule],
        controllers: [databases_controller_1.DatabasesController],
        providers: [databases_service_1.DatabasesService, prisma_service_1.PrismaService],
    })
], DatabasesModule);
//# sourceMappingURL=databases.module.js.map