import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { AuthGuard } from './auth.guard';

@Injectable()
export class AdminAuthGuard extends AuthGuard {
  constructor(
    jwtService: JwtService,
    private prisma: PrismaService,
  ) {
    super(jwtService, 'admin_jwt'); // Указываем куку admin_jwt
  }

  async validateUser(payload: any): Promise<boolean> {
    const admin = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });

    return !!admin; // Возвращаем true, если админ найден
  }
}
