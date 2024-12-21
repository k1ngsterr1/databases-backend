import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  // Создать отчет
  async createReport(data: Prisma.ReportCreateInput) {
    return this.prisma.report.create({ data });
  }

  // Получить все отчеты
  async getAllReports() {
    return this.prisma.report.findMany();
  }

  // Получить отчет по ID
  async getReportById(id: string) {
    return this.prisma.report.findUnique({
      where: { id },
    });
  }

  // Обновить отчет
  async updateReport(id: string, data: Prisma.ReportUpdateInput) {
    return this.prisma.report.update({
      where: { id },
      data,
    });
  }

  // Удалить отчет
  async deleteReport(id: string) {
    return this.prisma.report.delete({
      where: { id },
    });
  }
}
