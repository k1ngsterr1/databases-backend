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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/prisma/prisma.service");
let DatabasesService = class DatabasesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDatabaseDto) {
        const database = await this.prisma.database.create({
            data: {
                databaseID: createDatabaseDto.databaseID,
                name: createDatabaseDto.name,
            },
        });
        return database;
    }
    async findAll() {
        const databases = await this.prisma.database.findMany();
        return databases;
    }
    async findOne(id) {
        const table = await this.prisma.database.findUnique({
            where: { id },
        });
        if (!table) {
            throw new common_1.NotFoundException(`Table with ID ${id} not found`);
        }
        return table;
    }
    async update(id, updateTableDto) {
        const database = await this.prisma.database.update({
            where: { id },
            data: {
                databaseID: updateTableDto.databaseID,
                name: updateTableDto.name,
            },
        });
        return database;
    }
    async remove(id) {
        const database = await this.prisma.database.delete({
            where: { id },
        });
        return { message: `Table with ID ${id} has been removed`, database };
    }
};
exports.DatabasesService = DatabasesService;
exports.DatabasesService = DatabasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DatabasesService);
//# sourceMappingURL=databases.service.js.map