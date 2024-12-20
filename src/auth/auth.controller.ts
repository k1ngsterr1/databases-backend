import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    try {
      const { user, token } = await this.authService.register(registerDto);

      res.cookie('admin_jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // use secure cookies in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
      });

      return res.send({ uid: user.id });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const { user, token } = await this.authService.login(loginDto);

      res.cookie('admin_jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.send({ uid: user.id });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthService)
  @Get('check-token')
  async checkToken() {
    return { isValid: true };
  }
}
