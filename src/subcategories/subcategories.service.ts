import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'src/categories/category.entity';
import { Subcategory } from 'src/subcategories/subcategory.entity';
import { CreateSubcategoryDto } from 'src/subcategories/dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from 'src/subcategories/dto/update-subcategory.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';


@Injectable()
export class SubcategoriesService {

  constructor(
    @Inject('CATEGORY_REPOSITORY') private categoryRepository: Repository<Category>,
    @Inject('SUBCATEGORY_REPOSITORY') private subcategoryRepository: Repository<Subcategory>
  ){}

  async create(createSubcategoryDto: CreateSubcategoryDto):Promise <any> {
    let subcategory = new Subcategory();

    subcategory.name = createSubcategoryDto.name;
    subcategory.img = createSubcategoryDto.img;
    subcategory.cId = createSubcategoryDto.cId;
    subcategory.category = await this.categoryRepository.findOne(
      createSubcategoryDto.categoryID
    );
  }

  async findAll(): Promise<Subcategory[]> {
    return this.subcategoryRepository.find();
  }

  async findOne(id: number): Promise<Subcategory>  {
    return this.subcategoryRepository.findOne(id);
  }

  async update(id: number, updateSubcategoryDto: UpdateSubcategoryDto):  Promise<UpdateResult>  {
    return this.subcategoryRepository.update(id, updateSubcategoryDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.subcategoryRepository.delete(id);
  }
}
