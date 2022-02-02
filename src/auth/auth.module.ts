import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { userProviders } from 'src/users/user.provider';

@Global()
@Module({
  // imports: [
  //   // UsersModule,
  //   PassportModule.register({
  //     defaultStrategy: 'jwt',
  //     property: 'user',
  //     session: false,
  //   }),
  //   JwtModule.register({
  //     secret: process.env.SECRETKEY,
  //     signOptions: {
  //       expiresIn: process.env.EXPIRESIN,
  //     },
  //   }),
  // ],
  // controllers: [AuthController],
  // providers: [AuthService, JwtStrategy, UsersService, ...userProviders],
  // exports: [PassportModule, JwtModule],
  controllers: [AuthController],
  imports:[UsersModule],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
