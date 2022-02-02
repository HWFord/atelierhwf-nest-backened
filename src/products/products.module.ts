import { Global, Module } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { productProviders } from './products.providers';
import { ProductsController } from 'src/products/products.controller';
import { SubcategoriesModule } from '../subcategories/subcategories.module';
import { DatabaseModule } from '../config/database.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from '../categories/categories.module';
import { SubcategoriesService } from 'src/subcategories/subcategories.service';
import { subcategoryProviders } from '../subcategories/subcategory.provider';
import { CategoriesService } from 'src/categories/categories.service';
import { categoryProviders } from '../categories/category.provider';

@Global()
@Module({
  imports:[
  ],
  providers: [
    ProductsService, 
    ...productProviders, 
    SubcategoriesService, 
    ...subcategoryProviders,
    CategoriesService, 
    ...categoryProviders
  ],
  controllers: [ProductsController],
  exports:[]
})
export class ProductsModule {}
