import { Injectable, Inject, forwardRef} from '@nestjs/common';
import { DeleteResult, UpdateResult  } from 'typeorm';
import { Repository } from 'typeorm';
import { Subcategory } from 'src/subcategories/subcategory.entity';
import { Product } from 'src/products/product.entity';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { SubcategoriesService } from '../subcategories/subcategories.service';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private productRepository: Repository<Product>,
    @Inject('SUBCATEGORY_REPOSITORY') private subcategoryRepository: Repository<Subcategory>
  ){}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product>{
    return this.productRepository.findOne(id);
  }

  async create(createProductDto: CreateProductDto):Promise <any> {
    let product = new Product()

    product.name = createProductDto.name;
    product.price = createProductDto.price; 
    product.quantity = createProductDto.quantity;
    product.description = createProductDto.description;
    product.materiels = createProductDto.materiels;
    product.tags = createProductDto.tags;
    product.img = createProductDto.img;
    product.reference = createProductDto.reference;
    product.color = createProductDto.color;
    product.size = createProductDto.size;
    product.personnalisable = createProductDto.personnalisable;
    product.sId = createProductDto.sId;
    product.subcategory = await this.subcategoryRepository.findOne(
      createProductDto.subcategoryID
    );

    return this.productRepository.save(product);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<UpdateResult> {
    return this.productRepository.update(id, updateProductDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }

}



