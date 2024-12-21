import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/report.dto';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  // Создать отчет
  @Post()
  async createReport(@Body() createReportDto: CreateReportDto) {
    const prismaData = {
      tableName: createReportDto.tableName,
      filters: JSON.stringify(createReportDto.filters), // Convert to JSON string
      results: JSON.stringify(createReportDto.results), // Convert to JSON string
      author: createReportDto.author,
      createdAt: createReportDto.createdAt || new Date(),
    };

    return this.reportService.createReport(prismaData);
  }

  // Получить все отчеты
  @Get()
  async getAllReports() {
    return this.reportService.getAllReports();
  }

  // Получить отчет по ID
  @Get(':id')
  async getReportById(@Param('id') id: string) {
    return this.reportService.getReportById(id);
  }

  // Обновить отчет
  @Put(':id')
  async updateReport(@Param('id') id: string, @Body() updateReportDto: any) {
    return this.reportService.updateReport(id, updateReportDto);
  }

  // Удалить отчет
  @Delete(':id')
  async deleteReport(@Param('id') id: string) {
    return this.reportService.deleteReport(id);
  }
}
