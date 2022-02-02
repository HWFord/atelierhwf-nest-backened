import { Global, Module } from '@nestjs/common';
import { SubcategoriesController } from './subcategories.controller';
import { subcategoryProviders } from './subcategory.provider';
import { SubcategoriesService } from 'src/subcategories/subcategories.service';
import { CategoriesService } from 'src/categories/categories.service';
import { categoryProviders } from '../categories/category.provider';

@Global()
@Module({
  imports:[
    // CategoriesModule
  ],
  providers: [SubcategoriesService, ...subcategoryProviders, CategoriesService, ...categoryProviders],
  controllers: [SubcategoriesController],
  exports:[SubcategoriesService]
})
export class SubcategoriesModule {}



