import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService){}

  async signPayload(payload: any){
      return sign(payload, 'secretKey', {expiresIn: '12h'});
  }

  async validateUser(payload:any){
      return await this.userService.findByPayload(payload);
  }
  
  // constructor(
  //   private readonly usersService: UsersService,
  //   private readonly jwtService: JwtService,
  // ) {}

  // async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
  //   let status: RegistrationStatus = {
  //     success: true,
  //     message: 'user registered',
  //   };

  //   try {
  //     await this.usersService.create(userDto);
  //   } catch (err) {
  //     status = {
  //       success: false,
  //       message: err,
  //     };
  //   }

  //   return status;
  // }

  // async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
  //   // find user in db
  //   const user = await this.usersService.findByLogin(loginUserDto);

  //   // generate and sign token
  //   const token = this._createToken(user);

  //   return {
  //     username: user.username,
  //     ...token,
  //   };
  // }

  // async validateUser(payload: JwtPayload): Promise<UserDto> {
  //   const user = await this.usersService.findByPayload(payload);
  //   if (!user) {
  //     throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
  //   }
  //   return user;
  // }

  // private _createToken({ username }: UserDto): any {
  //   const expiresIn = process.env.EXPIRESIN;

  //   const user: JwtPayload = { username };
  //   const accessToken = this.jwtService.sign(user);
  //   return {
  //     expiresIn,
  //     accessToken,
  //   };
  // }
}