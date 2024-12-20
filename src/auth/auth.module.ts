import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { SharedModule } from 'src/shared/shared.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AdminAuthGuard } from 'src/shared/guards/admin-auth.guard';

@Module({
  imports: [SharedModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AdminAuthGuard],
  exports: [AdminAuthGuard],
})
export class AdminAuthModule {}
