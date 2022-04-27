import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { IReadableUser } from 'src/user/interfaces/readable-user.interface';
import { IUser } from 'src/user/interfaces/user.interface';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { SignInDto } from './dto/signin.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<boolean>;
    signIn(signInDto: SignInDto): Promise<IReadableUser>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
    changePassword(user: IUser, changePasswordDto: ChangePasswordDto): Promise<boolean>;
}
