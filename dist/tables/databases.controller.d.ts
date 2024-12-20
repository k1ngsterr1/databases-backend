import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { DatabasesService } from './databases.service';
export declare class DatabasesController {
    private readonly databasesService;
    constructor(databasesService: DatabasesService);
    create(createTableDto: CreateTableDto): Promise<{
        databaseID: string;
        name: string;
        id: number;
    }>;
    findAll(): Promise<{
        databaseID: string;
        name: string;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        databaseID: string;
        name: string;
        id: number;
    }>;
    update(id: string, updateTableDto: UpdateTableDto): Promise<{
        databaseID: string;
        name: string;
        id: number;
    }>;
    remove(id: string): Promise<{
        message: string;
        database: {
            databaseID: string;
            name: string;
            id: number;
        };
    }>;
}
