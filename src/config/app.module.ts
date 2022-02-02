import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'src/app.controller';
import { ProductsController } from 'src/products/products.controller';
import { SubcategoriesController } from 'src/subcategories/subcategories.controller';
import { AppService } from 'src/app.service';
import { CategoriesService } from 'src/categories/categories.service';
import { ProductsService } from 'src/products/products.service';
import { SubcategoriesService } from 'src/subcategories/subcategories.service';
import { CategoriesModule } from '../categories/categories.module';
import { categoryProviders } from '../categories/category.provider';
import { DatabaseModule } from './database.module';
import { ProductsModule } from '../products/products.module';
import { productProviders } from '../products/products.providers';
import { SubcategoriesModule } from '../subcategories/subcategories.module';
import { subcategoryProviders } from '../subcategories/subcategory.provider';
import { CategoriesController } from 'src/categories/categories.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { UsersModule } from 'src/users/users.module';
import { userProviders } from 'src/users/user.provider';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    ProductsModule,
    SubcategoriesModule,
    CategoriesModule,
    AuthModule,
    UsersModule
    
  ],
  controllers: [
    AppController,
    ProductsController,
    SubcategoriesController,
    CategoriesController,
    AuthController
  ],
  providers:[
    AppService,
    ProductsService,
    ...productProviders,
    SubcategoriesService,
    ...subcategoryProviders,
    CategoriesService,
    ...categoryProviders,
    AuthService,
    // JwtStrategy, 
    // UsersService, 
    // ...userProviders,
    // JwtService
  ]
})
export class AppModule {}
