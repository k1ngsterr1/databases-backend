import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ReportController],
  providers: [ReportService, PrismaService],
})
export class ReportModule {}
