import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @Inject('CATEGORY_REPOSITORY') private categoryRepository: Repository<Category>,
  )
  {}

  async create(createCategoryDto: CreateCategoryDto):Promise <any> {
    return this.categoryRepository.save(createCategoryDto);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: number): Promise<Category>  {
    return this.categoryRepository.findOne(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<UpdateResult>  {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(id);
  }
}
