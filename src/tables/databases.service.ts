import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class DatabasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDatabaseDto: CreateTableDto) {
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

  async findOne(id: number) {
    // Retrieve a specific table by ID
    const table = await this.prisma.database.findUnique({
      where: { id },
    });
    if (!table) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }
    return table;
  }

  async update(id: number, updateTableDto: UpdateTableDto) {
    // Update a table record in the database
    const database = await this.prisma.database.update({
      where: { id },
      data: {
        databaseID: updateTableDto.databaseID,
        name: updateTableDto.name,
      },
    });
    return database;
  }

  async remove(id: number) {
    // Delete a table record from the database
    const database = await this.prisma.database.delete({
      where: { id },
    });
    return { message: `Table with ID ${id} has been removed`, database };
  }
}
