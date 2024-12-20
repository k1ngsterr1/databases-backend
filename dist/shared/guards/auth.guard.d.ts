import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare abstract class AuthGuard implements CanActivate {
    protected jwtService: JwtService;
    private readonly cookieName;
    constructor(jwtService: JwtService, cookieName: string);
    abstract validateUser(payload: any): Promise<boolean>;
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromCookies;
}
