import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Role } from 'src/roles/enum/role-enum';
import { AuthService } from './auth.service';

interface User {
    id: string;
    email: string;
    password: string;
    role: Role;
  }
  

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<User> {
    const user = await this.authService.signup(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
