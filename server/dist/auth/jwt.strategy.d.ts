import { Strategy } from 'passport-jwt';
import { TokenService } from 'src/token/token.service';
import { IUser } from 'src/user/interfaces/user.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    validate(req: any, user: Partial<IUser>): Promise<Partial<IUser>>;
}
export {};
