import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { DatabasesService } from './databases.service';
import { DatabasesController } from './databases.controller';

@Module({
  imports: [SharedModule],
  controllers: [DatabasesController],
  providers: [DatabasesService, PrismaService],
})
export class DatabasesModule {}
