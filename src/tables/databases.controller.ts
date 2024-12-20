import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { DatabasesService } from './databases.service';

@Controller('databases')
export class DatabasesController {
  constructor(private readonly databasesService: DatabasesService) {}

  @Post()
  create(@Body() createTableDto: CreateTableDto) {
    return this.databasesService.create(createTableDto);
  }

  @Get()
  findAll() {
    return this.databasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.databasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.databasesService.update(+id, updateTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.databasesService.remove(+id);
  }
}
