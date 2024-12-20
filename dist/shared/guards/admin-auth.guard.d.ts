import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { AuthGuard } from './auth.guard';
export declare class AdminAuthGuard extends AuthGuard {
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    validateUser(payload: any): Promise<boolean>;
}
