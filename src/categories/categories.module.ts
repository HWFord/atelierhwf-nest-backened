import { Global, Module } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { CategoriesController } from './categories.controller';
import { categoryProviders } from './category.provider';

@Global()
@Module({
  imports:[
    // ConfigModule.forRoot(),
    // DatabaseModule,
  ],
  providers: [CategoriesService, ...categoryProviders],
  controllers: [CategoriesController],
  exports:[CategoriesService]
})
export class CategoriesModule {}
