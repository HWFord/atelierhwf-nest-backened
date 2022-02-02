import { Global, Module } from '@nestjs/common';
// import { AuthModule } from 'src/auth/auth.module';
import { userProviders } from './user.provider';
import { UsersService } from './users.service';

@Global()
@Module({
  imports: [
  ],
  controllers: [],
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
})
export class UsersModule {}