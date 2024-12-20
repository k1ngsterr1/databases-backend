import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(data: RegisterDto): Promise<{
        user: {
            id: number;
            email: string;
            password: string;
            createdAt: Date;
        };
        token: string;
    }>;
    login(data: LoginDto): Promise<{
        user: {
            id: number;
            email: string;
            password: string;
            createdAt: Date;
        };
        token: string;
    }>;
}
