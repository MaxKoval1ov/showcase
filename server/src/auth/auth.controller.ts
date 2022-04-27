import {
  Body,
  Controller,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { IReadableUser } from 'src/user/interfaces/readable-user.interface';
import { IUser } from 'src/user/interfaces/user.interface';

import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signUp')
  async signUp(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ): Promise<boolean> {
    return this.authService.signUp(createUserDto);
  }

  @Post('/signIn')
  async signIn(
    @Body(new ValidationPipe()) signInDto: SignInDto,
  ): Promise<IReadableUser> {
    return await this.authService.signIn(signInDto);
  }

  @Post('/forgotPassword')
  async forgotPassword(
    @Body(new ValidationPipe()) forgotPasswordDto: ForgotPasswordDto,
  ): Promise<void> {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Patch('/changePassword')
  @UseGuards(AuthGuard())
  async changePassword(
    @Body('user') user: IUser,
    @Body(new ValidationPipe()) changePasswordDto: ChangePasswordDto,
  ): Promise<boolean> {
    return this.authService.changePassword(user._id, changePasswordDto);
  }
}
