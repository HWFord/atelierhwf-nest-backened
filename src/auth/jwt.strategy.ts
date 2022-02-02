import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, VerifiedCallback} from 'passport-jwt';
import { Strategy } from 'passport-local'
import { UserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
  constructor(private AuthService: AuthService){
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'secretKey',
    });
}

async validate(payload: any, done: VerifiedCallback){
    const user = await this.AuthService.validateUser(payload);
    if(!user){
        return done(
            new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
            false,
        );
    }

    return done(null,user,payload.iat);
}
    // constructor(private readonly authService: AuthService) {
    //     super({
    //         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //         secretOrKey: process.env.SECRETKEY,
    //     });  
    // }
    
    // async validate(payload: JwtPayload): Promise<UserDto> {
    //     const user = await this.authService.validateUser(payload);
    //     if (!user) {
    //         throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
    //     }    
    //     return user;  
    // }
}