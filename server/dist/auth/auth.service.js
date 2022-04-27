"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const moment = require("moment");
const token_service_1 = require("../token/token.service");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(jwtService, userService, tokenService) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async signUp(createUserDto) {
        await this.userService.create(createUserDto);
        return true;
    }
    async generateToken(data, options) {
        return this.jwtService.sign(data, options);
    }
    saveToken(createUserTokenDto) {
        return this.tokenService.create(createUserTokenDto);
    }
    async signUser(user) {
        const tokenPayload = {
            _id: user._id,
        };
        const token = await this.generateToken(tokenPayload);
        const expireAt = moment().add(1, 'day').toISOString();
        await this.saveToken({
            token,
            expireAt,
            uId: user._id,
        });
        return token;
    }
    async signIn({ name, password }) {
        const user = await this.userService.findByName(name);
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = await this.signUser(user);
            const readableUser = user.toObject();
            readableUser.accessToken = token;
            return readableUser;
        }
        throw new common_1.BadRequestException('Invalid credentials');
    }
    async changePassword(userId, changePasswordDto) {
        const password = await this.userService.hashPassword(changePasswordDto.password);
        await this.userService.update(userId, { password });
        await this.tokenService.deleteAll(userId);
        return true;
    }
    async verifyToken(token) {
        const data = this.jwtService.verify(token);
        const tokenExists = await this.tokenService.exists(data._id, token);
        if (tokenExists) {
            return data;
        }
        throw new common_1.UnauthorizedException();
    }
    async forgotPassword(forgotPasswordDto) {
        const user = await this.userService.findByName(forgotPasswordDto.name);
        if (!user) {
            throw new common_1.BadRequestException('Invalid email');
        }
        this.changePassword(user._id, { password: 'Changedpassword' });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map