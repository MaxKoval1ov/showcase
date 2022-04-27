import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as moment from 'moment';
import { CreateUserTokenDto } from 'src/token/dto/create-user-token.dto';
import { IUserToken } from 'src/token/interfaces/user-token.interface';
import { TokenService } from 'src/token/token.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { IReadableUser } from 'src/user/interfaces/readable-user.interface';
import { IUser } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';

import { SignInDto } from './dto/signin.dto';
import { ITokenPayload } from './interfaces/token-payload.interface';

export type User = any;

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<boolean> {
    await this.userService.create(createUserDto);
    return true;
  }

  private async generateToken(
    data: ITokenPayload,
    options?: JwtSignOptions,
  ): Promise<string> {
    return this.jwtService.sign(data, options);
  }

  private saveToken(
    createUserTokenDto: CreateUserTokenDto,
  ): Promise<IUserToken> {
    return this.tokenService.create(createUserTokenDto);
  }
  u;

  async signUser(user: IUser) {
    const tokenPayload: ITokenPayload = {
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

  async signIn({ name, password }: SignInDto): Promise<IReadableUser> {
    const user = await this.userService.findByName(name);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await this.signUser(user);
      const readableUser = user.toObject() as IReadableUser;
      readableUser.accessToken = token;

      return readableUser;
    }
    throw new BadRequestException('Invalid credentials');
  }

  async changePassword(
    userId: string,
    changePasswordDto: ChangePasswordDto,
  ): Promise<boolean> {
    const password = await this.userService.hashPassword(
      changePasswordDto.password,
    );
    await this.userService.update(userId, { password });
    await this.tokenService.deleteAll(userId);
    return true;
  }

  private async verifyToken(token): Promise<any> {
    const data = this.jwtService.verify(token) as ITokenPayload;
    const tokenExists = await this.tokenService.exists(data._id, token);

    if (tokenExists) {
      return data;
    }
    throw new UnauthorizedException();
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void> {
    const user = await this.userService.findByName(forgotPasswordDto.name);
    if (!user) {
      throw new BadRequestException('Invalid email');
    }
    this.changePassword(user._id, { password: 'Changedpassword' });
  }
}
