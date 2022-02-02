import { Controller, Body,Post, HttpException,HttpStatus,UsePipes,Get,Req,UseGuards,} from '@nestjs/common';
import { AuthService } from './auth.service';;
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
// import { RegistrationStatus } from './interfaces/regisration-status.interface';
// import { JwtPayload } from './interfaces/payload.interface';
// import { LoginStatus } from './interfaces/login-status.interface';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  tempAuth(){
      return {auth: 'works'};
  }

  @Post('login')
    async login(@Body() loginUserDto: LoginUserDto){ 

        const user = await this.userService.findByLogin(loginUserDto);
        const payload = {
            username : user.username,
        }
        const token = await this.authService.signPayload(payload);
        return {user, token};
  }

  @Get('logout')
  async logout(@Body() loginDTO: LoginUserDto){ 

      const user = undefined;
      const token = 0;
      return {user, token};
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto){
      const user = await this.userService.create(createUserDto);
      const payload = {
        username : user.username,
      }
      const token = await this.authService.signPayload(payload);
      return {user, token};
  }
    

  // @Post('register')
  // public async register(
  //   @Body() createUserDto: CreateUserDto,
  // ): Promise<RegistrationStatus> {
  //   const result: RegistrationStatus = await this.authService.register(
  //     createUserDto,
  //   );

  //   if (!result.success) {
  //     throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
  //   }

  //   return result;
  // }

  // @Post('login')
  // public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
  //   return await this.authService.login(loginUserDto);
  // }

  // @Get('whoami')
  // @UseGuards(AuthGuard())
  // public async testAuth(@Req() req: any): Promise<JwtPayload> {
  //   return req.user;
  // }
}