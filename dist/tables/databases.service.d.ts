import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
export declare class DatabasesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDatabaseDto: CreateTableDto): Promise<{
        databaseID: string;
        name: string;
        id: number;
    }>;
    findAll(): Promise<{
        databaseID: string;
        name: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        databaseID: string;
        name: string;
        id: number;
    }>;
    update(id: number, updateTableDto: UpdateTableDto): Promise<{
        databaseID: string;
        name: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        message: string;
        database: {
            databaseID: string;
            name: string;
            id: number;
        };
    }>;
}
