'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthController = void 0;
const common_1 = require('@nestjs/common');
const login_dto_1 = require('./dto/login.dto');
const register_dto_1 = require('./dto/register.dto');
const auth_service_1 = require('./auth.service');
let AuthController = class AuthController {
  constructor(authService) {
    this.authService = authService;
  }
  async register(registerDto, res) {
    try {
      const { user, token } = await this.authService.register(registerDto);
      res.cookie('admin_jwt', token, {
        httpOnly: true,
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.send({ uid: user.id });
    } catch (error) {
      throw new common_1.HttpException(
        error.message,
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async login(loginDto, res) {
    try {
      const { user, token } = await this.authService.login(loginDto);
      res.cookie('admin_jwt', token, {
        httpOnly: true,
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.send({ uid: user.id });
    } catch (error) {
      throw new common_1.HttpException(
        error.message,
        common_1.HttpStatus.BAD_REQUEST,
      );
    }
  }
  async checkToken() {
    return { isValid: true };
  }
};
exports.AuthController = AuthController;
__decorate(
  [
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [register_dto_1.RegisterDto, Object]),
    __metadata('design:returntype', Promise),
  ],
  AuthController.prototype,
  'register',
  null,
);
__decorate(
  [
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [login_dto_1.LoginDto, Object]),
    __metadata('design:returntype', Promise),
  ],
  AuthController.prototype,
  'login',
  null,
);
__decorate(
  [
    (0, common_1.UseGuards)(auth_service_1.AuthService),
    (0, common_1.Get)('check-token'),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise),
  ],
  AuthController.prototype,
  'checkToken',
  null,
);
exports.AuthController = AuthController = __decorate(
  [
    (0, common_1.Controller)('auth'),
    __metadata('design:paramtypes', [auth_service_1.AuthService]),
  ],
  AuthController,
);
//# sourceMappingURL=auth.controller.js.map
