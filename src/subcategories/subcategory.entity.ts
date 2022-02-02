import { Category } from 'src/categories/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100 })
  img: string;

  @Column()
  cId: number;

  @OneToMany(
    type=>Product,
    product => product.subcategory,
    {
      cascade: true,
      nullable: false,
    }
  )
  product:Product[];

  @ManyToOne(
    type=>Category,
    category => category.subcategory,
    {
      cascade:['insert', 'update'],
      nullable: false,
    }
  )
  category:Category;
}

