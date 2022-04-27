import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenService } from 'src/token/token.service';
import { IUser } from 'src/user/interfaces/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly tokenService: TokenService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_KEY,
    });
  }

  async validate(req, user: Partial<IUser>) {
    const token = req.headers.authorization.slice(7);
    const tokenExist = await this.tokenService.exists(user._id, token);
    if (tokenExist) return user;
    else throw new UnauthorizedException();
  }
}
