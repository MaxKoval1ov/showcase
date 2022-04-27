import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { IReadableUser } from 'src/user/interfaces/readable-user.interface';
import { IUser } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { SignInDto } from './dto/signin.dto';
export declare type User = any;
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    private readonly tokenService;
    constructor(jwtService: JwtService, userService: UserService, tokenService: TokenService);
    signUp(createUserDto: CreateUserDto): Promise<boolean>;
    private generateToken;
    private saveToken;
    u: any;
    signUser(user: IUser): Promise<string>;
    signIn({ name, password }: SignInDto): Promise<IReadableUser>;
    changePassword(userId: string, changePasswordDto: ChangePasswordDto): Promise<boolean>;
    private verifyToken;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
}
